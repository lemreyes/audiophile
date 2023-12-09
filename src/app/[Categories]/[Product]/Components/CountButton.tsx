export default function CountButton({
  quantity,
  hdlIncrement,
  hdlDecrement,
}: {
  quantity: number;
  hdlIncrement: () => void;
  hdlDecrement: () => void;
}) {
  return (
    <div className="flex flex-row items-center">
      <button
        className="text-[13px] font-bold tracking-wide bg-product p-4 text-textPrimary hover:text-accent"
        onClick={hdlDecrement}
      >
        -
      </button>
      <p className="text-[13px] font-bold tracking-wide bg-product p-4 w-8">
        {quantity}
      </p>
      <button
        className="text-[13px] font-bold tracking-wide bg-product p-4 text-textPrimary hover:text-accent"
        onClick={hdlIncrement}
      >
        +
      </button>
    </div>
  );
}
