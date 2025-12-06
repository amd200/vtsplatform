"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import OrderItem from "./OrderItem";
import React from "react";


export interface OrderItemType {
  id: string | number;
  image: React.ReactNode;
  name: string;
  color?: string;
  price: number;
}

interface OrderSummaryProps {
  orderItems: OrderItemType[];
  email: string;
  setEmail: (value: string) => void;
  couponCode: string;
  setCouponCode: (value: string) => void;
}

export default function OrderSummary({
  orderItems,
  email,
  setEmail,
  couponCode,
  setCouponCode,
}: OrderSummaryProps) {
  
  // حساب الإجمالي
  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 50.0;
  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
      {/* حقل الإيميل */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">
          *سوف يتم ارسال رسالة لتأكيد الاوردر
        </p>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
        />
      </div>

      {/* حقل الكوبون */}
      <div className="mb-6">
        <p className="text-sm mb-2">لديك كوبون خصم ؟</p>
        <div className="flex space-x-2 items-center">
          <Input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="كوبون"
          />
          <Button>تطبيق</Button>
        </div>
      </div>

      {/* عنوان */}
      <h3 className="text-lg font-semibold mb-4 text-center">ملخص الطلب</h3>

      {/* العناصر */}
      <div className="space-y-4 mb-6">
        {orderItems.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>

      {/* حسابات الفاتورة */}
      <div className="border-t pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">الإجمالي الفرعي</span>
          <span className="font-medium">{subtotal.toFixed(2)} €</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">التوصيل</span>
          <span className="font-medium">{shipping.toFixed(2)} €</span>
        </div>

        <div className="flex justify-between text-lg font-bold border-t pt-3">
          <span>الإجمالي</span>
          <span className="text-emerald-600">{total.toFixed(2)} €</span>
        </div>
      </div>

      {/* زر إتمام الطلب */}
      <Button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600">
        إتمام الطلب
      </Button>
    </div>
  );
}
