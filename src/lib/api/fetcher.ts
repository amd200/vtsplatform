import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

type FetcherOptions = RequestInit & {
  revalidate?: number;
};

export async function fetcher<T = unknown>(url: string, options: FetcherOptions = {}): Promise<T> {
  try {
    const session = await getServerSession(authOptions);

    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    if (!baseURL) {
      throw new Error("API base URL is not defined");
    }

    const appToken = session?.user?.StudentToken ? "UhqBUAP3T6Irguej2ogSdg==" : "UhqBUAP3T6Irguej2ogSdg==";

    const res = await fetch(`${baseURL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "X-App-Token": appToken,
        "X-Student-Token": session?.user?.StudentToken ?? "",
        Authorization: `Bearer UhqBUAP3T6Irguej2ogSdg==`,
        ...options.headers,
      },
      next: options.revalidate ? { revalidate: options.revalidate } : undefined,
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || `Request failed with status ${res.status}`);
    }

    if (res.status === 204) {
      return null as T;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error("Fetcher error:", error);
    throw error; // مهم جدًا
  }
}
