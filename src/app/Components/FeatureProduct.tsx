import Picture from "./Picture";

export default function FeatureProduct() {
  return (
    <section
      id="featureProducts"
      className="desktop:w-11/12 flex flex-col items-center mt-8 px-8 desktop:px-0"
    >
      <article
        id="zx9-speaker"
        className="flex flex-col items-center desktop:items-end bg-feature rounded-lg bg-accent w-full px-4 py-16 
                    desktop:h-[560px] desktop:relative desktop:overflow-hidden"
      >
        <Picture
          srcSet={{
            mobile: "/assets/home/mobile/image-speaker-zx9.png",
            tablet: "/assets/home/desktop/image-speaker-zx9.png",
            desktop: "/assets/home/tablet/image-speaker-zx9.png",
          }}
          alt={"zx9-speaker"}
          styleClass={"desktop:absolute desktop:-bottom-4 desktop:left-16"}
        />
        <div className="flex flex-col items-center desktop:items-start desktop:w-1/3 text-center desktop:text-left desktop:mr-20">
          <h2 className="mt-12 tablet:w-1/3 text-3xl tablet:text-6xl text-center desktop:text-left uppercase text-white font-bold">
            ZX9 speaker
          </h2>
          <p className="mt-12 tablet:w-2/3 px-4 desktop:px-0 text-[15px] leading-[25px]  text-white text-center desktop:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="mt-12 px-8 py-4 bg-black hover:bg-[#4c4c4c] text-white text-sm uppercase font-bold">
            See product
          </button>
        </div>
      </article>
      <article className="bg-zx7 w-full rounded-lg mt-8 pl-8 py-20">
        <h2 className="text-3xl uppercase font-bold tracking-[2px]">
          ZX7 speaker
        </h2>
        <button className="mt-12 border border-black hover:bg-black hover:text-white px-8 py-4 uppercase text-sm font-bold">
          See Product
        </button>
      </article>
      <article className="mt-8 tablet:w-full">
        <div className="tablet:flex tablet:flex-row gap-x-4">
          <Picture
            srcSet={{
              mobile: "assets/home/mobile/image-earphones-yx1.jpg",
              tablet: "/assets/home/tablet/image-earphones-yx1.jpg",
              desktop: "/assets/home/desktop/image-earphones-yx1.jpg",
            }}
            alt={"yx1-earphones"}
            styleClass={"rounded-lg"}
          />
          <div className="tablet:flex tablet:flex-col tablet:justify-center mt-8 tablet:mt-0 bg-product pl-12 tablet:w-4/5 rounded-lg">
            <h2 className="text-3xl uppercase font-bold">yx1 earphones</h2>
            <button className="mt-12 border border-black hover:bg-black hover:text-white px-4 py-4 w-[160px] uppercase text-sm font-bold">
              See Product
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
