
import axiosInstance from "@/lib/axios";
import type { ProductData, Product } from "@/types/Product";

const getProductDetail = async (
    slug: string
): Promise<ProductData | void> => {
  try {
    const response = await axiosInstance.get(`/product/show/${slug}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return;
  }
};

const getNewProducts = async (): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get("/product/new");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}


export { getProductDetail, getNewProducts };
