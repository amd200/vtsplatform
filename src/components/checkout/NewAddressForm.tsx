"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

interface AddressFormData {
  address: string;
  phoneNumber: string;
  notes: string;
}

interface NewAddressFormProps {
  formData: AddressFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isSelected: boolean;
onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NewAddressForm({
  formData,
  onInputChange,
  isSelected,
  onSelect,
}: NewAddressFormProps) {
  return (
    <div className="border-2 border-primary rounded-lg p-6">

      <RadioGroup defaultValue="address">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="address" id="address" />
          <Label htmlFor="address">إضافة عنوان</Label>
        </div>
      </RadioGroup>

      <div className="mt-4">
        <label className="block text-sm text-gray-600 mb-2">العنوان</label>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={onInputChange}
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm text-gray-600 mb-2">رقم التليفون</label>
        <Input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={onInputChange}
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm text-gray-600 mb-2">ملاحظات</label>
        <Textarea
          name="notes"
          value={formData.notes}
          onChange={onInputChange}
        />
      </div>

      <div className="flex justify-end space-x-4 mt-6">
        <Button variant="outline" className="border-gray-300 text-gray-700">
          إلغاء
        </Button>
        <Button>استخدم هذا العنوان</Button>
      </div>
    </div>
  );
}
