import { auth } from "@/auth";
import { getServerSession } from "next-auth";

export async function fetcher<T = unknown>(url: string, options: RequestInit = {}): Promise<T> {
  const session = await getServerSession();

  const baseURL = process.env.NEXT_PUBLIC_API_URL!;
  const appToken = process.env.NEXT_PUBLIC_APP_TOKEN!;

  const studentToken = session?.user?.StudentToken;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (studentToken) {
    headers["X-Student-Token"] = studentToken;
  } else {
    headers.Authorization = `Bearer ${appToken}`;
  }

  try {
    const res = await fetch(`${baseURL}${url}`, {
      ...options,
      headers: {
        ...headers,
        ...options.headers,
      },
      cache: "no-store",
    });

    const data = await res.json().catch(() => null);
    return data as T;
  } catch (error) {
    // Error واضح ومقروء
    throw error instanceof Error ? error : new Error("حدث خطأ غير متوقع أثناء الاتصال بالسيرفر");
  }
}
