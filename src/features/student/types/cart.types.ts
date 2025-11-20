import { BaseResponse, Chapter, Course } from "@/types/common.types";

export interface CartItem {
  AddedDate: string;
  CourseExecutionId: string;
  CurrencyCode: string;
  Discount: number;
  Id: string;
  Image: string;
  PoundExchangeRate: number;
  Price: number;
  PriceDiscounted: number;
  Title: string;
}

export type StudentCartResponse = BaseResponse<CartItem[]>;
