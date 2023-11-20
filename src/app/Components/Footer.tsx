import Image from "next/image";
import logo from "../../../public/assets/shared/desktop/logo.svg";
import fb_logo from "../../../public/assets/shared/desktop/icon-facebook.svg";
import twitter_logo from "../../../public/assets/shared/desktop/icon-twitter.svg";
import ig_logo from "../../../public/assets/shared/desktop/icon-instagram.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-black text-white">
      <div id="footer-accent" className="w-24 h-[4px] bg-accent"></div>
      <Image src={logo} alt="Logo" className="mt-12" />
      <nav
        id="site-links"
        className="mt-8 uppercase text-[13px] tracking-[2px] text-center"
      >
        <ul>
          <li className="my-8">Home</li>
          <li className="my-8">Headphones</li>
          <li className="my-8">Speakers</li>
          <li className="my-8">Earphones</li>
        </ul>
      </nav>
      <p className="mt-8 text-gray-400 text-[15px] text-center leading-6 px-8">
        Audiophile is an all in one stop to fulfill your audio needs. We are a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we are open 7 days a week.
      </p>
      <p className="mt-12 text-gray-400 text-[15px] text-center leading-6 px-8">
        Copyright 2023. All Rights Reserved
      </p>
      <nav id="social-media-links" className="my-12">
        <ul className="flex flex-row">
          <li className="mr-4">
            <Link href="http://www.facebook.com">
              <Image src={fb_logo} alt="facebook logo" />
            </Link>
          </li>
          <li className="mr-4">
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
