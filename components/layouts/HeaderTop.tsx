"use client";

import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";
import Link from "next/link";

const HeaderTop = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Autoplay],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
      },
      loop: true,
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      },
    });
    return () => swiper.destroy();
  }, []);
  return (
    <div className="header-bg w-full h-[40px] flex items-center justify-center">
      <div className="w-full max-w-[1280px]">
        <div className="swiper">
          <div className="swiper-wrapper text-center">
            <div className="swiper-slide">
              <Link
                href={"/"}
                className="flex items-center justify-center gap-2"
              >
                <span className="text-xs md:text-md text-white uppercase font-semibold">
                  Vũ trụ sale lớn nhất trong năm
                </span>
                <span className="font-normal text-white">
                  {"<< Xem ngay >>"}
                </span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                href={"/"}
                className="flex items-center justify-center gap-2"
              >
                <span className="text-xs md:text-md text-white uppercase font-semibold">
                  Cơ hội cuối rinh giày thể thao chỉ 499K
                </span>
                <span className="font-normal text-white">
                  {"<< Xem ngay >>"}
                </span>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link
                href={"/"}
                className="flex items-center justify-center gap-2"
              >
                <span className="text-xs md:text-md text-white uppercase font-semibold">
                  Đừng bỏ lỡ ưu đãi giảm 30% độc quyền
                </span>
                <span className="font-normal text-white">
                  {"<< Xem ngay >>"}
                </span>
              </Link>
            </div>
          </div>
          <div className="swiper-button-prev bg-white" />
          <div className="swiper-button-next bg-white" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
