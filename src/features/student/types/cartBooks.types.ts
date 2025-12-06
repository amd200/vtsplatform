import { BaseResponse, Chapter, Course } from "@/types/common.types";


// export interface BookCartInvoice {
//   Address: string | null;
//   Code: string | null;
//   CommissionOnType: number;
//   CompanyCommission: number;
//   CouponDiscount: number;
//   CurrencyCode: string;
//   Date: string;                  
//   DeliveryAmount: number;
//   DeliveryStatus: number;
//   HasCoupon: boolean;
//   Id: string;                    
//   InvoiceStatus: number;
//   IsService: boolean;
//   ItemsCount: number;
//   Mobile: string | null;
//   Notes: string | null;
//   OrderId: string | null;
//   PayAtList: number;
//   PaymentType: string | null;
//   RestOfTheAmount: number;
//   ReturnURL: string | null;
//   Total: number;
// }


export interface BookCartItem {
  AddedDate: string;        // ISO date string
  Count: number;
  CurrencyCode: string;
  DisCount: number;
  Id: string;               // GUID
  Image: string;
  IsService: boolean;
  Price: number;
  Title: string;
  Total: number;
  bookId: string;           // GUID
}



export type StudentCartBooksResponse = BaseResponse<BookCartItem[]>;
