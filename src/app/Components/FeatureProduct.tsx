import zx9_mobile from "../../../public/assets/home/mobile/image-speaker-zx9.png";
import zx9_tablet from "../../../public/assets/home/tablet/image-speaker-zx9.png";
import zx9_desktop from "../../../public/assets/home/desktop/image-speaker-zx9.png";
import yx1_mobile from "../../../public/assets/home/mobile/image-earphones-yx1.jpg";
import yx1_tablet from "../../../public/assets/home/tablet/image-earphones-yx1.jpg";
import yx1_desktop from "../../../public/assets/home/desktop/image-earphones-yx1.jpg";
import ImageDynamic, { ImageSrcObject } from "./ImageDynamic";

export default function FeatureProduct() {
  const zX9ImageSrc: ImageSrcObject = {
    mobile: {
      imageData: zx9_mobile,
      width: 173,
      height: 207,
      altText: "zx9-speaker",
      styleClasses: "",
    },
    tablet: {
      imageData: zx9_tablet,
      width: 197,
      height: 237,
      altText: "zx9-speaker",
      styleClasses: "",
    },
    desktop: {
      imageData: zx9_desktop,
      width: 410,
      height: 493,
      altText: "zx9-speaker",
      styleClasses: "desktop:absolute desktop:-bottom-4 desktop:left-16",
    },
  };

  const yX1EarphonesImageSrc = {
    mobile: {
      imageData: yx1_mobile,
      width: 327,
      height: 200,
      altText: "yx1-earphones",
      styleClasses: "rounded-lg",
    },
    tablet: {
      imageData: yx1_tablet,
      width: 339,
      height: 320,
      altText: "yx1-earphones",
      styleClasses: "rounded-lg",
    },
    desktop: {
      imageData: yx1_desktop,
      width: 540,
      height: 320,
      altText: "yx1-earphones",
      styleClasses: "rounded-lg",
    },
  };

  return (
    <section
      id="featureProducts"
      className="desktop:w-11/12 flex flex-col items-center mt-8 px-6 "
    >
      <article
        id="zx9-speaker"
        className="flex flex-col items-center desktop:items-end bg-feature rounded-lg bg-accent w-full px-4 py-16 
                    desktop:h-[560px] desktop:relative desktop:overflow-hidden"
      >
        <ImageDynamic imageSrc={zX9ImageSrc} />
        <div className="flex flex-col items-center desktop:items-start desktop:w-1/3 text-center desktop:text-left desktop:mr-20">
          <h2 className="mt-12 tablet:w-1/3 text-3xl tablet:text-6xl text-center desktop:text-left uppercase text-white font-bold">
            ZX9 speaker
          </h2>
          <p className="mt-12 tablet:w-2/3 px-4 desktop:px-0 text-[15px] leading-[25px]  text-white text-center desktop:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="mt-12 px-8 py-4 bg-black text-white text-sm uppercase font-bold">
            See product
          </button>
        </div>
      </article>
      <article className="bg-zx7 w-full rounded-lg mt-8 pl-8 py-20">
        <h2 className="text-3xl uppercase font-bold">ZX7 speaker</h2>
        <button className="mt-12 border border-black px-8 py-4 uppercase text-sm font-bold">
          See Product
        </button>
      </article>
      <article className="mt-8">
        <ImageDynamic imageSrc={yX1EarphonesImageSrc} />
        <div className="mt-8 bg-product pl-8 py-12 rounded-lg">
          <h2 className="text-3xl uppercase font-bold">yx1 earphones</h2>
          <button className="mt-12 border border-black px-8 py-4 uppercase text-sm font-bold">
            See Product
          </button>
        </div>
      </article>
    </section>
  );
}
