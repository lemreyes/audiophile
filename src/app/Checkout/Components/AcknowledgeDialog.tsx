export default function AcknowledgeDialog({
  hdlClickOutside,
}: {
  hdlClickOutside: (e: React.MouseEvent) => void;
}) {
  return (
    <div
      id="ack-overlay"
      className="w-screen h-screen overflow-y-hidden bg-black bg-opacity-40 fixed z-50 top-0 left-0 flex flex-col items-center"
      onClick={hdlClickOutside}
    >
      <div className="w-11/12 desktop:w-4/5 wide:w-3/5 mt-12 desktop:mt-56 flex flex-col items-end bg-white">
        <h1>Thank you</h1>
      </div>
    </div>
  );
}
