"use client";

import React from "react";

export interface OrderItemProps {
  item: {
    image: React.ReactNode;   // لأنها JSX Icon أو عنصر
    name: string;
    color?: string;
    price: number;
  };
}

export default function OrderItem({ item }: OrderItemProps) {
  return (
    <div className="flex items-center space-x-3">

      {/* صورة المنتج + العدد */}
      <div className="relative">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
          {item.image}
        </div>

        <span className="absolute -top-2 -right-2 bg-gray-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          1
        </span>
      </div>

      {/* الاسم + اللون */}
      <div className="flex-1">
        <p className="font-medium text-sm">{item.name}</p>
        {item.color && <p className="text-xs text-gray-500">{item.color}</p>}
      </div>

      {/* السعر */}
      <p className="font-medium">{item.price.toFixed(2)} €</p>
    </div>
  );
}
