"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Login as LoginType } from "@/types/Auth";
import { useState } from "react";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import { login as handleLogin } from "@/services/AuthServices";
import { showToast } from "@/helpers/toastHelper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { HttpStatus } from "@/constants/httpStatus";

const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login } = useAuthStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const onSubmit: SubmitHandler<LoginType> = async (payload) => {
    try {
      setLoading(true);
      const response = await handleLogin(payload);

      if (response) {
        if (response.status == HttpStatus.OK) {
          login(response);
          showToast("Đăng nhập thành công", "success");

          const redirectUrl = new URLSearchParams(window.location.search).get(
            "redirect"
          );
          if (redirectUrl) {
            router.push(`/${redirectUrl}`);
          } else {
            router.push("/");
          }
        } else {
          setLoading(false);
          showToast(response?.message, "error");
        }
      } else {
        showToast("Thông tin đăng nhập không chính xác", "error");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-[600px] mx-5 md:mx-auto my-10">
      <h1 className="text-2xl font-semibold text-center">Đăng nhập</h1>

      <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-3">
          <Label htmlFor="email" className="block mb-2 text-md">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            className="w-full h-11 duration-300"
            {...register("email", {
              required: "Vui lòng nhập email",
              pattern: { value: /^\S+@\S+$/i, message: "Email không hợp lệ" },
            })}
            tabIndex={1}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group mb-1">
          <Label htmlFor="password" className="block mb-2 text-md">
            Mật khẩu
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full h-11 duration-300"
              {...register("password", {
                required: "Vui lòng nhập mật khẩu",
                minLength: {
                  value: 6,
                  message: "Mật khẩu phải có ít nhất 6 ký tự",
                },
              })}
              tabIndex={2}
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOffIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <div className="form-group mb-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lưu thông tin
              </label>
            </div>

            <Link href="/quen-mat-khau" className="text-md text-primary">
              Quên mật khẩu
            </Link>
          </div>
        </div>

        <div className="form-group mb-1">
          <Button
            className="w-full h-11 text-lg font-semibold"
            variant={"default"}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <Loader className="w-6 h-6 animate-spin" />
              </div>
            ) : (
              "Đăng nhập"
            )}
          </Button>
        </div>

        <div className="form-group mb-3 text-center">
          <span className="text-md me-4">Bạn chưa có tài khoản?</span>
          <Link href="/dang-ky" className="text-md text-primary cursor-pointer">
            Đăng ký ngay
          </Link>
        </div>

        <div className="form-group mb-3">
          <div className="flex items-center justify-between">
            <hr className="w-1/3 border-gray-500" />
            <span className="text-lg text-gray-500">Hoặc</span>
            <hr className="w-1/3 border-gray-500" />
          </div>
        </div>

        <div className="form-group flex flex-col items-center justify-center gap-3">
          <FacebookLoginButton
            onClick={() => alert("Coming soon")}
            align="center"
          >
            <span>Đăng nhập với Facebook</span>
          </FacebookLoginButton>

          <GoogleLoginButton
            onClick={() => alert("Coming soon")}
            align="center"
          >
            <span>Đăng nhập với Google</span>
          </GoogleLoginButton>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
