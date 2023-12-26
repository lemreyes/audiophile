import { PAYMENT_METHOD } from "./Enums";

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

export interface GalleryInfo {
  id: number;
  order: number;
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
  productId: number;
  created_at: Date;
  updated_at: Date;
}

export interface CustomerInfo {
  id?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
}

export interface TransactionInfo {
  id?: number;
  paymentMethod: PAYMENT_METHOD;
  eMoneyNumber: string;
  eMoneyPin?: string;
  shippingFee: number;
  vatRate: number;
  orders: Array<OrderItem>;
}

export interface OrderItem {
  id?: number;
  productId: number;
  quantity: number;
}
