"use client";
import TitleSection from "@/components/shared/TitleSection";
import React, { useState } from "react";
import { useDeleteCourseFromCartMutation, useGetStudentCartQuery } from "../services/cartApi";
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { CartItem } from "../types/cart.types";
import { RecycleIcon, CreditCard, Wallet, Smartphone, Landmark, Zap, Image as ImageIcon, CheckCircle, Upload, X, FileText, Check, Receipt } from "lucide-react";
import { useCoursePaymentWithFawryMutation, useCreateInvoiceMutation, useFawryPayMutation, useStudentWalletMutation } from "../services/paymentApi";
import { toast } from "react-toastify";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BaseResponse } from "@/types/common.types";
import { useToastMessage } from "@/hooks/useToastMessage";

function CartCourses({ invoiceId }: { invoiceId?: string }) {
  const { data } = useGetStudentCartQuery();
  const [createInvoice] = useCreateInvoiceMutation();
  const cartCaourses = data?.Data;
  const total = cartCaourses?.reduce((sum, cart: CartItem) => sum + cart.Price, 0) || 0;
  const [deleteCourseFromCart] = useDeleteCourseFromCartMutation();
  const router = useRouter();
  const { error: toastError, success } = useToastMessage();

  const deleteCourse = async (id: string) => {
    try {
      await deleteCourseFromCart(id).unwrap();
      success("تم حذف الدورة بنجاح من السلة.");
    } catch (err) {
      const error = err as BaseResponse<null>;
      toastError(error?.Message || "فشل في حذف الدورة من السلة.");
    }
  };
  const handleSubmit = async () => {
    try {
      const res = await createInvoice().unwrap();
      router.push(`/checkout/${res?.Data?.InvoiceData?.Id}`);
    } catch (err) {
      const error = err as BaseResponse<null>;
      toastError(error?.Message || "حدث خطأ حاول مرة اخرى");
    }
  };

  return (
    <>
      <div className="content bg-[#f9f9f9] py-7 px-3 rounded space-y-5">
        {cartCaourses && cartCaourses.length > 0 ? (
          cartCaourses.map((cartCourse: CartItem, index) => (
            <div key={index} className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2 font-medium shadow-sm">
              {/* ... Cart Item Details ... (Unchanged) */}
              <div className="flex gap-1">
                <span>الاسم :</span>
                <span className="font-normal">{cartCourse?.Title}</span>
              </div>
              <div className="flex gap-1">
                <span>تاريخ الاضافة :</span>
                <span className="font-normal">{formatDate(cartCourse?.AddedDate)}</span>
              </div>
              <div className="flex gap-1">
                <span>السعر :</span>
                <span className="font-normal">
                  {cartCourse?.Price} {cartCourse?.CurrencyCode}
                </span>
              </div>
              <div className="flex gap-1">
                <Button onClick={() => deleteCourse(cartCourse?.Id)} className="flex items-center gap-1 bg-red-500 hover:bg-primary" size="sm">
                  <RecycleIcon className="w-4 h-4" /> مسح
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 bg-white rounded-md text-gray-500 shadow-sm">لا توجد دورات في سلة المشتريات حاليًا.</div>
        )}
      </div>

      <section className="cart-total mt-8">
        <div className="container">
          <div className="details-total w-full max-w-[500px] mx-auto">
            <h5 className="ar-medium mb-3 text-xl">ملخص الشراء</h5>

            <table className="w-full border border-gray-300 border-collapse text-center mb-6">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="border-l border-gray-300 py-3 px-4 font-semibold bg-gray-50">حالة الفاتورة</td>
                  <td className="py-2 px-4">{(data?.Data?.length ?? 0) > 0 ? "Open" : "Closed"}</td>
                </tr>
                <tr>
                  <td className="border-l border-gray-300 py-3 px-4 font-semibold bg-gray-50">إجمالي</td>
                  <td className="py-2 px-4  ">{total} جنيه</td>
                </tr>
              </tbody>
            </table>

            <Button onClick={handleSubmit} className="w-full" size={"lg"} variant={"default"}>
              اتمام الشراء
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartCourses;
