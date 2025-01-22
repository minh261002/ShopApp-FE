"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HeartIcon,
  LogInIcon,
  LogOutIcon,
  ShoppingBagIcon,
  SquareArrowUpIcon,
  UserCircleIcon,
} from "lucide-react";
import useAuthStore from "@/store/authStore";
import Link from "next/link";
import { logout as hanleLogout } from "@/services/AuthServices";
import useToastStore from "@/store/toastStore";

const UserInfo = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const { setMessage, setType } = useToastStore();
  const onLogout = async () => {
    await hanleLogout();
    setMessage("Đăng xuất thành công");
    setType("success");
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        {isAuthenticated ? (
          <>
            <Avatar>
              {user?.image ? (
                <AvatarImage src={user?.image} alt={user?.name} />
              ) : (
                <UserCircleIcon size={30} />
              )}
              <AvatarFallback>{user?.name}</AvatarFallback>
            </Avatar>
            <DropdownMenuContent>
              <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserCircleIcon size={20} />
                Thông tin cá nhân
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ShoppingBagIcon size={20} />
                Đơn hàng
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HeartIcon size={20} />
                Sản phẩm yêu thích
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>
                <LogOutIcon size={20} />
                Đăng xuất
              </DropdownMenuItem>
            </DropdownMenuContent>
          </>
        ) : (
          <>
            <UserCircleIcon size={30} />
            <DropdownMenuContent>
              <Link href={"/dang-nhap"}>
                <DropdownMenuItem>
                  <LogInIcon size={20} />
                  Đăng nhập
                </DropdownMenuItem>
              </Link>
              <Link href={"/dang-ky"}>
                <DropdownMenuItem>
                  <SquareArrowUpIcon size={20} />
                  Đăng ký
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </>
        )}
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default UserInfo;
