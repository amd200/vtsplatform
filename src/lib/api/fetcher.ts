import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function fetcher<T = unknown>(url: string, options: RequestInit = {}): Promise<T> {
  const session = await getServerSession(authOptions);

  const baseURL = process.env.NEXT_PUBLIC_API_URL!;
  const appToken = process.env.NEXT_PUBLIC_APP_TOKEN!;
  const studentToken = session?.user?.StudentToken;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${appToken}`,
  };

  if (studentToken) {
    headers["X-Student-Token"] = studentToken;
    headers["X-App-Token"] = appToken;
  }

  const res = await fetch(`${baseURL}${url}`, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error ${res.status}: ${errorText}`);
  }

  return (await res.json()) as T;
}
