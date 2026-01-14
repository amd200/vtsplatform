import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function fetcher<T = unknown>(url: string, options: RequestInit & { revalidate?: number } = {}): Promise<T> {
  const session = await getServerSession(authOptions);

  const appToken = session?.user?.StudentToken ? "UhqBUAP3T6Irguej2ogSdg==" : "Beare UhqBUAP3T6Irguej2ogSdg==";

  const baseURL = process.env.NEXT_PUBLIC_API_URL!;

  const res = await fetch(`${baseURL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      "X-App-Token": appToken,
      "X-Student-Token": session?.user?.StudentToken ?? "",
      Authorization: `Bearer UhqBUAP3T6Irguej2ogSdg==`,
      ...options.headers,
    },

    // 👇 ده المهم
    next: {
      revalidate: options.revalidate ?? 300, // 5 دقائق
    },

    ...options,
  });

  const data = await res.json();
  return data as T;
}
