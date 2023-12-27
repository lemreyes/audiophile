"use client";
import Image from "next/image";
import logo from "../../../public/assets/shared/desktop/logo.svg";
import fb_logo from "../../../public/assets/shared/desktop/icon-facebook.svg";
import fb_logo_hover from "../../../public/assets/shared/desktop/icon-facebook-hover.svg";
import twitter_logo from "../../../public/assets/shared/desktop/icon-twitter.svg";
import twitter_logo_hover from "../../../public/assets/shared/desktop/icon-twitter-hover.svg";
import ig_logo from "../../../public/assets/shared/desktop/icon-instagram.svg";
import ig_logo_hover from "../../../public/assets/shared/desktop/icon-instagram-hover.svg";
import Link from "next/link";
import { ScreenTypeEnum } from "../Types/Enums";
import { useEffect, useState } from "react";

export default function Footer() {
  const [screenType, setScreenType] = useState<ScreenTypeEnum>(
    ScreenTypeEnum.SCREENTYPE_MOBILE
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 430) {
        setScreenType(ScreenTypeEnum.SCREENTYPE_MOBILE);
      } else if (window.innerWidth < 1024) {
        setScreenType(ScreenTypeEnum.SCREENTYPE_TABLET);
      } else {
        setScreenType(ScreenTypeEnum.SCREENTYPE_DESKTOP);
      }
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isFbLogoHover, setIsFbLogoHover] = useState(false);
  const [isIgLogoHover, setIsIgLogoHover] = useState(false);
  const [isTwitterLogoHover, setIsTwitterLogoHover] = useState(false);

  if (
    ScreenTypeEnum.SCREENTYPE_MOBILE === screenType ||
    ScreenTypeEnum.SCREENTYPE_TABLET === screenType
  ) {
    return (
      <footer className="flex flex-col items-center tablet:items-start bg-black text-white">
        <div
          id="footer-accent"
          className="tablet:ml-10 w-24 h-[4px] bg-accent justify-self-center tablet:justify-self-start"
        ></div>
        <Image
          src={logo}
          alt="Logo"
          className="mt-12 tablet:ml-10 justify-self-center tablet:justify-self-start"
        />
        <nav
          id="site-links"
          className="mt-8 tablet:ml-10 uppercase text-[13px] font-bold leading-[25px] tracking-[2px] text-center tablet:text-left"
        >
          <ul className="tablet:flex tablet:flex-row gap-x-8">
            <Link href="/">
              <li className="my-8 tablet:my-0 hover:text-accent">Home</li>
            </Link>
            <Link href="/Headphones">
              <li className="my-8 tablet:my-0 hover:text-accent">Headphones</li>
            </Link>
            <Link href="/Speakers">
              <li className="my-8 tablet:my-0 hover:text-accent">Speakers</li>
            </Link>
            <Link href="/Earphones">
              <li className="my-8 tablet:my-0 hover:text-accent">Earphones</li>
            </Link>
          </ul>
        </nav>
        <p className="mt-8 tablet:ml-10 text-gray-400 text-[15px] text-center tablet:text-left leading-6 font-medium px-8 tablet:px-0 tablet:w-[90%]">
          Audiophile is an all in one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we are open 7 days a week.
        </p>
        <div className="flex flex-col tablet:flex-row items-center tablet:justify-between tablet:w-full mb-12">
          <p className="mt-12 tablet:ml-10 text-gray-400 text-[15px] text-center tablet:text-left leading-6 px-8 tablet:px-0">
            Copyright 2023. All Rights Reserved
          </p>
          <nav
            id="social-media-links"
            className="mt-12 tablet:mr-10 tablet:justify-self-end justify-self-center "
          >
            <ul className="flex flex-row gap-x-4">
              <li className="mr-4 tablet:mr-0">
                <Link href="http://www.facebook.com">
                  <Image
                    src={isFbLogoHover ? fb_logo_hover : fb_logo}
                    alt="facebook logo"
                    onMouseEnter={() => setIsFbLogoHover(true)}
                    onMouseLeave={() => setIsFbLogoHover(false)}
                  />
                </Link>
              </li>
              <li className="mr-4 tablet:mr-0">
                <Link href="http://www.twitter.com">
                  <Image
                    src={isTwitterLogoHover ? twitter_logo_hover : twitter_logo}
                    alt="twitter logo"
                    onMouseEnter={() => setIsTwitterLogoHover(true)}
                    onMouseLeave={() => setIsTwitterLogoHover(false)}
                  />
                </Link>
              </li>
              <li>
                <Link href="http://www.instagram.com">
                  <Image
                    src={isIgLogoHover ? ig_logo_hover : ig_logo}
                    alt="instagram logo"
                    onMouseEnter={() => setIsIgLogoHover(true)}
                    onMouseLeave={() => setIsIgLogoHover(false)}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className="bg-black text-white flex flex-col items-center">
        <div className="grid grid-cols-2 grid-rows-4 desktop:w-4/5 wide:w-3/5">
          <div
            id="footer-accent"
            className="w-24 h-[4px] bg-accent row-start-1 row-end-2 col-start-1 col-end-2"
          ></div>
          <Link
            href="/"
            className="row-start-2 row-end-3 col-start-1 col-end-2"
          >
            <Image src={logo} alt="Logo" />
          </Link>
          <nav
            id="site-links"
            className="uppercase text-[13px] font-bold leading-[25px] tracking-[2px] 
                        row-start-2 row-end-3 col-start-2 col-end-3 self-start justify-self-end"
          >
            <ul className="flex flex-row gap-x-8">
              <Link href="/">
                <li className="hover:text-accent">Home</li>
              </Link>
              <Link href="/Headphones">
                <li className="hover:text-accent">Headphones</li>
              </Link>
              <Link href="/Speakers">
                <li className="hover:text-accent">Speakers</li>
              </Link>
              <Link href="/Earphones">
                <li className="hover:text-accent">Earphones</li>
              </Link>
            </ul>
          </nav>
          <p
            className="text-gray-400 text-[15px] text-left leading-6 font-medium 
                          row-start-3 row-end-4 col-start-1 col-end-2 self-start justify-self-end"
          >
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we are open 7 days a week.
          </p>
          <p className="mt-12 mb-12 text-gray-400 text-[15px] text-left leading-6 row-start-4 row-end-5 col-start-1 col-end-2">
            Copyright 2023. All Rights Reserved
          </p>
          <nav
            id="social-media-links"
            className="mt-12 justify-self-end row-start-3 row-end-4 col-start-2 col-end-3"
          >
            <ul className="flex flex-row gap-x-4">
              <li className="mr-4 tablet:mr-0">
                <Link href="http://www.facebook.com">
                  <Image
                    src={isFbLogoHover ? fb_logo_hover : fb_logo}
                    alt="facebook logo"
                    onMouseEnter={() => setIsFbLogoHover(true)}
                    onMouseLeave={() => setIsFbLogoHover(false)}
                  />
                </Link>
              </li>
              <li className="mr-4 tablet:mr-0">
                <Link href="http://www.twitter.com">
                  <Image
                    src={isTwitterLogoHover ? twitter_logo_hover : twitter_logo}
                    alt="twitter logo"
                    onMouseEnter={() => setIsTwitterLogoHover(true)}
                    onMouseLeave={() => setIsTwitterLogoHover(false)}
                  />
                </Link>
              </li>
              <li>
                <Link href="http://www.instagram.com">
                  <Image
                    src={isIgLogoHover ? ig_logo_hover : ig_logo}
                    alt="instagram logo"
                    onMouseEnter={() => setIsIgLogoHover(true)}
                    onMouseLeave={() => setIsIgLogoHover(false)}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
}
