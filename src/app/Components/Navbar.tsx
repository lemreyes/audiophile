import Image from "next/image";
import hamburger_icon from "../../../public/assets/shared/tablet/icon-hamburger.svg";
import cart_icon from "../../../public/assets/shared/desktop/icon-cart.svg";
import logo from "../../../public/assets/shared/desktop/logo.svg";

export default function Navbar() {
  return (
    <div className="bg-primary py-6 px-6 flex flex-row justify-between items-center">
      <Image src={hamburger_icon} alt="burger_icon" className="w-4 h-4" />
      <Image src={logo} alt="logo" />
      <Image src={cart_icon} alt="cart_icon" className="w-4 h-4" />
    </div>
  );
}
