import axiosInstance from "@/lib/axios";
import { Category, HomeCategory } from "@/types/Category";

const getCategoryInMenu = async (
): Promise<Category[]> => {
  try {
    const response = await axiosInstance.get(`/category/menu`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getCategoryInHome = async (
): Promise<HomeCategory[] | []> => {
  try {
    const response = await axiosInstance.get(`/category/home`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};


export { getCategoryInMenu, getCategoryInHome };
