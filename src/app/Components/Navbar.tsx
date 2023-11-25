import Image from "next/image";
import hamburger_icon from "../../../public/assets/shared/tablet/icon-hamburger.svg";
import cart_icon from "../../../public/assets/shared/desktop/icon-cart.svg";
import logo from "../../../public/assets/shared/desktop/logo.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-primary py-4 flex flex-col items-center ">
      <nav className="w-4/5 flex flex-row justify-between items-center">
        <Image
          src={hamburger_icon}
          alt="burger_icon"
          className="w-4 h-4 desktop:hidden"
          width={40}
          style={{
            height: "auto",
          }}
        />
        <Image src={logo} alt="logo" />
        <ul className="hidden desktop:flex desktop:flex-row desktop:gap-x-8 text-white uppercase text-[13px] tracking-[2px] text-center">
          <Link href="/">
            <li className="my-8 hover:text-accent">Home</li>
          </Link>
          <Link href="/Headphones">
            <li className="my-8 hover:text-accent">Headphones</li>
          </Link>
          <Link href="/Speakers">
            <li className="my-8 hover:text-accent">Speakers</li>
          </Link>
          <Link href="/Earphones">
            <li className="my-8 hover:text-accent">Earphones</li>
          </Link>
        </ul>
        <Image src={cart_icon} alt="cart_icon" className="w-4 h-4" />
      </nav>
    </header>
  );
}
