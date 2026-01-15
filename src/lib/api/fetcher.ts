import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

/* =========================
   Types
========================= */

export type FetcherOptions = RequestInit & {
  revalidate?: number;
  timeout?: number;
};

/* =========================
   Helpers
========================= */

function withTimeout<T>(promise: Promise<T>, timeout = 15000): Promise<T> {
  return Promise.race([promise, new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Request timeout")), timeout))]);
}

function getAppToken(hasStudentToken: boolean) {
  return hasStudentToken ? "UhqBUAP3T6Irguej2ogSdg==" : "Bearer UhqBUAP3T6Irguej2ogSdg==";
}

/* =========================
   Fetcher
========================= */

export async function fetcher<T = unknown>(url: string, options: FetcherOptions = {}): Promise<T> {
  const session = await getServerSession(authOptions);

  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  if (!baseURL) throw new Error("NEXT_PUBLIC_API_URL is not defined");

  const appToken = getAppToken(!!session?.user?.StudentToken);

  const fetchPromise = fetch(`${baseURL}${url}`, {
    method: options.method ?? "GET",

    headers: {
      "Content-Type": "application/json",
      "X-App-Token": appToken,
      "X-Student-Token": session?.user?.StudentToken ?? "",
      Authorization: "Bearer UhqBUAP3T6Irguej2ogSdg==",
      ...options.headers,
    },

    body: options.body && typeof options.body !== "string" ? JSON.stringify(options.body) : options.body,

    next: {
      revalidate: options.revalidate ?? 300,
    },

    ...options,
  });

  const res = await withTimeout(fetchPromise, options.timeout);

  if (!res.ok) {
    let errorMessage = `Request failed: ${res.status}`;
    try {
      const errorData = await res.json();
      errorMessage = errorData?.message ?? errorMessage;
    } catch {}

    throw new Error(errorMessage);
  }

  return (await res.json()) as T;
}
