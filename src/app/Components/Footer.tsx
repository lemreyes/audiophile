import Image from "next/image";
import logo from "../../../public/assets/shared/desktop/logo.svg";
import fb_logo from "../../../public/assets/shared/desktop/icon-facebook.svg";
import twitter_logo from "../../../public/assets/shared/desktop/icon-twitter.svg";
import ig_logo from "../../../public/assets/shared/desktop/icon-instagram.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 desktop:grid-cols-2 tablet:items-start bg-black text-white">
      <div
        id="footer-accent"
        className="tablet:ml-10 w-24 h-[4px] bg-accent justify-self-center tablet:justify-self-start 
            desktop:row-span-1 desktop:row-end-2 desktop:col-span-1 desktop:col-end-2"
      ></div>
      <Image
        src={logo}
        alt="Logo"
        className="mt-12 desktop:mt-8 tablet:ml-10 justify-self-center tablet:justify-self-start 
            desktop:row-span-2 desktop:row-end-3 desktop:col-span-1 desktop:col-end-2"
      />
      <nav
        id="site-links"
        className="mt-8 desktop:mt-8 tablet:ml-10 desktop:ml-0 uppercase text-[13px] font-bold leading-[25px] tracking-[2px] text-center tablet:text-left desktop:text-right
        desktop:row-span-2 desktop:row-end-3 desktop:col-span-2 desktop:col-end-3 desktop:place-self-end desktop:mr-10"
      >
        <ul className="tablet:flex tablet:flex-row gap-x-8">
          <li className="my-8 tablet:my-0">Home</li>
          <li className="my-8 tablet:my-0">Headphones</li>
          <li className="my-8 tablet:my-0">Speakers</li>
          <li className="my-8 tablet:my-0">Earphones</li>
        </ul>
      </nav>
      <p className="mt-8 desktop:mt-16 tablet:ml-10 text-gray-400 text-[15px] text-center tablet:text-left leading-6 font-medium px-8 tablet:px-0 tablet:w-[90%]
        desktop:row-span-3 desktop:row-end-4 desktop:col-span-1 desktop:col-end-2">
        Audiophile is an all in one stop to fulfill your audio needs. We are a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we are open 7 days a week.
      </p>
      <p className="mt-12 desktop:mt-44 tablet:ml-10 text-gray-400 text-[15px] text-center tablet:text-left leading-6 px-8 tablet:px-0
        desktop:row-span-4 desktop:row-end-5 desktop:col-span-1 desktop:col-end-2 desktop:mb-12">
        Copyright 2023. All Rights Reserved
      </p>
      <nav
        id="social-media-links"
        className="my-12 desktop:mt-8 tablet:my-0 tablet:self-end tablet:justify-self-end tablet:mr-12 tablet:mb-12 justify-self-center"
      >
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
    </footer>
  );
}
