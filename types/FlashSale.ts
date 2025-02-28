export type FlashSale = {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  items: FlashSaleItem[];
};

export type FlashSaleItem = {
  id: number;
  discount: number;
  image: string | null;
  quantity: number;
  sold: number;
  product: Product[];
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  min_price: number;
  max_price: number;
  min_sale_price: number;
};
