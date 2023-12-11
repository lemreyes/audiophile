"use client";
import Image from "next/image";

export default function SummaryItem({
  id,
  imageSrc,
  productName,
  price,
  quantity,
}: {
  id: number;
  imageSrc: string;
  productName: string;
  price: number;
  quantity: number;
}) {
  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <div className="flex flex-row items-center justify-between mt-4 mb-4">
      <div className="flex flex-row items-center justify-start">
        <Image
          src={imageSrc}
          alt={`${productName}-image`}
          width={64}
          height={64}
        />
        <div className="flex flex-col items-start ml-4">
          <span className="text-[15px] font-bold leading-[25px]">
            {productName}
          </span>
          <span className="text-[14px] text-gray-400 font-bold leading-[25px]">
            ${numberFormat.format(price)}
          </span>
        </div>
      </div>
      <div>
        <span>x{quantity}</span>
      </div>
    </div>
  );
}
