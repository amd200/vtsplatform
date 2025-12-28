import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function fetcher<T>(url: string, options: RequestInit = {}): Promise<T> {
  const baseURL = process.env.NEXT_PUBLIC_API_URL!;
  const APP_TOKEN = "UhqBUAP3T6Irguej2ogSdg==";

  const session = await getServerSession(authOptions);

  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (!session?.user?.StudentToken) {
    headers.set("Authorization", `Bearer ${APP_TOKEN}`);
  }

  if (session?.user?.StudentToken) {
    headers.set("X-App-Token", APP_TOKEN);
    headers.set("X-Student-Token", session.user.StudentToken);
  }

  const res = await fetch(`${baseURL}${url}`, {
    ...options,
    headers,
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }

  return res.json();
}
