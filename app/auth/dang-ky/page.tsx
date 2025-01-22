"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Register as RegisterType } from "@/types/Auth";
import { useState, useEffect } from "react";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import { register as handleRegister } from "@/services/AuthServices";
import { showToast } from "@/helpers/toastHelper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { HttpStatus } from "@/constants/httpStatus";

const RegisterPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const { login, isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterType>();

  const onSubmit: SubmitHandler<RegisterType> = async (payload) => {
    try {
      setLoading(true);
      const response = await handleRegister(payload);
      if (response?.status === HttpStatus.OK) {
        login(response);
        showToast("Đăng ký thành công", "success");

        router.push("/");
      } else {
        showToast(
          response?.message ? response.message : "Đăng ký không thành công",
          "error"
        );
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-[600px] mx-5 md:mx-auto my-10">
      <h1 className="text-2xl font-semibold text-center">Đăng ký</h1>

      <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-3">
          <Label htmlFor="name" className="block mb-2 text-md">
            Họ và tên
          </Label>
          <Input
            type="text"
            id="name"
            className="w-full h-11 duration-300"
            {...register("name", {
              required: "Vui lòng nhập họ và tên",
            })}
            tabIndex={1}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

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
            tabIndex={2}
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
                validate: (value) =>
                  value === watch("password_confirmation") ||
                  "Mật khẩu không trùng khớp",
              })}
              tabIndex={3}
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
          <Label htmlFor="password_confirmation" className="block mb-2 text-md">
            Nhập lại mật khẩu
          </Label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              id="password_confirmation"
              className="w-full h-11 duration-300"
              {...register("password_confirmation", {
                required: "Vui lòng nhập lại mật khẩu",
                validate: (value) =>
                  value === watch("password") || "Mật khẩu không trùng khớp",
              })}
              tabIndex={4}
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showPassword ? (
                <EyeOffIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="form-group mb-1">
          <div className="flex items-center justify-between">
            <div></div>

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
              "Đăng ký"
            )}
          </Button>
        </div>

        <div className="form-group mb-3 text-center">
          <span className="text-md me-4">Bạn đã có tài khoản?</span>
          <Link
            href="/dang-nhap"
            className="text-md text-primary cursor-pointer"
          >
            Đăng nhập ngay
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

export default RegisterPage;
