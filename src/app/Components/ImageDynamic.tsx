"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

enum ScreenTypeEnum {
  SCREENTYPE_MOBILE = 0,
  SCREENTYPE_TABLET,
  SCREENTYPE_DESKTOP,
}

interface ImageSrcObject {
  mobile: StaticImageData | null;
  tablet: StaticImageData | null;
  desktop: StaticImageData | null;
}

export default function ImageDynamic({
  imageSrc,
  altText,
  styleClasses,
  width,
  height,
}: {
  imageSrc: ImageSrcObject;
  altText: string;
  styleClasses: string;
  width: number;
  height: number;
}) {
  const [screenType, setScreenType] = useState<ScreenTypeEnum>(
    ScreenTypeEnum.SCREENTYPE_MOBILE
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
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

  if (screenType === ScreenTypeEnum.SCREENTYPE_MOBILE) {
    return (
      <Image
        src={imageSrc.mobile as StaticImageData}
        alt={altText}
        className={`${styleClasses}`}
        width={width}
        height={height}
      />
    );
  } else if (screenType === ScreenTypeEnum.SCREENTYPE_TABLET) {
    return (
      <Image
        src={imageSrc.tablet as StaticImageData}
        alt={altText}
        className={`${styleClasses}`}
        width={width}
        height={height}
      />
    );
  } else {
    return (
      <Image
        src={imageSrc.desktop as StaticImageData}
        alt={altText}
        className={`${styleClasses}`}
        width={width}
        height={height}
      />
    );
  }
}
