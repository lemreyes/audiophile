import headphone_image from "../../../public/assets/home/headphones_category.png";
import speaker_image from "../../../public/assets/home/speakers_category.png";
import earphones_image from "../../../public/assets/home/earphones_category.png";

import Link from "next/link";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section id="categories" className="flex flex-col items-center mt-8 px-6 ">
      <CategoryCard name="Headphones" image={headphone_image} />
      <CategoryCard name="Speakers" image={speaker_image} />
      <CategoryCard name="Earphones" image={earphones_image} />
    </section>
  );
}
