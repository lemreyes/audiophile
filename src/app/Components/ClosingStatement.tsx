import bestGear_mobile from "../../../public/assets/shared/mobile/image-best-gear.jpg";
import bestGear_tablet from "../../../public/assets/shared/tablet/image-best-gear.jpg";
import bestGear_desktop from "../../../public/assets/shared/desktop/image-best-gear.jpg";
import ImageDynamic from "./ImageDynamic";

export default function ClosingStatement() {
  const bestGearImgSrc = {
    mobile: bestGear_mobile,
    tablet: bestGear_tablet,
    desktop: bestGear_desktop,
  };

  return (
    <section className="mt-8 mb-12">
      <ImageDynamic
        imageSrc={bestGearImgSrc}
        altText={"man with headphones"}
        styleClasses={"rounded-lg"}
        width={0}
        height={0}
      />
      <h2 className="mt-8 px-8 text-3xl text-center uppercase font-bold">
        Bringing you the <span className="text-accent">best</span> audio gear
      </h2>
      <p className="mt-8 px-4 text-sm text-center text-gray-600">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </section>
  );
}
