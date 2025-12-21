import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { FawryRepsone, InvoiceRepsone } from "../types/student.types";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    buyCourse: builder.mutation<InvoiceRepsone, string>({
      query: (id) => ({
        url: `/platform/BuyCourseNow`,
        method: "POST",
        data: {
          Id: id,
        },
      }),
    }),
    fawryPay: builder.mutation<FawryRepsone, string>({
      query: (id) => ({
        url: `/platform/StudentCoursesPayment/FawryPay`,
        method: "POST",
        data: {
          Id: id,
        },
      }),
    }),
    studentWallet: builder.mutation<FawryRepsone, string>({
      query: (id) => ({
        url: `/platform/StudentCoursesPayment/PayWithStudentWallet`,
        method: "POST",
        data: {
          Id: id,
        },
      }),
    }),
    fawry: builder.mutation<string, any>({
      query: (data) => ({
        url: "https://atfawry.com/fawrypay-api/api/payments/init",
        method: "POST",
        skipAuth: true,
        data,
      }),
    }),
    CoursePaymentWithFawry: builder.mutation<string, string>({
      query: (data) => ({
        url: "/platform/StudentCoursesPayment/FawryPay",
        method: "POST",
        data: {
          Id: data,
        },
      }),
    }),
    createInvoice: builder.mutation<string, void>({
      query: () => ({
        url: "/platform/CompleteThePaymentProcess",
        method: "POST",
      }),
    }),
  }),
});

export const { useCreateInvoiceMutation, useCoursePaymentWithFawryMutation, useFawryMutation, useBuyCourseMutation, useFawryPayMutation, useStudentWalletMutation } = paymentApi;
