
import axiosInstance from "@/lib/axios";
import { SliderItem } from "@/types/Slider";

const getSliders = async (
  key: string
): Promise<SliderItem[] | []> => {
  try {
    const response = await axiosInstance.get(`/sliders/${key}`);
    return response.data.data.items; 
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getSliders };
