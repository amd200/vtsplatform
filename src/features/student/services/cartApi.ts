import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { DashBoardResponse } from "@/types/dashboard.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AllCoursesResponse, StudentChaptersResponse, StudentCoursesResponse, StudentPaymentsResponse, StudentSubscriptionsResponse } from "../types/student.types";
import { StudentCartResponse } from "../types/cart.types";
import { BaseResponse } from "@/types/common.types";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getStudentCart: builder.query<StudentCartResponse, void>({
      query: () => ({
        url: "/platform/StudentCart",
        method: "GET",
      }),
    }),
    addCourseToCart: builder.mutation<BaseResponse, { Id: string }>({
      query: (body) => ({
        url: "/platform/AddCourseToCart",
        method: "POST",
        data: body,
      }),
    }),
  }),
});

export const { useGetStudentCartQuery, useAddCourseToCartMutation } = cartApi;
