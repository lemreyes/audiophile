"use client";
import Image from "next/image";
import hamburger_icon from "../../../public/assets/shared/tablet/icon-hamburger.svg";
import cart_icon from "../../../public/assets/shared/desktop/icon-cart.svg";
import logo from "../../../public/assets/shared/desktop/logo.svg";
import Link from "next/link";
import { useState, Fragment, useEffect } from "react";
import CartDialog from "./CartDialog";
import Menu from "./Menu";
import { CartState, useCartStore } from "../Store/CartStore";

export default function Navbar() {
  const [isShowCartDialog, setIsShowCartDialog] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const cartItemsCountFromStore = useCartStore(
    (state: CartState) => state.itemCount
  );

  useEffect(() => {
    setCartItemsCount(cartItemsCountFromStore);
  }, [cartItemsCountFromStore]);

  const openCartDialog = () => {
    setIsShowCartDialog(true);
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
  };

  const hdlClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (target && target.id === "overlay") {
      setIsShowCartDialog(false);
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "auto";
    }

    if (target && target.id === "menu-overlay") {
      setIsShowMenu(false);
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "auto";
    }
  };

  const hdlProceedCheckout = (e: React.MouseEvent) => {
    setIsShowCartDialog(false);
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "auto";
  };

  const hdlClickMenuButton = (e: React.MouseEvent) => {
    setIsShowMenu((prevState) => !prevState);
  };

  return (
    <Fragment>
      <header className="bg-primary py-4 flex flex-col items-center ">
        <nav
          aria-label="main navigation"
          className="w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 flex flex-row justify-between items-center"
        >
          <Image
            src={hamburger_icon}
            alt="burger_icon"
            className="w-4 h-4 desktop:hidden"
            width={40}
            style={{
              height: "auto",
            }}
            onClick={hdlClickMenuButton}
          />
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <menu>
            <ul className="hidden desktop:flex desktop:flex-row desktop:gap-x-8 text-white uppercase text-[13px] tracking-[2px] text-center">
              <li className="my-8 hover:text-accent">
                <Link href="/">Home</Link>
              </li>
              <li className="my-8 hover:text-accent">
                <Link href="/Headphones">Headphones</Link>
              </li>
              <li className="my-8 hover:text-accent">
                <Link href="/Speakers">Speakers</Link>
              </li>
              <li className="my-8 hover:text-accent">
                <Link href="/Earphones">Earphones</Link>
              </li>
            </ul>
          </menu>
          <div className="flex flex-row" onClick={openCartDialog}>
            <Image src={cart_icon} alt="cart_icon" className="w-4 h-4 mr-2" />
            <span className="text-white uppercase text-[13px] tracking-[2px] text-left">
              ({cartItemsCount})
            </span>
          </div>
        </nav>
      </header>
      {isShowCartDialog && (
        <CartDialog
          hdlClickOutside={hdlClickOutside}
          hdlProceedCheckout={hdlProceedCheckout}
        />
      )}
      {isShowMenu && <Menu hdlClickOutside={hdlClickOutside} />}
    </Fragment>
  );
}
