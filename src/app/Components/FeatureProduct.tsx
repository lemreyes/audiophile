import Link from "next/link";
import Picture from "./Picture";

export default function FeatureProduct() {
  return (
    <section
      id="featureProducts"
      className="w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 flex flex-col items-center mt-8 tablet:px-0"
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
          styleClass={
            "w-[172px] desktop:w-[390px] desktop:absolute desktop:-bottom-4 desktop:left-16"
          }
        />
        <div className="flex flex-col items-center desktop:items-start desktop:w-1/3 desktop:text-left desktop:mr-20">
          <h2 className="mt-12 text-[36px] tablet:text-[56px] tablet:leading-[56px] tablet:tracking-[2px] text-center desktop:text-left uppercase text-white font-bold">
            ZX9 speaker
          </h2>
          <p className="mt-12 tablet:w-2/3 px-4 desktop:px-0 text-[15px] leading-[25px]   text-white text-center desktop:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            href={{
              pathname: "/Speakers/zx9-speaker",
              query: { id: 6 },
            }}
          >
            <button className="mt-12 px-8 py-4 bg-black hover:bg-[#4c4c4c] text-white text-sm uppercase font-bold">
              See product
            </button>
          </Link>
        </div>
      </article>
      <article className="bg-zx7 w-full rounded-lg mt-8 pl-8 py-20">
        <h2 className="text-3xl uppercase font-bold tracking-[2px]">
          ZX7 speaker
        </h2>
        <Link
          href={{
            pathname: "/Speakers/zx7-speaker",
            query: { id: 5 },
          }}
        >
          <button className="mt-12 border border-black hover:bg-black hover:text-white px-8 py-4 uppercase text-sm font-bold">
            See Product
          </button>
        </Link>
      </article>
      <article className="mt-8 tablet:w-full">
        <div className="tablet:grid tablet:grid-cols-2 gap-x-4">
          <div>
            <Picture
              srcSet={{
                mobile: "assets/home/mobile/image-earphones-yx1.jpg",
                tablet: "/assets/home/tablet/image-earphones-yx1.jpg",
                desktop: "/assets/home/desktop/image-earphones-yx1.jpg",
              }}
              alt={"yx1-earphones"}
              styleClass={"rounded-lg"}
            />
          </div>
          <div className="flex flex-col justify-center mt-8 tablet:mt-0 bg-product pl-4 gap-4 rounded-lg min-h-[200px]">
            <h2 className="text-[28px] uppercase font-bold">yx1 earphones</h2>
            <Link
              href={{
                pathname: "/Earphones/yx1-earphones",
                query: { id: 1 },
              }}
            >
              <button className="border border-black hover:bg-black hover:text-white px-4 py-4 w-[160px] uppercase text-sm font-bold">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
