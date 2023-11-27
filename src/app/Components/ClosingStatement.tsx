import Picture from "./Picture";

export default function ClosingStatement() {
  return (
    <section className="mt-8 mb-12 flex flex-col desktop:grid desktop:grid-cols-2 desktop:gap-x-8 items-center w-11/12">
      <div className="w-full desktop:order-2">
        <Picture
          srcSet={{
            mobile: "/assets/shared/mobile/image-best-gear.jpg",
            tablet: "/assets/shared/tablet/image-best-gear.jpg",
            desktop: "/assets/shared/desktop/image-best-gear.jpg",
          }}
          alt="man with headphones"
          styleClass="rounded-lg tablet:w-full d desktop:w-full"
        />
      </div>
      <div className="desktop:order-1 flex flex-col items-center">
        <h2 className="px-4 desktop:px-0 mt-8 tablet:w-4/5 desktop:w-full text-3xl tablet:text-[40px] desktop:tracking-wide tablet:leading-[44px] text-center desktop:text-left uppercase font-bold">
          Bringing you the <span className="text-accent">best</span> audio gear
        </h2>
        <p className="px-4 desktop:px-0 mt-8 text-[15px] font-medium text-center desktop:text-left text-gray-600 leading-[25px]">
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
