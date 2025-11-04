import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { DashBoardResponse } from "@/types/dashboard.types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getDashboardData: builder.query<DashBoardResponse, void>({
      query: () => ({
        url: "/platform/Dashboard/AllData",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardApi;
