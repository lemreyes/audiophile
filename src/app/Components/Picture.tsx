export interface sourceSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface srcSetInfo {
  imageSrc: sourceSet;
  alt: string;
  styleClasses: string;
}

export default function Picture({
  srcSet,
  alt,
  styleClass,
}: {
  srcSet: sourceSet;
  alt: string;
  styleClass: string;
}) {
  const TABLET_MIN_WIDTH = 430;
  const DESKTOP_MIN_WIDTH = 1024;

  return (
    <picture>
      <source
        srcSet={srcSet.desktop}
        media={`(min-width: ${DESKTOP_MIN_WIDTH}px)`}
      />
      <source
        srcSet={srcSet.tablet}
        media={`(min-width: ${TABLET_MIN_WIDTH}px)`}
      />

      <img src={srcSet.mobile} alt={alt} className={styleClass} />
    </picture>
  );
}
