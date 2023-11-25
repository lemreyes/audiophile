import { Fragment } from "react";
import { GalleryInfo } from "../../../Types/Interfaces";
import ImageDynamic, { ImageSrcObject } from "../../../Components/ImageDynamic";

export default function Gallery({ gallery }: { gallery: Array<GalleryInfo> }) {
  let imgSrcInfo: Array<ImageSrcObject> = [];

  // populate gallery array
  gallery.map((galleryImage) => {
    const imgSrc = {
      mobile: {
        imageData: galleryImage.mobileSrc,
        width: 500,
        height: 500,
        altText: `product-image-${galleryImage.order}`,
        styleClasses: "rounded-2xl mb-4",
      },
      tablet: {
        imageData: galleryImage.tabletSrc,
        width: 500,
        height: 500,
        altText: `product-image-${galleryImage.order}`,
        styleClasses: "rounded-2xl mb-4",
      },
      desktop: {
        imageData: galleryImage.desktopSrc,
        width: 500,
        height: 500,
        altText: `product-image-${galleryImage.order}`,
        styleClasses: "rounded-2xl mb-4",
      },
    };

    return imgSrcInfo.push(imgSrc);
  });

  return (
    <Fragment>
      {imgSrcInfo.map((imgSrc) => {
        // eslint-disable-next-line react/jsx-key
        return <ImageDynamic imageSrc={imgSrc} />;
      })}
    </Fragment>
  );
}
