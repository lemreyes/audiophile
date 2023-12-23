import Categories from "./Categories";

export default function Menu({
  hdlClickOutside,
}: {
  hdlClickOutside: (e: React.MouseEvent) => void;
}) {
  return (
    <div
      id="menu-overlay"
      className="h-[95%] w-full bg-black absolute bg-opacity-40 top-15 left-0 z-50"
      onClick={hdlClickOutside}
    >
      <div className="flex items-center justify-center bg-white rounded-b-xl">
        <Categories />
      </div>
    </div>
  );
}
