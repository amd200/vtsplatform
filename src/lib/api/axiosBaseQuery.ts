import { BaseResponse } from "@/types/common.types";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { getSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";

// ================= AXIOS INSTANCE =================
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// ================= RESPONSE INTERCEPTOR =================
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      signOut({ callbackUrl: "/login" });
    }
    return Promise.reject(error);
  }
);

// ================= REQUEST INTERCEPTOR =================
axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    const appToken = process.env.NEXT_PUBLIC_APP_TOKEN!;
    const hasStudentToken = Boolean(session?.user?.StudentToken);

    // تأكد إن headers موجود
    config.headers = config.headers ?? {};

    // عدّل عليه مباشرة
    config.headers["Content-Type"] = "application/json";

    config.headers["X-App-Token"] = hasStudentToken
      ? appToken
      : `Bearer ${appToken}`;

    if (hasStudentToken) {
      config.headers["X-Student-Token"] = session!.user.StudentToken;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ================= RTK BASE QUERY =================
export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    BaseResponse<unknown>
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(`Upload Progress: ${percent}%`);
          }
        },
      });

      return { data: result.data };
    } catch (err) {
      const error = err as AxiosError<BaseResponse<unknown>>;

      if (error.response?.data) {
        return { error: error.response.data };
      }

      const fallbackError: BaseResponse<null> = {
        Status: false,
        Code: "",
        Message: error.message || "حدث خطأ غير متوقع",
        Data: null,
      };

      toast.error(fallbackError.Message);
      return { error: fallbackError };
    }
  };
