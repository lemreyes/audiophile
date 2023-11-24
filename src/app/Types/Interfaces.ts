export enum ScreenTypeEnum {
  SCREENTYPE_MOBILE = 0,
  SCREENTYPE_TABLET,
  SCREENTYPE_DESKTOP,
}

export interface ProductInfo {
  id: number;
  slug: string;
  name: string;
  category: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  created_at: Date;
  updated_at: Date;
  image: Array<ImageInfo>;
}

export interface ImageInfo {
  id: number;
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
  productId: number;
  created_at: Date;
  updated_at: Date;
}
