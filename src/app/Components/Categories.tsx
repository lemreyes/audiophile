import headphones_category_mobile from "../../../public/assets/home/mobile/headphones_category.png";
import headphones_category_tablet from "../../../public/assets/home/tablet/headphones_category.png";
import headphones_category_desktop from "../../../public/assets/home/desktop/headphones_category.png";
import speakers_category_mobile from "../../../public/assets/home/mobile/speakers_category.png";
import speakers_category_tablet from "../../../public/assets/home/tablet/speakers_category.png";
import speakers_category_desktop from "../../../public/assets/home/desktop/speakers_category.png";
import earphones_category_mobile from "../../../public/assets/home/mobile/earphones_category.png";
import earphones_category_tablet from "../../../public/assets/home/tablet/earphones_category.png";
import earphones_category_desktop from "../../../public/assets/home/desktop/earphones_category.png";

import Link from "next/link";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const headphonesImgSrc = {
    mobile: {
      imageData: headphones_category_mobile,
      width: 80,
      height: 104,
      altText: "headphones",
      styleClasses: "absolute -top-20",
    },
    tablet: {
      imageData: headphones_category_tablet,
      width: 80,
      height: 104,
      altText: "headphones",
      styleClasses: "absolute -top-20",
    },
    desktop: {
      imageData: headphones_category_desktop,
      width: 123,
      height: 160,
      altText: "headphones",
      styleClasses: "absolute -top-20",
    },
  };

  const speakersImgSrc = {
    mobile: {
      imageData: speakers_category_mobile,
      width: 84,
      height: 101,
      altText: "speakers",
      styleClasses: "absolute -top-20",
    },
    tablet: {
      imageData: speakers_category_tablet,
      width: 84,
      height: 101,
      altText: "speakers",
      styleClasses: "absolute -top-20",
    },
    desktop: {
      imageData: speakers_category_desktop,
      width: 121,
      height: 146,
      altText: "speakers",
      styleClasses: "absolute -top-20",
    },
  };

  const earphonesImgSrc = {
    mobile: {
      imageData: earphones_category_mobile,
      width: 103,
      height: 104,
      altText: "earphones",
      styleClasses: "absolute -top-20",
    },
    tablet: {
      imageData: earphones_category_tablet,
      width: 103,
      height: 104,
      altText: "earphones",
      styleClasses: "absolute -top-20",
    },
    desktop: {
      imageData: earphones_category_desktop,
      width: 125,
      height: 126,
      altText: "earphones",
      styleClasses: "absolute -top-20",
    },
  };

  return (
    <section
      id="categories"
      className="tablet:w-4/5 flex flex-col items-center tablet:flex-row tablet:gap-x-4 mt-8 desktop:mt-16 px-6"
    >
      <CategoryCard name="Headphones" image={headphonesImgSrc} />
      <CategoryCard name="Speakers" image={speakersImgSrc} />
      <CategoryCard name="Earphones" image={earphonesImgSrc} />
    </section>
  );
}
