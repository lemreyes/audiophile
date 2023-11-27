import { Fragment } from "react";
import { GalleryInfo } from "../../../Types/Interfaces";
import Picture, { srcSetInfo } from "../../../Components/Picture";

export default function Gallery({ gallery }: { gallery: Array<GalleryInfo> }) {
  let imgSrcInfo: Array<srcSetInfo> = [];
  let imgKey = 0;

  gallery.map((galleryImage) => {
    const imageInfo = {
      imageSrc: {
        mobile: galleryImage.mobileSrc,
        tablet: galleryImage.tabletSrc,
        desktop: galleryImage.desktopSrc,
      },
      alt: `product-image-${galleryImage.order}`,
      styleClasses: "rounded-2xl mb-4",
    };

    return imgSrcInfo.push(imageInfo);
  });

  return (
    <Fragment>
      {imgSrcInfo.map((imgSrc) => {
        imgKey++;
        return (
          <Picture
            key={imgSrc.alt}
            srcSet={{
              mobile: imgSrc.imageSrc.mobile,
              tablet: imgSrc.imageSrc.tablet,
              desktop: imgSrc.imageSrc.desktop,
            }}
            alt={imgSrc.alt}
            styleClass={imgSrc.styleClasses}
          />
        );
      })}
    </Fragment>
  );
}
