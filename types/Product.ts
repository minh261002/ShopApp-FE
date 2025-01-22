type ProductCategory = {
    id: number;
    name: string;
    slug: string;
  };
  
export type ProductVariation = {
    id: number;
    price: number;
    sale_price: number;
    image: string | null;
    quantity: number | null;
    attributes: Attribute[];
  };

  type Attribute = {
    id: number;
    attribute_name: string;
    name: string;
    value: string | null;
  };

  
  type ProductAttributeVariation = {
    id: number;
    name: string;
    meta_value: string | null;
  };
  
  export type ProductAttribute = {
    id: number;
    type: number;
    name: string;
    variations: ProductAttributeVariation[];
    selectedValue: string | null;
  };
  
  export type ProductData = {
    id: number;
    name: string;
    slug: string;
    quantity: number | null;
    image: string;
    gallery: string[];
    categories: ProductCategory[];
    desc: string;
    meta_title: string | null;
    meta_desc: string | null;
    meta_keywords: string | null;
    variations: ProductVariation[];
    attributes: ProductAttribute[];
    flashSale: ProductFlashSale | null;
  };

  export type Product = {
    id: number;
    name: string;
    slug: string;
    image: string;
    min_price: number;
    max_price: number;
    min_sale_price: number;
  }
  
  export type ProductFlashSale = {
    id: number;
    title: string;
    start_date: string;
    end_date: string;
    product: {
      discount: number;
      image: string;
    }
  };
