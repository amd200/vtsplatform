import { axiosBaseQuery } from "@/lib/api/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from "../types/auth.types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    signup: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (credentials) => ({
        url: "/platform/Account/SignUp",
        method: "POST",
        data: credentials,
      }),
    }),
    SignIn: builder.mutation<SignInResponse, SignInRequest>({
      query: (credentials) => ({
        url: "/platform/Account/SignIn",
        method: "POST",
        data: credentials,
      }),
    }),
    countries: builder.mutation<SignUpResponse, SignInRequest>({
      query: (credentials) => ({
        url: "/platform/Account/SignUp",
        method: "POST",
        data: credentials,
      }),
    }),
  }),
});

export const { useSignupMutation, useSignInMutation } = authApi;
