"use client";

import { SavedAddressItem } from "./SavedAddressItem";
import NewAddressForm from "./NewAddressForm";
import type { ChangeEvent } from "react";

interface AddressFormData {
  address: string;
  phoneNumber: string;
  notes: string;
}

interface ShippingAddressSectionProps {
  selectedAddress: string;
  setSelectedAddress: (value: string) => void;
  formData: AddressFormData;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function ShippingAddressSection({
  selectedAddress,
  setSelectedAddress,
  formData,
  handleInputChange,
}: ShippingAddressSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>

      <div className="space-y-4 mb-6">
        <SavedAddressItem
          name="Courtney Henry"
          address="3891 Ranchview, California 62639"
          value="courtney"
          isSelected={selectedAddress === "courtney"}
          onSelect={(e) => setSelectedAddress(e.target.value)}
        />

        <SavedAddressItem
          name="Jenny Wilson"
          address="4140 Parker Rd. Allentown, New Mexico 31134"
          value="jenny"
          isSelected={selectedAddress === "jenny"}
          onSelect={(e) => setSelectedAddress(e.target.value)}
        />
      </div>

      <NewAddressForm
        formData={formData}
        onInputChange={handleInputChange}
        isSelected={selectedAddress === "new"}
        onSelect={(e) => setSelectedAddress(e.target.value)}
      />
    </div>
  );
}
