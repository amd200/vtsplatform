import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { DashBoardResponse } from "@/types/dashboard.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AllCoursesResponse, StudentChaptersResponse, StudentCoursesResponse, StudentPaymentsResponse, StudentSubscriptionsResponse } from "../types/student.types";
import { StudentCartResponse } from "../types/cart.types";
import { BaseResponse } from "@/types/common.types";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getStudentCart: builder.query<StudentCartResponse, void>({
      query: () => ({
        url: "/platform/StudentCart",
        method: "GET",
      }),
      providesTags: ["Cart"],
    }),
    addCourseToCart: builder.mutation<BaseResponse, { Id: string }>({
      query: (body) => ({
        url: "/platform/AddCourseToCart",
        method: "POST",
        data: body,
      }),
    }),
    deleteCourseFromCart: builder.mutation<BaseResponse, string>({
      query: (id) => ({
        url: "/platform/DeleteItemFromCart",
        method: "POST",
        data: { Id: id },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const { useGetStudentCartQuery, useAddCourseToCartMutation, useDeleteCourseFromCartMutation } = cartApi;
