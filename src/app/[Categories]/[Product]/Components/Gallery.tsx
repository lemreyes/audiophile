import { Fragment } from "react";
import { GalleryInfo } from "../../../Types/Interfaces";
import Picture, { srcSetInfo } from "../../../Components/Picture";

export default function Gallery({ gallery }: { gallery: Array<GalleryInfo> }) {
  let imgSrcInfo: Array<srcSetInfo> = [];
  let imgIndex = 0;
  let imgKey = 0;

  gallery.map((galleryImage) => {
    let style = "";
    imgIndex++;
    switch (imgIndex) {
      case 1:
        style =
          "mb-4 tablet:mb-0 tablet:col-start-1 tablet:col-end-2 tablet:row-start-1 tablet:row-end-2";
        break;
      case 2:
        style =
          "mb-4 tablet:mb-0 rounded-2xl tablet:col-start-1 tablet:col-end-2 tablet:row-start-2 tablet:row-end-3";
        break;
      case 3:
        style =
          "mb-4 tablet:mb-0 rounded-2xl tablet:col-start-2 tablet:col-end-4 tablet:row-start-1 tablet:row-end-3";
        break;
      default:
        style = "";
    }

    const imageInfo = {
      imageSrc: {
        mobile: galleryImage.mobileSrc,
        tablet: galleryImage.tabletSrc,
        desktop: galleryImage.desktopSrc,
      },
      alt: `product-image-${galleryImage.order}`,
      styleClasses: style,
    };

    return imgSrcInfo.push(imageInfo);
  });

  return (
    <Fragment>
      {imgSrcInfo.map((imgSrc) => {
        imgKey++;
        return (
          <div key={imgSrc.alt} className={imgSrc.styleClasses}>
            <Picture
              srcSet={{
                mobile: imgSrc.imageSrc.mobile,
                tablet: imgSrc.imageSrc.tablet,
                desktop: imgSrc.imageSrc.desktop,
              }}
              alt={imgSrc.alt}
              styleClass="rounded-2xl h-full w-full"
            />
          </div>
        );
      })}
    </Fragment>
  );
}
