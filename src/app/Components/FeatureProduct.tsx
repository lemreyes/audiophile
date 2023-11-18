import zx9_mobile from "../../../public/assets/home/mobile/image-speaker-zx9.png";
import zx9_tablet from "../../../public/assets/home/tablet/image-speaker-zx9.png";
import zx9_desktop from "../../../public/assets/home/desktop/image-speaker-zx9.png";
import yx1_mobile from "../../../public/assets/home/mobile/image-earphones-yx1.jpg";
import yx1_tablet from "../../../public/assets/home/tablet/image-earphones-yx1.jpg";
import yx1_desktop from "../../../public/assets/home/desktop/image-earphones-yx1.jpg";
import ImageDynamic from "./ImageDynamic";

export default function FeatureProduct() {
  const zX9ImageSrc = {
    mobile: zx9_mobile,
    tablet: zx9_tablet,
    desktop: zx9_desktop,
  };

  const yX1EarphonesImageSrc = {
    mobile: yx1_mobile,
    tablet: yx1_tablet,
    desktop: yx1_desktop,
  };

  return (
    <section
      id="featureProducts"
      className="flex flex-col items-center mt-8 px-6 "
    >
      <article
        id="zx9-speaker"
        className="flex flex-col items-center bg-feature rounded-lg bg-accent w-full px-4 py-16"
      >
        <ImageDynamic
          imageSrc={zX9ImageSrc}
          altText={"zx9-speaker"}
          styleClasses={""}
          width={172}
          height={207}
        />
        <h2 className="mt-12 text-3xl uppercase text-white font-bold">
          ZX9 speaker
        </h2>
        <p className="mt-12 px-4 text-base text-white text-center">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="mt-12 px-8 py-4 bg-black text-white text-sm uppercase font-bold">
          See product
        </button>
      </article>
      <article className="bg-zx7 w-full rounded-lg mt-8 pl-8 py-20">
        <h2 className="text-3xl uppercase font-bold">ZX7 speaker</h2>
        <button className="mt-12 border border-black px-8 py-4 uppercase text-sm font-bold">
          See Product
        </button>
      </article>
      <article className="mt-8">
        <ImageDynamic
          imageSrc={yX1EarphonesImageSrc}
          altText="yx1-earphones"
          styleClasses="rounded-lg"
          width={327}
          height={200}
        />
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
