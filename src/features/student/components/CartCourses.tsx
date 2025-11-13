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

function CartCourses({ invoiceId }: { invoiceId?: string }) {
  const { data } = useGetStudentCartQuery();
  const cartCaourses = data?.Data;
  const total = cartCaourses?.reduce((sum, cart: CartItem) => sum + cart.Price, 0) || 0;
  const [deleteCourseFromCart] = useDeleteCourseFromCartMutation();
  const [fawryPay] = useFawryPayMutation();
  const [studentWallet] = useStudentWalletMutation();
  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };
  async function generateFawrySignature({ merchantCode, merchantRefNum, customerProfileId = "", returnUrl, items, securityKey }: { merchantCode: string; merchantRefNum: string; customerProfileId?: string; returnUrl: string; items: { itemId: string; quantity: number; price: number }[]; securityKey: string }) {
    // 1️⃣ رتّب العناصر حسب itemId
    const sortedItems = [...items].sort((a, b) => a.itemId.localeCompare(b.itemId));

    // 2️⃣ جهّز السلسلة اللي هتتحسب منها الـ hash
    const raw =
      merchantCode +
      merchantRefNum +
      customerProfileId +
      returnUrl +
      sortedItems
        .map(
          (i) => i.itemId + i.quantity.toString() + i.price.toFixed(2) // لازم تكون بصيغة 10.00
        )
        .join("") +
      securityKey;

    // 3️⃣ حول النص لـ SHA256
    const encoder = new TextEncoder();
    const data = encoder.encode(raw);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

    return hashHex;
  }

  const handleCheckout = async () => {
    if (!paymentMethod) {
      alert("من فضلك اختر طريقة الدفع أولاً");
      return;
    }

    if (paymentMethod === "fawry") {
      try {
        const res = await fawryPay(invoiceId!).unwrap();

        if (!res || !res.Status) {
          alert("حدث خطأ أثناء تجهيز عملية الدفع");
          return;
        }

        const fawryData = res.Data;

        const merchantCode = "siYxylRjSPzP3SHpCxPXEg==";
        const securityKey = "5d1428e7-6b4e-4089-8236-8d99b51369e2";
        const merchantRefNum = fawryData.SubId;
        const customerProfileId = fawryData.ClientId;
        const returnUrl = "https://developer.fawrystaging.com";
        const items = [
          {
            itemId: fawryData.SubId,
            quantity: 1,
            price: Number(fawryData.price),
          },
        ];

        const signature = await generateFawrySignature({
          merchantCode,
          merchantRefNum,
          customerProfileId,
          returnUrl,
          items: [{ itemId: fawryData.SubId, quantity: 1, price: Number(fawryData.price) }],
          securityKey,
        });

        const chargeRequest = {
          merchantCode,
          merchantRefNum,
          customerMobile: fawryData.ClientPhone,
          customerEmail: "test@example.com",
          customerName: fawryData.ClientName,
          customerProfileId,
          paymentExpiry: (Date.now() + 2 * 60 * 60 * 1000).toString(), // بعد ساعتين
          language: "ar-eg",
          chargeItems: items.map((item) => ({
            itemId: item.itemId,
            description: "دفع فاتورة رقم " + fawryData.SubId,
            price: item.price,
            quantity: item.quantity,
            imageUrl: "https://developer.fawrystaging.com/photos/45566.jpg",
          })),
          returnUrl,
          authCaptureModePayment: false,
          signature, // ← ← نفس التوقيع الجاي من الباك
        };

        // 🔹 5. إرسال الطلب إلى بيئة فوري التجريبية (STAGING)
        const response = await fetch("https://atfawry.com/fawrypay-api/api/payments/init", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(chargeRequest),
        });

        const textRes = await response.text();

        try {
          const dataRes = JSON.parse(textRes);
          console.log("Fawry response (JSON):", dataRes);

          if (dataRes && dataRes.paymentLink) {
            window.location.href = dataRes.paymentLink;
          } else {
            alert("حدث خطأ أثناء إنشاء عملية الدفع");
            console.log(dataRes);
          }
        } catch {
          console.log("Fawry raw response:", textRes);
          if (textRes.startsWith("http")) {
            window.location.href = textRes;
          } else {
            alert("فشل في قراءة استجابة فوري");
          }
        }
      } catch (err) {
        console.error(err);
        alert("حدث خطأ أثناء الاتصال ببوابة فوري");
      }
    } else if (paymentMethod == "platform-wallet") {
      try {
        const res = await studentWallet(invoiceId!).unwrap();
        console.log(res);
      } catch (err) {
        // toast.error(err?.Message)
        console.log(err);
      }
    }
  };

  const deleteCourse = async (id: string) => {
    try {
      await deleteCourseFromCart(id).unwrap();
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };
  return (
    <>
      <div className="content bg-[#f9f9f9] py-7 px-3 rounde space-y-5">
        {cartCaourses?.map((cartCourse: CartItem, index) => (
          <div key={index} className="bg-white text-primary rounded-md px-4 py-3 flex justify-between flex-wrap gap-y-2  font-medium">
            {/* Item */}
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
              <Button onClick={() => deleteCourse(cartCourse?.Id)}>مسح</Button>
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
                  <td className="py-2 px-4">Open</td>
                </tr>
                <tr>
                  <td className="border-l border-gray-300 py-3 px-4 font-semibold">إجمالي</td>
                  <td className="py-2 px-4">{total} جنيه</td>
                </tr>
              </tbody>
            </table>

            {/* قسم طرق الدفع */}
            <div className="payment-methods mb-4 border border-gray-300 rounded-lg p-4">
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
            </div>

            <Button onClick={handleCheckout} className="w-full" variant={"default"}>
              اتمام الشراء
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartCourses;
