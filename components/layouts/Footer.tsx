import { Send } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <div className="grid grid-cols-2 md:grid-cols-5 items-stretch gap-[10px] w-full max-w-[1280px] px-10 md:px-0 md:mx-auto my-10 ">
        <div className="flex flex-col gap-[20px]">
          <h3 className="text-[1.2rem] font-semibold text-text mb-2">
            Về chúng tôi
          </h3>

          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Chúng tôi là ai
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Cam kết của chúng tôi
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Tin tuyển dụng
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Hệ thống cửa hàng
            </p>

            <h3 className="mt-10 text-[1.2rem] font-semibold text-text mb-2">
              Kết nối với chúng tôi
            </h3>

            <div className="flex gap-5">
              <Image
                src="https://res.cloudinary.com/doy3slx9i/image/upload/v1735367388/Pengu/facebook_sav9d8.png"
                alt="logo"
                width={35}
                height={35}
                className="cursor-pointer"
              />

              <Image
                src="https://res.cloudinary.com/doy3slx9i/image/upload/v1735367387/Pengu/tiktok_jxrxoc.png"
                alt="logo"
                width={35}
                height={35}
                className="cursor-pointer"
              />

              <Image
                src="https://res.cloudinary.com/doy3slx9i/image/upload/v1735367388/Pengu/youtube_lpk1vo.png"
                alt="logo"
                width={35}
                height={35}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h3 className="text-[1.2rem] font-semibold text-text mb-3">
            Hỗ trợ khách hàng
          </h3>
          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Hướng dẫn đặt hàng
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Phương thức thanh toán
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Chính sách thành viên
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Chính sách tích - tiêu điểm
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h3 className="text-[1.2rem] font-semibold text-text mb-3">
            Chính sách
          </h3>
          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Chính sách vận chuyển
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Chính sách đổi trả
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Chính sách kiểm hàng
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Chính sách bảo mật
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Điều kiện & Điều khoản
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h3 className="text-[1.2rem] font-semibold text-text mb-3">
            Liên hệ
          </h3>
          <div className="flex text-black flex-col gap-[10px]">
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Tư vấn mua online: 024 7308 2882
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Khiếu nại và bảo hành: 024 7300 6999
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Email: cskh@tokyolife.vn
            </p>
            <p className="text-[0.9rem] font-normal text-text hover:text-primary cursor-pointer transition-all duration-200">
              Giờ làm việc: 8:30 - 22:00 hàng ngày
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h3 className="text-[1.2rem] font-semibold text-text mb-3">
            Đăng ký nhận tin
          </h3>
          <div className="flex gap-[2px] flex-col text-text relative">
            <Input
              type="email"
              className=" w-full rounded-md border border-black outline-none"
              placeholder="Email của bạn"
            />

            <Button className="absolute right-0 bg-black">
              <Send size={20} />
            </Button>
          </div>

          <p className="font-normal">
            Cài App nhận{" "}
            <span className="text-red-700 font-medium">
              Ưu đãi 50% Sinh Nhật
            </span>{" "}
            <br /> Tích Điểm Mọi Hóa Đơn
          </p>

          <div className="flex items-strech justify-center gap-5">
            <Image
              src="https://res.cloudinary.com/doy3slx9i/image/upload/v1735367386/Pengu/qrcode_gh9vga.webp"
              alt="logo"
              width={140}
              height={140}
              className="cursor-pointer"
            />

            <div className="flex flex-col gap-2">
              <Image
                src="https://res.cloudinary.com/doy3slx9i/image/upload/v1735367387/Pengu/app_store_azw4nb.svg"
                alt="logo"
                width={140}
                height={140}
                className="cursor-pointer"
              />
              <Image
                src="https://res.cloudinary.com/doy3slx9i/image/upload/v1735367388/Pengu/google_play_hqsxpd.svg"
                alt="logo"
                width={140}
                height={140}
                className="cursor-pointer"
              />
            </div>
          </div>

          <p className="font-normal">Chúng tôi kết nối thanh toán qua</p>

          <div className="flex items-stretch justify-center gap-5">
            <Image
              src="https://res.cloudinary.com/doy3slx9i/image/upload/v1735367388/Pengu/cod_pdnyzu.svg"
              alt="logo"
              width={140}
              height={140}
              className="cursor-pointer"
            />
            <Image
              src="https://res.cloudinary.com/doy3slx9i/image/upload/v1735367387/Pengu/vnpay_ktdez5.svg"
              alt="logo"
              width={140}
              height={140}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-5 md:px-0 mx-auto max-w-[1280px] py-5 flex flex-col md:flex-row items-start md:items-center justify-between border-t-2 border-black border-dashed">
        {/* Thông tin công ty */}
        <div className="flex flex-col items-start gap-3 mb-5 md:mb-0 md:pr-5">
          <h2 className="text-lg font-semibold text-text">
            Công ty cổ phần STAAAR
          </h2>
          <p className="text-sm font-normal text-text mt-4">
            <span className="underline">Địa chỉ</span>: Tầng 6, số 96 Thái Hà,
            Phường Trung Liệt, Quận Đống Đa, Thành phố Hà Nội, Việt Nam.
          </p>
          <p className="text-sm font-normal text-text">
            <span className="underline">Mã số thuế</span>: 0109749326, ngày cấp
            ĐKKD 29/04/2021.{" "}
            <span className="underline inline-block ml-4">Nơi cấp</span>: Sở kế
            hoạch và đầu tư thành phố Hà Nội.
          </p>
          <p className="text-sm font-normal text-text">
            <span className="underline">Điện thoại</span>: 024.7300.6999.
            <span className="underline inline-block ml-4">Email</span>:
            cskh@pengu.vn
          </p>
        </div>

        {/* Logo */}
        <Image
          src="https://res.cloudinary.com/doy3slx9i/image/upload/v1735367388/Pengu/bocongthuong_afmw03.webp"
          alt="Bộ Công Thương Logo"
          width={160}
          height={160}
          className="cursor-pointer"
        />
      </div>

      <div className="w-full bg-black flex items-center justify-center py-3">
        <div className="flex items-center justify-center w-full flex-wrap gap-[20px] ">
          <Image
            src="https://res.cloudinary.com/doy3slx9i/image/upload/v1735367386/Pengu/logo_vk3mee.svg"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer"
            style={{ filter: "brightness(0) invert(1)" }}
          />

          <p className="text-[0.9rem] font-normal text-gray-300">
            Copyright © 2014-2024 pengu.vn All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
