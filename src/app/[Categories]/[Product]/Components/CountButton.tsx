import { Dispatch, SetStateAction } from "react";

export default function CountButton({
  quantity,
  btnHandler,
}: {
  quantity: number;
  btnHandler: Dispatch<SetStateAction<number>>;
}) {
  const hdlIncrementButton = () => {
    btnHandler(quantity + 1);
  };

  const hdlDecrementButton = () => {
    if (quantity > 1) {
      btnHandler(quantity - 1);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between">
      <button
        className="text-[13px] font-bold tracking-wide bg-product p-4 text-textPrimary hover:text-accent"
        onClick={hdlDecrementButton}
      >
        -
      </button>
      <p className="text-[13px] font-bold tracking-wide bg-product p-4 w-8">
        {quantity}
      </p>
      <button
        className="text-[13px] font-bold tracking-wide bg-product p-4 text-textPrimary hover:text-accent"
        onClick={hdlIncrementButton}
      >
        +
      </button>
    </div>
  );
}
