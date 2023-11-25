"use client";
import { useState } from "react";

export default function AddToCart() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-row items-center gap-x-4">
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
      <button
        className="py-4 px-8 uppercase text-[13px] font-bold tracking-wide text-white bg-accent 
                        hover:bg-accentHover"
      >
        Add to cart
      </button>
    </div>
  );
}
