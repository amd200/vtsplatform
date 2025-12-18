import { auth } from "@/auth";

export async function fetcher<T = unknown>(url: string, options: RequestInit = {}): Promise<T> {
  const session = await auth();

  const baseURL = process.env.NEXT_PUBLIC_API_URL!;
  const rawAppToken = process.env.NEXT_PUBLIC_APP_TOKEN!;

  const hasStudentToken = !!session?.user?.StudentToken;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-App-Token": hasStudentToken ? rawAppToken : `Bearer ${rawAppToken}`,
  };

  if (hasStudentToken) {
    headers["X-Student-Token"] = session.user.StudentToken;
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
