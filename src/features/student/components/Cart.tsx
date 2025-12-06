"use client";
import TitleSection from "@/components/shared/TitleSection";
import React, { useState } from "react";
import { useDeleteCourseFromCartMutation, useGetStudentCartQuery } from "../services/cartApi";
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { CartItem } from "../types/cart.types";
import { Recycle, RecycleIcon } from "lucide-react";
import { useFawryPayMutation, useStudentWalletMutation } from "../services/paymentApi";
import { toast } from "react-toastify";
import { BookCartItem } from "../types/cartBooks.types";
import { useDeleteBookFromCartMutation } from "../services/cartBooksApi";
import { BaseResponse } from "@/types/common.types";
import { useToastMessage } from "@/hooks/useToastMessage";
import Link from "next/link";

function Cart({ cartBooks }: { cartBooks?: BookCartItem[] }) {
  const { data } = useGetStudentCartQuery();
  const total = cartBooks?.reduce((sum, cart: BookCartItem) => sum + cart.Total, 0) || 0;
  const [deleteBookFromCart] = useDeleteBookFromCartMutation();
  const [fawryPay] = useFawryPayMutation();
  const [studentWallet] = useStudentWalletMutation();
  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };
    const { error: toasError,success } = useToastMessage();
  


 

  const deleteBook = async (id: string) => {
    try {
     const res= await deleteBookFromCart(id).unwrap();
      success(res?.Message || "تم الحذف بنجاح")
    } catch (err) {
      const error = err as BaseResponse<null>;
      toasError(error?.Message || "حدث خطأ ");
    }
  };
  return (
    <>
      <div className="content bg-[#f9f9f9] py-7 px-3 rounde space-y-5">
        {cartBooks?.map((book: BookCartItem, index) => (
          <div key={index} className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2  font-medium">
            {/* Item */}
            <div className="flex gap-1">
              <span>الاسم :</span>
              <span className="font-normal">{book?.Title}</span>
            </div>
            <div className="flex gap-1">
              <span>تاريخ الاضافة :</span>
              <span className="font-normal">{formatDate(book?.AddedDate)}</span>
            </div>
            <div className="flex gap-1">
              <span>السعر :</span>
              <span className="font-normal">
                {book?.Price} {book?.CurrencyCode}
              </span>
            </div>
            <div className="flex gap-1">
              <Button onClick={() => deleteBook(book?.Id)}>مسح</Button>
            </div>
          </div>
        ))}
      </div>

      <section className="cart-total mt-8">
        <div className="container">
          <div className="details-total w-full max-w-[500px] mx-auto">
            <h5 className="ar-medium mb-3 text-xl">المبلغ الإجمالي</h5>

            <table className="w-full border border-gray-300 border-collapse text-center mb-4">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="border-l border-gray-300 py-3 px-4 font-semibold">حالة الفاتورة</td>
                  <td className="py-2 px-4">{(data?.Data?.length ?? 0) > 0 ? "Open" : ""}</td>
                </tr>
                <tr>
                  <td className="border-l border-gray-300 py-3 px-4 font-semibold">إجمالي</td>
                  <td className="py-2 px-4">{total} جنيه</td>
                </tr>
              </tbody>
            </table>

            {/* قسم طرق الدفع */}
            {/* <div className="payment-methods mb-4 border border-gray-300 rounded-lg p-4">
              <h6 className="font-semibold text-lg mb-3">اختر طريقة الدفع</h6>

              <div className="space-y-2">
                {[
                  { value: "fawry", label: "فوري", color: "bg-orange-500", icon: "F" },
                  { value: "platform-wallet", label: "محفظة المنصة", color: "bg-blue-600", svg: "wallet" },
                  { value: "mobile-wallet", label: "محفظة موبايل", color: "bg-green-600", svg: "phone" },
                  { value: "bank-transfer", label: "تحويل بنكي", color: "bg-purple-600", svg: "bank" },
                ].map((item) => (
                  <label key={item.value} className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition ${paymentMethod === item.value ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}>
                    <input type="radio" name="payment" value={item.value} checked={paymentMethod === item.value} onChange={handlePaymentChange} className="w-4 h-4 accent-blue-600" />
                    <div className="flex items-center gap-2 flex-1">
                      <div className={`w-10 h-10 ${item.color} rounded flex items-center justify-center text-white font-bold`}>
                        {item.icon || (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        )}
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div> */}

<Button className="w-full" size={"lg"} variant={"default"} asChild>

            <Link href={"/checkout/books"}  >
              اتمام الشراء
            </Link>
</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
