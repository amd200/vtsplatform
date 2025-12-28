import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function fetcher<T>(url: string, options: RequestInit = {}): Promise<T> {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  if (!baseURL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const session = await getServerSession(authOptions);

  const headers = new Headers();

  headers.set("Content-Type", "application/json");
  headers.set("X-App-Token", "UhqBUAP3T6Irguej2ogSdg==");
  headers.set("Authorization", "Bearer UhqBUAP3T6Irguej2ogSdg==");

  if (session?.user?.StudentToken) {
    headers.set("X-Student-Token", session.user.StudentToken);
  }

  if (options.headers) {
    new Headers(options.headers).forEach((value, key) => {
      headers.set(key, value);
    });
  }

  try {
    const res = await fetch(`${baseURL}${url}`, {
      ...options,
      headers,
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API ${res.status}: ${text}`);
    }

    return (await res.json()) as T;
  } catch (err) {
    console.error("FETCH FAILED:", {
      url: `${baseURL}${url}`,
      error: err,
    });
    throw err;
  }
}
