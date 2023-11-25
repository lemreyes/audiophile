import Categories from "./Components/Categories";
import ClosingStatement from "./Components/ClosingStatement";
import FeatureProduct from "./Components/FeatureProduct";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Categories />
      <FeatureProduct />
      <ClosingStatement />
    </main>
  );
}
