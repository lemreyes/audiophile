"use client";
import { useState } from "react";
import CountButton from "./CountButton";

export default function AddToCart() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-row items-center gap-x-4">
      <div className="flex flex-row items-center">
        <CountButton quantity={quantity} btnHandler={setQuantity} />
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
