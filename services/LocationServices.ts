import { handleAxiosError } from "@/helpers/axiosHelper";
import { Location } from "@/types/Location";
import { showToast } from "@/helpers/toastHelper";
import axiosInstance from "@/lib/axios";

const getProvinces = async (): Promise<Location[] | null> => {
  try {
    const response = await axiosInstance.get("/provinces");
    return response.data;
  } catch (error) {
    handleAxiosError(error, showToast);
    return null;
  }
};

const getDistricts = async (
  provinceCode: string
): Promise<Location[] | null> => {
  try {
    const response = await axiosInstance.get(`/districts/${provinceCode}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, showToast);
    return null;
  }
};

const getWards = async (districtCode: string): Promise<Location[] | null> => {
  try {
    const response = await axiosInstance.get(`/wards/${districtCode}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, showToast);
    return null;
  }
};

export { getProvinces, getDistricts, getWards };
