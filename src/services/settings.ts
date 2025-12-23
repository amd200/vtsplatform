import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { GeneralSettingsResponse } from "@/types/common.types";
import { DashBoardResponse } from "@/types/dashboard.types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const settingsApi = createApi({
  reducerPath: "settingsApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getGeneralSettings: builder.query<GeneralSettingsResponse, void>({
      query: () => ({
        url: "/platform/settings/generalSettings",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetGeneralSettingsQuery } = settingsApi;
