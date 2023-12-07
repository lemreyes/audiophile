import Image from "next/image";
import { useState } from "react";
import CountButton from "../[Categories]/[Product]/Components/CountButton";

export default function CartItem({
  imageSrc,
  productName,
  price,
}: {
  imageSrc: string;
  productName: string;
  price: number;
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-row items-center justify-between px-8 mt-4 mb-4">
      <div className="flex flex-row items-center justify-start">
        <Image
          src={imageSrc}
          alt={`${productName}-image`}
          width={64}
          height={64}
        />
        <div className="flex flex-col items-start">
          <span>{productName}</span>
          <span>{price}</span>
        </div>
      </div>
      <div>
        <CountButton quantity={quantity} btnHandler={setQuantity} />
      </div>
    </div>
  );
}
