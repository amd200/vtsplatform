import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function fetcher<T = unknown>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const session = await getServerSession(authOptions);

  const baseURL = process.env.NEXT_PUBLIC_API_URL!;
  const appToken = process.env.NEXT_PUBLIC_APP_TOKEN!;

  const rawStudentToken = session?.user?.StudentToken;

  const studentToken =
    typeof rawStudentToken === "string" &&
    rawStudentToken !== "undefined" &&
    rawStudentToken !== "null" &&
    /^[\x00-\x7F]+$/.test(rawStudentToken)
      ? rawStudentToken
      : null;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  // 👈 المنطق النهائي
  if (studentToken) {
    headers["X-Student-Token"] = studentToken;
    headers["X-App-Token"] = appToken;
  } else {
    headers.Authorization = `Bearer ${appToken}`;
  }

  console.log("FETCH DEBUG", {
    url,
    headers,
  });

  const res = await fetch(`${baseURL}${url}`, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    let body: any = null;

    try {
      body = await res.clone().json();
    } catch {
      body = await res.text().catch(() => null);
    }

    console.error("API ERROR", {
      url,
      status: res.status,
      body,
    });

    throw new Error(
      `API ${res.status}: ${
        body?.Message || body?.message || res.statusText
      }`
    );
  }

  return (await res.json()) as T;
}
