import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { DashBoardResponse } from "@/types/dashboard.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AllCoursesResponse, StudentChaptersResponse, StudentCoursesResponse, StudentPaymentsResponse, StudentSubscriptionsResponse } from "../types/student.types";
import { StudentCartResponse } from "../types/cart.types";
import { BaseResponse } from "@/types/common.types";
import { StudentCartBooksResponse } from "../types/cartBooks.types";

export const cartBooksApi = createApi({
  reducerPath: "cartBooksApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["CartBooks"],
  endpoints: (builder) => ({
    getStudentCartBooks: builder.query<StudentCartBooksResponse, void>({
      query: () => ({
        url: "/platform/StudentBookCart",
        method: "GET",
      }),
      providesTags: ["CartBooks"],
    }),
    addBookToCart: builder.mutation<BaseResponse, { Id: string }>({
      query: (body) => ({
        url: "/platform/AddBookToCart",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["CartBooks"],
    }),
    addCourseToCart: builder.mutation<BaseResponse, { Id: string }>({
      query: (body) => ({
        url: "/platform/AddCourseToCart",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["CartBooks"],
    }),

    deleteBookFromCart: builder.mutation<BaseResponse, string>({
      query: (id) => ({
        url: "/platform/DeleteItemFromBookCart",
        method: "POST",
        data: { Id: id },
      }),
      invalidatesTags: ["CartBooks"],
    }),
  }),
});

export const { useGetStudentCartBooksQuery, useAddCourseToCartMutation, useDeleteBookFromCartMutation, useAddBookToCartMutation } = cartBooksApi;
