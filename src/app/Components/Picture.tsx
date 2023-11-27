interface sourceSet {
  mobile: string;
  tablet: string;
  desktop: string;
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
  const TABLET_MIN_WIDTH: string = "430px";
  const DESKTOP_MIN_WIDTH: string = "1024px";

  return (
    <picture>
      <source srcSet={srcSet.tablet} media={`min-width: ${TABLET_MIN_WIDTH}`} />
      <source
        srcSet={srcSet.desktop}
        media={`min-width: ${DESKTOP_MIN_WIDTH}`}
      />
      <img src={srcSet.mobile} alt={alt} className={styleClass} />
    </picture>
  );
}
