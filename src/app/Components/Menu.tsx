import Categories from "./Categories";

export default function Menu() {
  return (
    <div className="h-[95%] w-full bg-black absolute bg-opacity-40 top-15 left-0 z-50">
      <div className="flex items-center justify-center bg-white rounded-b-xl">
        <Categories />
      </div>
    </div>
  );
}
