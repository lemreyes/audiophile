"use client";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="bg-[#191919] bg-hero w-full flex flex-col items-center">
      <div className="w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 border-t-textPrimary">
        <div className="flex flex-col items-center desktop:items-start py-24">
          <span className="mb-8 uppercase tracking-[10px] text-gray-400">
            New product
          </span>
          <h1 className="desktop:w-1/2 text-white uppercase text-4xl tablet:text-6xl tablet:px-8 desktop:px-0 text-center desktop:text-left font-bold">
            XX99 Mark II Headphones
          </h1>
          <p className="mt-10 mb-8 px-16 desktop:w-1/3 desktop:px-0 text-gray-400 text-center desktop:text-left">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button
            className="uppercase px-8 py-4 bg-accent hover:bg-accentHover text-white tracking-wide"
            onClick={() =>
              router.push(`/Headphones/xx99-mark-two-headphones?id=4`)
            }
          >
            See product
          </button>
        </div>
      </div>
    </section>
  );
}
