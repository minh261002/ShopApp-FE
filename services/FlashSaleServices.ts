
import type { FlashSale } from "@/types/FlashSale";
import { handleAxiosError } from "@/helpers/axiosHelper";
import {showToast} from "@/helpers/toastHelper";
import axiosInstance from "@/lib/axios";

const getFlashSale = async (): Promise<FlashSale[] | []> => {
  try {
    const response = await axiosInstance.get("/flash-sale");

    if (response.data.status === 401) {
      return [];
    }

    const flashSale = response.data.data;
    return flashSale;
  } catch (error) {
    handleAxiosError(error, showToast); 
    return [];
  }
};

export { getFlashSale };
