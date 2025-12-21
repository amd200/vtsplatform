import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { DashBoardResponse } from "@/types/dashboard.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { ActivateCodeResponse, AllCoursesResponse, CoutriesRepsone, EWalletRepsone, ExamResultsRepsone, FawryRepsone, GetChapterDetailsRepsone, GetCourseDetailsRepsone, GetLessonDetailsRepsone, ShowContentRepsone, StudentChaptersResponse, StudentCoursesResponse, StudentLessonsRepsone, StudentPaymentsResponse, StudentScheduleRepsone, StudentSessionsRepsone, StudentSubscriptionsResponse, StudentWalletRepsone } from "../types/student.types";
import { BaseResponse, Course } from "@/types/common.types";

export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["StudentCourses", "StudentChapters", "AllCourses", "CourseDetails"],
  endpoints: (builder) => ({
    getStudentWallet: builder.query<StudentWalletRepsone, void>({
      query: () => ({
        url: `/platform/StudentWallet`,
        method: "GET",
      }),
    }),
    reChargeBalanceWithFawry: builder.mutation<FawryRepsone, { phoneNumber: string; amount: number }>({
      query: ({ phoneNumber, amount }) => ({
        url: `/platform/StudentWallet/FawryPay`,
        method: "POST",
        data: {
          Mobile: phoneNumber,
          amount,
        },
      }),
      // invalidatesTags: ["StudentCourses", "AllCourses"],
    }),
    reChargeBalanceWithEWallet: builder.mutation<EWalletRepsone, { phoneNumber: string; amount: number }>({
      query: ({ phoneNumber, amount }) => ({
        url: `/platform/StudentWallet/PaymobPaymentEWallet`,
        method: "POST",
        data: {
          Mobile: phoneNumber,
          amount,
        },
      }),
      // invalidatesTags: ["StudentCourses", "AllCourses"],
    }),
    reChargeBalanceWithCard: builder.mutation<EWalletRepsone, { phoneNumber: string; amount: number }>({
      query: ({ phoneNumber, amount }) => ({
        url: `/platform/StudentWallet/PaymobPaymentCard`,
        method: "POST",
        data: {
          Mobile: phoneNumber,
          amount,
        },
      }),
      // invalidatesTags: ["StudentCourses", "AllCourses"],
    }),
    requestRefundShipping: builder.mutation<BaseResponse<null>, { Phone: string; Subject: string; Message: String }>({
      query: ({ Phone, Message, Subject }) => ({
        url: `/platform/StudentWallet/RequestRefundShipping`,
        method: "POST",
        data: {
          Phone,
          Message,
          Subject,
        },
      }),
      // invalidatesTags: ["StudentCourses", "AllCourses"],
    }),
  }),
});

export const { useRequestRefundShippingMutation, useReChargeBalanceWithCardMutation, useReChargeBalanceWithEWalletMutation, useReChargeBalanceWithFawryMutation, useGetStudentWalletQuery } = walletApi;
