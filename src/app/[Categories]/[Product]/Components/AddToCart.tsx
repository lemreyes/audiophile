import CountButton from "./CountButton";

export default function AddToCart() {
  return (
    <div className="flex flex-row items-center gap-x-4">
      <div className="flex flex-row items-center">
        <CountButton />
      </div>
      <button
        className="py-4 px-8 uppercase text-[13px] font-bold tracking-wide text-white bg-accent 
                        hover:bg-accentHover"
      >
        Add to cart
      </button>
    </div>
  );
}
