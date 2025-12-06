"use client";

import React from "react";

interface PaymentFormData {
  cardName: string;
  payment?: string;
}

interface PaymentMethodProps {
  formData: PaymentFormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function PaymentMethod({
  formData,
  onInputChange,
}: PaymentMethodProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Payment method</h2>

      <div className="border-2 border-emerald-500 rounded-lg p-6">
        
        {/* Payment Radio */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="radio"
              name="payment"
              value="card"
              defaultChecked
              onChange={onInputChange}
              className="h-4 w-4 text-emerald-500"
            />
            <label className="ml-3 font-medium">Credit or Debit Card</label>
          </div>

          <div className="flex space-x-2">
            <div className="w-8 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Card Name */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Name on Card
          </label>

          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={onInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>
    </div>
  );
}
