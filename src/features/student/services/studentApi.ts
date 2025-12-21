import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { DashBoardResponse } from "@/types/dashboard.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { ActivateCodeResponse, AllCoursesResponse, CoutriesRepsone, EWalletRepsone, ExamResultsRepsone, FawryRepsone, GetChapterDetailsRepsone, GetCourseDetailsRepsone, GetLessonDetailsRepsone, ShowContentRepsone, StudentChaptersResponse, StudentCoursesResponse, StudentLessonsRepsone, StudentPaymentsResponse, StudentScheduleRepsone, StudentSessionsRepsone, StudentSubscriptionsResponse, StudentWalletRepsone } from "../types/student.types";
import { BaseResponse, Course } from "@/types/common.types";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["StudentCourses", "StudentChapters", "AllCourses", "CourseDetails"],
  endpoints: (builder) => ({
    getCountries: builder.query<CoutriesRepsone, void>({
      query: () => ({
        url: "/platform/Account/Countries",
        method: "GET",
      }),
    }),
    getStudentPayements: builder.query<StudentPaymentsResponse, void>({
      query: () => ({
        url: "/platform/Studentpayments",
        method: "GET",
      }),
    }),
    getStudentSubscriptions: builder.query<StudentSubscriptionsResponse, void>({
      query: () => ({
        url: "/platform/StudentSubscriptions",
        method: "GET",
      }),
    }),
    getStudentCourses: builder.query<StudentCoursesResponse, void>({
      query: () => ({
        url: "/platform/Content/StudentCourses",
        method: "GET",
      }),
      providesTags: ["StudentCourses"],
      keepUnusedDataFor: 120,
    }),

    getStudentChapters: builder.query<StudentChaptersResponse, void>({
      query: () => ({
        url: "/platform/Content/StudentChapters",
        method: "GET",
      }),
      providesTags: ["StudentChapters"],
      keepUnusedDataFor: 120,
    }),

    getAllCourses: builder.query<AllCoursesResponse, void>({
      query: () => ({
        url: "/platform/AllCourses",
        method: "GET",
      }),
      providesTags: ["AllCourses"],
      keepUnusedDataFor: 120,
    }),

    getCourseDetails: builder.query<GetCourseDetailsRepsone, string>({
      query: (Id) => ({
        url: `/platform/Content/StudentCourseDetails/${Id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "CourseDetails", id }],
      keepUnusedDataFor: 60,
    }),
    getChapterDetails: builder.query<GetChapterDetailsRepsone, string>({
      query: (Id) => ({
        url: `/platform/Content/StudentChapterDetails/${Id}`,
        method: "GET",
      }),
      // providesTags: (result, error, id) => [{ type: "CourseDetails", id }],
      // keepUnusedDataFor: 60,
    }),
    getLessonDetails: builder.query<GetLessonDetailsRepsone, string>({
      query: (Id) => ({
        url: `/platform/Content/StudentLessonDetails/${Id}`,
        method: "GET",
      }),
      // providesTags: (result, error, id) => [{ type: "CourseDetails", id }],
      // keepUnusedDataFor: 60,
    }),
    getProtectedVideo: builder.mutation<void, { lessonId: string; executionId: string }>({
      query: ({ lessonId, executionId }) => ({
        url: `/Student/MyCourses/ShowProtectedVideo`,
        method: "POST",
        data: {
          id: executionId,
          lessonId: lessonId,
        },
      }),
      // providesTags: (result, error, id) => [{ type: "CourseDetails", id }],
      // keepUnusedDataFor: 60,
    }),

    getStudentExamsResutls: builder.query<ExamResultsRepsone, void>({
      query: () => ({
        url: `/platform/StudentExamsResults`,
        method: "GET",
      }),
    }),
    getStudentLessons: builder.query<StudentLessonsRepsone, void>({
      query: () => ({
        url: `/platform/Content/StudentLessons`,
        method: "GET",
      }),
    }),

    getStudentSessions: builder.query<StudentSessionsRepsone, void>({
      query: () => ({
        url: `/platform/StudentSessions`,
        method: "GET",
      }),
    }),
    activateCode: builder.mutation<ActivateCodeResponse, string>({
      query: (code) => ({
        url: `/platform/Dashboard/ActivateCode`,
        method: "POST",
        data: {
          Code: code,
        },
      }),
      invalidatesTags: ["StudentCourses", "AllCourses"],
    }),

    getStudentSchedule: builder.query<StudentScheduleRepsone, { Id?: string; type?: string; fromDate?: string; toDate?: string }>({
      query: ({ Id, type, fromDate, toDate }) => ({
        url: `/platform/StudentScheduleWeb`,
        method: "GET",
        params: {
          Id,
          type,
          fromDate,
          toDate,
        },
      }),
    }),
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

export const { useRequestRefundShippingMutation, useReChargeBalanceWithCardMutation, useReChargeBalanceWithEWalletMutation, useReChargeBalanceWithFawryMutation, useGetCountriesQuery, useGetChapterDetailsQuery, useGetStudentPayementsQuery, useGetStudentSubscriptionsQuery, useActivateCodeMutation, useGetStudentCoursesQuery, useGetStudentChaptersQuery, useGetAllCoursesQuery, useGetCourseDetailsQuery, useGetStudentExamsResutlsQuery, useGetStudentLessonsQuery, useGetStudentSessionsQuery, useGetStudentScheduleQuery, useGetStudentWalletQuery, useGetProtectedVideoMutation } = studentApi;
