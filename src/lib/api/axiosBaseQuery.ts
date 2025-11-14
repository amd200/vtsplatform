import { BaseResponse } from "@/types/common.types";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { getSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      signOut({ callbackUrl: "/login" });
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  async (config) => {
    console.log("🛰️ Axios Request:", {
      url: config.url,
      method: config.method,
      data: config.data,
      params: config.params,
    });
    const session = await getSession();
    if (session) {
      config.headers["X-App-Token"] = `UhqBUAP3T6Irguej2ogSdg==`;
      config.headers["X-Student-Token"] = session?.user?.StudentToken;
      console.log(session?.user?.StudentToken);
    } else {
      config.headers.Authorization = `Bearer UhqBUAP3T6Irguej2ogSdg==`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

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
      console.log(data);
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        headers: { "Content-Type": "application/json" },

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
        const resData = error.response.data;
        // if (resData.Message) {
        //   toast.error(resData.Message);
        // }
        return { error: resData };
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
