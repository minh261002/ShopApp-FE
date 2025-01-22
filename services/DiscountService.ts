
import axiosInstance from "@/lib/axios";
import { Discount, DiscountApply } from "@/types/Discount";

const getHomeDiscount = async (): Promise<Discount[] | []> => {
  try {
    const response = await axiosInstance.get(`/discount/home`);
    return response.data.data; 
  } catch (error) {
    console.error(error);
    return []; 
  }
};

const applyDiscount = async (code: string, total_price: number ): Promise<DiscountApply | null> => {
  try {
    const response = await axiosInstance.post(`/discount/apply`, { code, total_price });
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}


export { getHomeDiscount, applyDiscount };
