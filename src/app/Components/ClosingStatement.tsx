import bestGear_mobile from "../../../public/assets/shared/mobile/image-best-gear.jpg";
import bestGear_tablet from "../../../public/assets/shared/tablet/image-best-gear.jpg";
import bestGear_desktop from "../../../public/assets/shared/desktop/image-best-gear.jpg";
import ImageDynamic from "./ImageDynamic";

export default function ClosingStatement() {
  const bestGearImgSrc = {
    mobile: {
      imageData: bestGear_mobile,
      width: 327,
      height: 300,
      altText: "man with headphones",
      styleClasses: "rounded-lg",
    },
    tablet: {
      imageData: bestGear_tablet,
      width: 689,
      height: 300,
      altText: "man with headphones",
      styleClasses: "rounded-lg w-full",
    },
    desktop: {
      imageData: bestGear_desktop,
      width: 540,
      height: 588,
      altText: "man with headphones",
      styleClasses: "rounded-lg desktop:order-2",
    },
  };

  return (
    <section className="mt-8 mb-12 flex flex-col desktop:flex-row items-center">
      <ImageDynamic imageSrc={bestGearImgSrc} />
      <div className="desktop:order-1 flex flex-col items-center">
        <h2 className="px-8 mt-8 tablet:w-4/5 text-3xl tablet:text-[40px] desktop:tracking-wide tablet:leading-[44px] text-center uppercase font-bold">
          Bringing you the <span className="text-accent">best</span> audio gear
        </h2>
        <p className="px-12 mt-8 text-sm text-center text-gray-600 tablet:w-2/3 leading-[25px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}
