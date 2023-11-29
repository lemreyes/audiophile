"use client";
import { useState } from "react";

export default function CountButton() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-row items-center">
      <button className="text-[13px] font-bold tracking-wide bg-product p-4 text-textPrimary">
        -
      </button>
      <p className="text-[13px] font-bold tracking-wide bg-product p-4">
        {quantity}
      </p>
      <button className="text-[13px] font-bold tracking-wide bg-product p-4 text-textPrimary">
        +
      </button>
    </div>
  );
}
