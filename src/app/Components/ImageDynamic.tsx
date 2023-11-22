"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { ScreenTypeEnum } from "../Types/Interfaces";

export interface ImageSrcObject {
  mobile: imageData | null;
  tablet: imageData | null;
  desktop: imageData | null;
}

export interface imageData {
  imageData: StaticImageData | null;
  width: number;
  height: number;
  altText: string;
  styleClasses: string;
}

export default function ImageDynamic({
  imageSrc,
}: {
  imageSrc: ImageSrcObject;
}) {
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

  if (
    screenType === ScreenTypeEnum.SCREENTYPE_MOBILE &&
    imageSrc.mobile &&
    imageSrc.mobile.imageData
  ) {
    return (
      <Image
        src={imageSrc.mobile.imageData}
        alt={imageSrc.mobile.altText}
        className={`${imageSrc.mobile.styleClasses}`}
        width={imageSrc.mobile.width}
        height={imageSrc.mobile.height}
      />
    );
  } else if (
    screenType === ScreenTypeEnum.SCREENTYPE_TABLET &&
    imageSrc.tablet &&
    imageSrc.tablet.imageData
  ) {
    return (
      <Image
        src={imageSrc.tablet.imageData}
        alt={imageSrc.tablet.altText}
        className={`${imageSrc.tablet.styleClasses}`}
        width={imageSrc.tablet.width}
        height={imageSrc.tablet.height}
      />
    );
  } else {
    if (imageSrc.desktop && imageSrc.desktop.imageData) {
      return (
        <Image
          src={imageSrc.desktop.imageData}
          alt={imageSrc.desktop.altText}
          className={`${imageSrc.desktop.styleClasses}`}
          width={imageSrc.desktop.width}
          height={imageSrc.desktop.height}
        />
      );
    } else {
      return <p>No image.</p>;
    }
  }
}
