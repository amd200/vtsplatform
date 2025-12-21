"use client";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import ShippingAddressSection from "@/components/checkout/ShippingAddressSection";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";

export default function CheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState("new");
  const [email, setEmail] = useState("");
  const [couponCode, setCouponCode] = useState("");

  const [formData, setFormData] = useState({
    phoneNumber: "",
    address: "",
    notes: "",
  });

  const orderItems = [
    { id: 1, name: "Gaming Headphone", color: "Glacial Grey", price: 75.0, image: "🎧" },
    { id: 2, name: "Super Laptop", color: "Space Grey", price: 98.86, image: "💻" },
    { id: 3, name: "Apple Watch 8", color: "Off White", price: 267.5, image: "⌚" },
    { id: 4, name: "iPhone 12 Pro Max", color: "Red Velvet", price: 291.07, image: "📱" },
    { id: 5, name: "Headphone Master", color: "Glacial Green", price: 226.2, image: "🎧" },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button className="flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ChevronLeft className="h-5 w-5" />
          <span className="ml-1">Back to cart</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ShippingAddressSection selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} formData={formData} handleInputChange={handleInputChange} />

            <PaymentMethod formData={formData} onInputChange={handleInputChange} />
          </div>

          <div className="lg:col-span-1">
            <OrderSummary orderItems={orderItems} email={email} setEmail={setEmail} couponCode={couponCode} setCouponCode={setCouponCode} />
          </div>
        </div>
      </div>
    </div>
  );
}
