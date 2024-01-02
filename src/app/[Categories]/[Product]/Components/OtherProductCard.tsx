import { Fragment } from "react";
import Picture from "../../../Components/Picture";
import { ImageInfoPictureComponent } from "../../../Types/Interfaces";
import Link from "next/link";

export default function OtherProductCard({
  imageSrcSetInfo,
  shortName,
  name,
  category,
  id,
}: {
  imageSrcSetInfo: ImageInfoPictureComponent;
  shortName: string;
  name: string;
  category: string;
  id: number;
}) {
  return (
    <Fragment>
      <div className="px-2 bg-product rounded-lg w-full flex items-center justify-center">
        <Picture
          srcSet={{
            mobile: imageSrcSetInfo.imageSrc.mobile,
            tablet: imageSrcSetInfo.imageSrc.tablet,
            desktop: imageSrcSetInfo.imageSrc.desktop,
          }}
          alt={imageSrcSetInfo.alt}
          styleClass={imageSrcSetInfo.styleClasses}
        />
      </div>

      <h4 className="mt-4 text-[24px] px-4 font-bold text-center tracking-wide">
        {shortName}
      </h4>
      <Link
        href={{
          pathname: `/${category}/${name}`,
          query: { id: id },
        }}
      >
        <button
          className="mt-4 mb-8 py-4 px-8 uppercase text-[13px] font-bold tracking-wide text-white bg-accent 
                          hover:bg-accentHover"
        >
          See product
        </button>
      </Link>
    </Fragment>
  );
}
