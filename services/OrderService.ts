import { handleAxiosError } from "@/helpers/axiosHelper";
import { showToast } from "@/helpers/toastHelper";
import axiosInstance from "@/lib/axios";
import { Order ,OrderResponse} from "@/types/Order";

const createOrder = async (payload: Order): Promise<OrderResponse | null> => {
    try {
    const response = await axiosInstance.post("/order/store", payload);
    return response.data.data;
    } catch (error) {
      handleAxiosError(error, showToast); 
      return null;
    }
  };

  export { createOrder };