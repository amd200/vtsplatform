import { BaseResponse } from "@/types/common.types";

export interface SignInRequest {
  UserName: string;
  Password: string;
  DeviceToken?: string;
}

export interface refreshToken {
  refreshToken: string;
}

export interface SignUpRequest {
  FirstName: string;
  LastName: string;
  MobileNumber: string;
  CountryId: string;
  Password: string;
  ConfirmPassword: string;
  Gender: string;
  DeviceToken: string;
}

export interface VerifyOtpCodeRequest {
  otpCode: string;
}

export interface LogoutRequest {
  userId: string;
}
export interface ForgetPasswordOrResendOtoCodeRequest {
  email: string;
}
export interface ResetPasswordRequest {
  email: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface SignInData {
  StudentToken: string;
  UserId: string;
  PersonId: string;
  Role: string;
  StudentName: string;
  StudentImage: string;
}
export interface SignUpData {
  StudentToken: string;
  IsActive: boolean;
  Code: string;
}

export type SignInResponse = BaseResponse<SignInData>;
export type RefreshResponse = BaseResponse<{
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}>;
export type SignUpResponse = BaseResponse<SignUpData>;
// export type LogoutResponse = BaseResponse<LoginData>;
// export type ResetPasswordResponse = BaseResponse<LoginData>;
// export type ForgetPasswordOrResendOtoCodeResponse = BaseResponse<LoginData>;
// export type VerifyOtpCodeResponse = BaseResponse<LoginData>;
