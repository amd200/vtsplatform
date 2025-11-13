import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AllCoursesResponse, ExamResultsRepsone, GetCourseDetailsRepsone, ShowContentRepsone, StudentChaptersResponse, StudentCoursesResponse, StudentLessonsRepsone, StudentPaymentsResponse, StudentScheduleRepsone, StudentSessionsRepsone, StudentSubscriptionsResponse, StudentWalletRepsone } from "../types/student.types";

export const lessonContentApi = createApi({
  reducerPath: "lessonContentApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
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
    showRichText: builder.query<ShowContentRepsone, { Id?: string; LessonId?: string }>({
      query: ({ Id, LessonId }) => ({
        url: `/platform/Show/RichTextByUrl`,
        method: "GET",
        params: {
          Id,
          LessonId,
        },
      }),
    }),
    showAudio: builder.query<ShowContentRepsone, { Id?: string; LessonId?: string }>({
      query: ({ Id, LessonId }) => ({
        url: `/platform/Show/Sound2`,
        method: "GET",
        params: {
          Id,
          LessonId,
        },
      }),
    }),
  }),
});

export const { useShowVideoQuery, useShowPdfQuery, useShowRichTextQuery, useShowAudioQuery } = lessonContentApi;
