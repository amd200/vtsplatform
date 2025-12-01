import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { DashBoardResponse } from "@/types/dashboard.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AllCoursesResponse, GetAllMessageResponse, StudentChaptersResponse, StudentCoursesResponse, StudentPaymentsResponse, StudentSubscriptionsResponse } from "../types/student.types";
import { StudentCartResponse } from "../types/cart.types";
import { BaseResponse } from "@/types/common.types";

export const communicationApi = createApi({
  reducerPath: "communicationApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Commucation"],
  endpoints: (builder) => ({
    getAllMessages: builder.query<GetAllMessageResponse, { UserRole: number | string; FromOrToUserId: string }>({
      query: ({ UserRole, FromOrToUserId }) => ({
        url: "/platform/Communication/AllMessages",
        method: "GET",
        params: { UserRole, FromOrToUserId },
      }),
      // providesTags: ["Commucation"],
    }),
    getSentMessages: builder.query<GetAllMessageResponse, { UserRole: number | string; FromOrToUserId: string }>({
      query: ({ UserRole, FromOrToUserId }) => ({
        url: "/platform/Communication/GetSentMessagesWeb",
        method: "GET",
        params: { UserRole, FromOrToUserId },
      }),
      // providesTags: ["Commucation"],
    }),
    getRecievedMessages: builder.query<GetAllMessageResponse, { UserRole: number | string; FromOrToUserId: string }>({
      query: ({ UserRole, FromOrToUserId }) => ({
        url: "/platform/Communication/GetRecivedMessagesWeb",
        method: "GET",
        params: { UserRole, FromOrToUserId },
      }),
      // providesTags: ["Commucation"],
    }),
    sendMessages: builder.mutation<GetAllMessageResponse, { fromId: string; ToId: string; Title: string; Message: string }>({
      query: ({ fromId, ToId, Title, Message }) => ({
        url: "/platform/Communication/SendMessage",
        method: "POST",
        data: { fromId, ToId, Title, Message, ProblemType: 0 },
      }),
      invalidatesTags: ["Commucation"],
    }),
    getAdminData: builder.query<BaseResponse<{ Id: string; Name: string }>, void>({
      query: () => ({
        url: "/platform/Communication/GetAdminData",
        method: "GET",
      }),
      providesTags: ["Commucation"],
    }),

    addCourseToCart: builder.mutation<BaseResponse, { Id: string }>({
      query: (body) => ({
        url: "/platform/AddCourseToCart",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Commucation"],
    }),

    deleteCourseFromCart: builder.mutation<BaseResponse, string>({
      query: (id) => ({
        url: "/platform/DeleteItemFromCart",
        method: "POST",
        data: { Id: id },
      }),
      invalidatesTags: ["Commucation"],
    }),
  }),
});

export const { useGetSentMessagesQuery, useGetRecievedMessagesQuery, useSendMessagesMutation, useGetAdminDataQuery, useAddCourseToCartMutation, useDeleteCourseFromCartMutation } = communicationApi;
