
import type { Login, LoginResponse, Register } from "@/types/Auth";
import { handleAxiosError } from "@/helpers/axiosHelper";
import {showToast} from "@/helpers/toastHelper";
import { UserInfo } from "@/types/User";
import axiosInstance from "@/lib/axios";

type ForgotPasswordPayload = {
  email: string;
  time: string;
  device: string;
};

type UpdatePasswordPayload = {
  email: string;
  password: string;
  password_confirmation: string;
  token: string;
};

const login = async (payload: Login): Promise<LoginResponse | null> => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email: payload.email,
      password: payload.password,
    });

    if (response.data.status === 401) {
      return null;
    }

    const user = response.data;
    return user;
  } catch (error) {
    handleAxiosError(error, showToast); 
    return null;
  }
};

const register = async (
  payload: Register,
): Promise<LoginResponse | null> => {
  try {
    const response = await axiosInstance.post("/auth/register", {
      email: payload.email,
      password: payload.password,
      password_confirmation: payload.password_confirmation,
      name: payload.name,
    });

    if (response.data.status === 401) {
      console.error(response.data.message);
      showToast(response.data.message, "error");
      return null;
    }

    return response.data;
  } catch (error) {
    handleAxiosError(error, showToast); 
    return null;
  }
};


const fetchUserData = async (): Promise<UserInfo | null> => {
  try {
    const response = await axiosInstance.get("/auth/me");
    return response.data.user;
  } catch (error) {    
    console.error(error);
    return null;
  }
};

const logout = async (): Promise<void> => {
  try {
    await axiosInstance.post("/auth/logout");
  } catch (error) {
    console.error(error);
  }
};

const sendEmailLink = async (payload: ForgotPasswordPayload): Promise<void | null> => {
  try {
   return await axiosInstance.post("/auth/password/forgot", {
      email: payload.email,
      time: payload.time,
      device: payload.device,
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updatePassword = async (
  payload: UpdatePasswordPayload
): Promise<void> => {
  try {
    await axiosInstance.post("/auth/reset-password", {
      email: payload.email,
      password: payload.password,
      password_confirmation: payload.password_confirmation,
      token: payload.token,
    });
  } catch (error) {
    console.error(error);
  }
};

export { login, register, logout, sendEmailLink, updatePassword, fetchUserData };
