import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AllCoursesResponse, CommentResponse, ExamResultsRepsone, GetCourseDetailsRepsone, ShowContentRepsone, StudentChaptersResponse, StudentCoursesResponse, StudentLessonsRepsone, StudentPaymentsResponse, StudentScheduleRepsone, StudentSessionsRepsone, StudentSubscriptionsResponse, StudentWalletRepsone } from "../types/student.types";

export const lessonContentApi = createApi({
  reducerPath: "lessonContentApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    addComment: builder.mutation<CommentResponse, { Comment?: string; ExecutionId?: string; LessonId?: string }>({
      query: ({ Comment, ExecutionId, LessonId }) => ({
        url: `/platform/AddComment`,
        method: "POSt",
        data: {
          Comment,
          ExecutionId,
          LessonId,
        },
      }),
    }),
    deleteComment: builder.mutation<CommentResponse, { CommentId: string; Comment?: string; ExecutionId: string; LessonId: string }>({
      query: ({ CommentId, Comment, ExecutionId, LessonId }) => ({
        url: `/platform/DeleteComment`,
        method: "POSt",
        data: {
          CommentId,
          Comment,
          ExecutionId,
          LessonId,
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

export const { useAddCommentMutation, useDeleteCommentMutation, useLazyShowVideoQuery, useLazyShowPdfQuery, useLazyShowRichTextQuery, useLazyShowAudioQuery } = lessonContentApi;
