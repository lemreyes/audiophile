import Image from "next/image";
import hamburger_icon from "../../../public/assets/shared/tablet/icon-hamburger.svg";
import cart_icon from "../../../public/assets/shared/desktop/icon-cart.svg";
import logo from "../../../public/assets/shared/desktop/logo.svg";

export default function Navbar() {
  return (
    <div className="bg-primary py-4 flex flex-col items-center ">
      <div className="w-4/5 flex flex-row justify-between items-center">
        <Image
          src={hamburger_icon}
          alt="burger_icon"
          className="w-4 h-4 desktop:hidden"
        />
        <Image src={logo} alt="logo" />
        <ul className="hidden desktop:flex desktop:flex-row desktop:gap-x-8 text-white uppercase text-[13px] tracking-[2px] text-center">
          <li className="my-8">Home</li>
          <li className="my-8">Headphones</li>
          <li className="my-8">Speakers</li>
          <li className="my-8">Earphones</li>
        </ul>
        <Image src={cart_icon} alt="cart_icon" className="w-4 h-4" />
      </div>
    </div>
  );
}
