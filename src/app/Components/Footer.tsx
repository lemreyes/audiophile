import Image from "next/image";
import logo from "../../../public/assets/shared/desktop/logo.svg";
import fb_logo from "../../../public/assets/shared/desktop/icon-facebook.svg";
import twitter_logo from "../../../public/assets/shared/desktop/icon-twitter.svg";
import ig_logo from "../../../public/assets/shared/desktop/icon-instagram.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center tablet:items-start bg-black text-white">
      <div
        id="footer-accent"
        className="tablet:ml-10 w-24 h-[4px] bg-accent"
      ></div>
      <Image src={logo} alt="Logo" className="mt-12 tablet:ml-10" />
      <nav
        id="site-links"
        className="mt-8 tablet:ml-10 uppercase text-[13px] font-bold leading-[25px] tracking-[2px] text-center"
      >
        <ul className="tablet:flex tablet:flex-row gap-x-8">
          <li className="my-8 tablet:my-0">Home</li>
          <li className="my-8 tablet:my-0">Headphones</li>
          <li className="my-8 tablet:my-0">Speakers</li>
          <li className="my-8 tablet:my-0">Earphones</li>
        </ul>
      </nav>
      <p className="mt-8 tablet:ml-10 text-gray-400 text-[15px] text-center tablet:text-left leading-6 font-medium px-8 tablet:px-0 tablet:w-[90%]">
        Audiophile is an all in one stop to fulfill your audio needs. We are a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we are open 7 days a week.
      </p>
      <div className="tablet:flex tablet:flex-row tablet:justify-between tablet:w-[90%] tablet:ml-10">
        <p className="mt-12 text-gray-400 text-[15px] text-center leading-6 px-8 tablet:px-0">
          Copyright 2023. All Rights Reserved
        </p>
        <nav id="social-media-links" className="my-12">
          <ul className="flex flex-row gap-x-4">
            <li className="mr-4 tablet:mr-0">
              <Link href="http://www.facebook.com">
                <Image src={fb_logo} alt="facebook logo" />
              </Link>
            </li>
            <li className="mr-4 tablet:mr-0">
              <Link href="http://www.twitter.com">
                <Image src={twitter_logo} alt="twitter logo" />
              </Link>
            </li>
            <li>
              <Link href="http://www.instagram.com">
                <Image src={ig_logo} alt="instagram logo" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
