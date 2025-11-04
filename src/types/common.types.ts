export interface BaseResponse<T = void> {
  Status: boolean;
  Code: string;
  Message: string;
  Data?: T | null;
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

export interface UserSession {
  UserId: string;
  Expiration: string;
  LastSessionCheck: string;
  IsExpired: boolean;
  IsFraud: boolean;
  DeviceToken: string | null;
  UserToken: string;
}
export interface Chapter {
  Discount: number;
  DisplayOrder: number;
  EndDate: string;
  ExecutionId: string;
  HaveExecution: boolean;
  Id: string;
  ImageLink: string | null;
  IsBuy: boolean;
  NumofChapters: number;
  NumofLessons: number;
  ParentId: string | null;
  Price: number;
  StartDate: string;
  Title: string;
  Lessons: Lesson[];
}
export type Lesson = {
  BuyaViewPackage?: boolean;
  CanViewWithoutPay: boolean;
  CanViewWithoutPayForStudentOnly: boolean;
  ChapterId: string;
  Content: string;
  ContentType: ContentType;
  Description: string | null;
  DisplayOrder: number;
  Duration: number;
  time: number;
  ForumIsClosed: boolean;
  Id: string;
  IsExamed: boolean;
  IsRequired: boolean;
  MeetingDateTime: string | null;
  ShowResult: boolean;
  StudentId: string | null;
  Title: string;
};

export interface Course {
  Brief: string;
  Category: string;
  CategoryId: string;
  CategoryName: string;
  Chapters: Chapter[];
  ChaptersCount: number;
  Code: string;
  CourseExecutionId: string;
  DefaultCurrencyCode: string;
  Details: string | null;
  Discount: number;
  DisplayOrder: number;
  Duration: number;
  EndDate: string;
  ImageLink: string;
  InstructorId: string;
  InstructorImageLink: string | null;
  InstructorName: string | null;
  InstructorSpeciality: string | null;
  IsDuration: boolean;
  IsSingleInstructor: boolean;
  Isbuy: boolean;
  LesssonsCount: number;
  NumberEnroll: number;
  Numberstudent: number;
  Possibilityimplementationcodesonly: boolean;
  Price: number;
  Rate: number;
  RatersCount: number;
  Sell: boolean;
  StartDate: string;
  StudentId: string | null;
  Title: string;
}
export enum ContentType {
  RichText = 0,
  Word = 1,
  Link = 2,
  Quiz = 3,
  VdoCipher = 4,
  Forum = 5,
  Publitio = 6,
  Video = 7,
  PDF = 8,
  Sound = 9,
  HomeWork = 11,
  OfflineActivity = 12,
  QuizModels = 13,
  PowerPoint = 14,
  Meeting = 15,
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
