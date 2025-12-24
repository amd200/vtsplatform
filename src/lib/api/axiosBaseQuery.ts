import { BaseResponse } from "@/types/common.types";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { getSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";

// ================= AXIOS INSTANCES =================

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const publicAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
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
    const appToken = process.env.NEXT_PUBLIC_APP_TOKEN;
    const hasStudentToken = Boolean(session?.user?.StudentToken);
    config.headers = config.headers ?? {};
    config.headers["Content-Type"] = "application/json";
    if (hasStudentToken) {
      config.headers["X-Student-Token"] = session!.user.StudentToken;
      config.headers["X-App-Token"] = appToken;
    }
    config.headers.Authorization = `Bearer ${appToken}`;
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
      skipAuth?: boolean;
    },
    unknown,
    BaseResponse<unknown>
  > =>
  async ({ url, method, data, params, skipAuth }) => {
    try {
      const client = skipAuth ? publicAxios : axiosInstance;

      const result = await client({
        url,
        method,
        data,
        params,
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
