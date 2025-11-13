import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AllCoursesResponse, ExamResultsRepsone, FawryRepsone, GetCourseDetailsRepsone, InvoiceRepsone, ShowContentRepsone, StudentChaptersResponse, StudentCoursesResponse, StudentLessonsRepsone, StudentPaymentsResponse, StudentScheduleRepsone, StudentSessionsRepsone, StudentSubscriptionsResponse, StudentWalletRepsone } from "../types/student.types";

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
  }),
});

export const { useBuyCourseMutation, useFawryPayMutation, useStudentWalletMutation } = paymentApi;
