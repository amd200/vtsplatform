import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function fetcher<T = unknown>(url: string, options: RequestInit = {}): Promise<T> {
  try {
    const session = await getServerSession(authOptions);
    console.log("from fethcer", session);
    const res = await fetch(`${process.env.NEXT_PUBLIC_FILES_PATH}${url}`, {
      headers: {
        "Content-Type": "application/json",
        "X-App-Token": "UhqBUAP3T6Irguej2ogSdg==",
        "X-Student-Token": session?.user?.StudentToken ?? "",
        ...options.headers,
      },
      ...options,
      cache: "no-store",
    });

    const data = await res.json().catch(() => null);
    console.log(data);

    // if (!res.ok || (data && data.success === false)) {
    //   throw new Error(data?.message || "حدث خطأ أثناء الاتصال بالسيرفر");
    // }

    return data as T;
  } catch (error) {
    console.error(error);
    throw error instanceof Error ? error : new Error("حدث خطأ غير متوقع أثناء جلب البيانات");
  }
}
