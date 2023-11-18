import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-28 bg-hero-mobile w-full flex flex-col items-center">
      <span className="mb-8 uppercase tracking-[0.75em] text-gray-400">
        New product
      </span>
      <h1 className="text-white uppercase text-4xl text-center font-bold">
        XX99 Mark II Headphones
      </h1>
      <p className="mt-10 mb-8 px-16 text-gray-400 text-center">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link href="">
        <button className="uppercase px-8 py-6 bg-accent text-white tracking-wide">
          See product
        </button>
      </Link>
    </section>
  );
}
