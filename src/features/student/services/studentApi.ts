import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { DashBoardResponse } from "@/types/dashboard.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AllCoursesResponse, ExamResultsRepsone, GetCourseDetailsRepsone, ShowContentRepsone, StudentChaptersResponse, StudentCoursesResponse, StudentLessonsRepsone, StudentPaymentsResponse, StudentScheduleRepsone, StudentSessionsRepsone, StudentSubscriptionsResponse } from "../types/student.types";
import { Course } from "@/types/common.types";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
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
    }),
    getStudentChapters: builder.query<StudentChaptersResponse, void>({
      query: () => ({
        url: "/platform/Content/StudentChapters",
        method: "GET",
      }),
    }),
    getAllCourses: builder.query<AllCoursesResponse, void>({
      query: () => ({
        url: "/platform/AllCourses",
        method: "GET",
      }),
    }),
    getCourseDetails: builder.query<GetCourseDetailsRepsone, string>({
      query: (Id) => ({
        url: `/platform/Content/StudentCourseDetails/${Id}`,
        method: "GET",
      }),
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
    showVideo: builder.query<ShowContentRepsone, { Id?: string; LessonId?: string }>({
      query: ({ Id, LessonId }) => ({
        url: `/platform/Show/VideoByUrl`,
        method: "GET",
        params: {
          Id,
          LessonId,
        },
      }),
    }),
    showPdf: builder.query<ShowContentRepsone, { Id?: string; LessonId?: string }>({
      query: ({ Id, LessonId }) => ({
        url: `/platform/Show/PdfByUrl`,
        method: "GET",
        params: {
          Id,
          LessonId,
        },
      }),
    }),
  }),
});

export const { useGetStudentPayementsQuery, useGetStudentSubscriptionsQuery, useGetStudentCoursesQuery, useGetStudentChaptersQuery, useGetAllCoursesQuery, useGetCourseDetailsQuery, useGetStudentExamsResutlsQuery, useGetStudentLessonsQuery, useGetStudentSessionsQuery, useGetStudentScheduleQuery, useShowVideoQuery, useShowPdfQuery } = studentApi;
