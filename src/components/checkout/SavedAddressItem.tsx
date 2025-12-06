"use client";

import React from "react";

interface SavedAddressItemProps {
  name: string;
  address: string;
  value: string;
  isSelected: boolean;
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SavedAddressItem({
  name,
  address,
  isSelected,
  onSelect,
  value,
}: SavedAddressItemProps) {
  return (
    <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
      
      {/* Left Part */}
      <div className="flex items-start">
        <input
          type="radio"
          name="address"
          value={value}
          checked={isSelected}
          onChange={onSelect}
          className="mt-1 h-4 w-4 text-emerald-500"
        />

        <div className="ml-3">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">{address}</p>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex space-x-3">
        <button className="text-blue-600 text-sm">Edit</button>
        <button className="text-blue-600 text-sm">Add Instructions</button>
      </div>
    </div>
  );
}
