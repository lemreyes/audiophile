import Link from "next/link";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const headphonesImgSrc = {
    mobile: "/assets/home/mobile/headphones_category.png",
    tablet: "/assets/home/tablet/headphones_category.png",
    desktop: "/assets/home/desktop/headphones_category.png",
  };

  const speakersImgSrc = {
    mobile: "/assets/home/mobile/speakers_category.png",
    tablet: "/assets/home/tablet/speakers_category.png",
    desktop: "/assets/home/desktop/speakers_category.png",
  };

  const earphonesImgSrc = {
    mobile: "/assets/home/mobile/earphones_category.png",
    tablet: "/assets/home/tablet/earphones_category.png",
    desktop: "/assets/home/desktop/earphones_category.png",
  };

  return (
    <section
      id="categories"
      className="mt-12 w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 flex flex-col items-center tablet:flex-row tablet:gap-x-4 desktop:mt-16 tablet:px-0"
    >
      <CategoryCard name="Headphones" image={headphonesImgSrc} />
      <CategoryCard name="Speakers" image={speakersImgSrc} />
      <CategoryCard name="Earphones" image={earphonesImgSrc} />
    </section>
  );
}
