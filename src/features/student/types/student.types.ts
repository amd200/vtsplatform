import { Chapter, ContentType, Course, Lesson } from "@/types/common.types";

export interface BaseResponse<T> {
  Status: boolean;
  Code: string;
  Message: string;
  Data: T;
}
export interface User {
  StudentToken?: string;
  UserId?: string;
  PersonId?: string;
  Role?: number;
  StudentName?: string;
  StudentImage?: string;
}
export interface Category {
  Id: string;
  ParentId: string | null;
  ParentName: string | null;
  Details: string | null;
  NameEn: string | null;
  NameAr: string;
  CoursesCount: number;
  CurrencyCode: string;
  ImageLink: string;
  Price: number;
  Sell: boolean;
  VisibleOnHome: boolean;
  Visible: boolean;
  CreatedBy: string | null;
  ModifiedBy: string | null;
  CreatedOn: string;
  ModifiedOn: string | null;
  NumberSubCategory: number;
  Numbercourse: number;
  PriceCode: string | null;
}
export interface Book {
  Id: string;
  IsServices: boolean;
  Title: string;
  Detials: string | null;
  IsVisible: boolean;
  PublishFrom: string;
  PublishTo: string;
  DefaultPrice: number;
  DefaultDiscount: number;
  DefaultPriceDiscounted: number;
  DefaultCurrencyCode: string;
  ModifiedBy: string;
  CreatedBy: string;
  DisplayOrder: number;
  ImageLink: string;
  Modifiedon: string | null;
  Createdon: string;
}
export enum InvoiceStatus {
  Open,
  Waiting,
  Confirmed,
  Rejected,
}

export interface Payment {
  Id: string;
  PaymentType: number;
  StudentId: string;
  StudentName: string;
  Amount: number;
  RestOfTheAmount: number;
  DeliveryAmount: number;
  Status: number;
  BankName: string;
  Count: number;
  InvoiceId: string;
  InvoiceDate: string;
  InvoiceStatus: InvoiceStatus;
  DeliveryStatus: number;
  CreatedBy: string | null;
  ModifiedBy: string | null;
  currency: string;
}
export interface UserSession {
  UserId: string;
  Expiration: string;
  LastSessionCheck: string;
  IsExpired: boolean;
  IsFraud: boolean;
  DeviceToken: string | null;
  UserToken: string;
}

export interface Option {
  label: string;
  value: string | number;
}

export interface ApiError {
  field?: string;
  message: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
}

export interface StudentSubscription {
  Title: string;
  StartDate: string;
  EndDate: string;
}
export interface ExamResult {
  ChapterName: string;
  Code: string | null;
  CourseName: string;
  Date: string | null;
  Grade: string;
  LessonName: string;
  ShowResult: boolean;
  studentName: string | null;
  studentgrade: string;
}
export interface LessonScheduleDetails {
  LessonId: string;
  CourseName: string | null;
  LessonName: string | null;
  Content: string | null;
  StartDate: string;
  EndDate: string;
  HasDate: boolean;
  Time: string | null;
  exId: string;
  chapterid: string | null;
  ContentType: number | null;
}

export interface StudentSchedule {
  Courses: {
    Id: string;
    Name: string;
  }[];
  StudentSchedule: LessonScheduleDetails[][];
}
export interface ShowContent {
  AllowComment: boolean;
  CanBuyView: boolean;
  CanBuyViewPackage: boolean;
  CanSendMesssage: boolean;
  ChapterId: string;
  // Comments: any[];
  ContentType: ContentType;
  Contents: string;
  CourseId: string;
  CourseLanguage: string;
  CourseTitle: string;
  Description: string | null;
  DisplayOrder: number;
  Duration: number;
  ExecuteId: string;
  ExecuteTitle: string;
  FeedBack: string | null;
  Id: string;
  IsVideo: boolean;
  LessonId: string;
  LessonTitle: string;
  Title: string;
  ViewDurationPercentage: number;
}
export interface StudentChargeDetail {
  CreatedBy: string | null;
  Date: string;
  Id: string;
  IsPaied: boolean;
  ModifiedBy: string | null;
  PaymentType: number;
  StudentData: string;
  StudentId: string;
  Total: number;
  TotalAfterCompanyCommission: number;
}
export interface StudentCharge {
  CreatedBy: string | null;
  Date: string;
  Id: string;
  IsPaied: boolean;
  ModifiedBy: string | null;
  PaymentType: number;
  StudentData: string;
  StudentId: string;
  Total: number;
  TotalAfterCompanyCommission: number;
  StudentBalance: number;
  StudentCharges: StudentChargeDetail[];
  UsePaypal: boolean;
  UsingFawry: boolean;
  UsingPaymob: boolean;
}

export type StudentPaymentsResponse = BaseResponse<Payment[]>;
export type StudentSubscriptionsResponse = BaseResponse<StudentSubscription[]>;
export type StudentCoursesResponse = BaseResponse<Course[]>;
export type StudentChaptersResponse = BaseResponse<Chapter[]>;
export type AllCoursesResponse = BaseResponse<Course[]>;
export type GetCourseDetailsRepsone = BaseResponse<Course>;
export type ExamResultsRepsone = BaseResponse<ExamResult[]>;
export type StudentLessonsRepsone = BaseResponse<Lesson[]>;
export type StudentSessionsRepsone = BaseResponse<UserSession[]>;
export type StudentScheduleRepsone = BaseResponse<StudentSchedule>;
export type ShowContentRepsone = BaseResponse<ShowContent>;
export type StudentWalletRepsone = BaseResponse<StudentCharge>;
