import { ArrowDownUpIcon, EyeIcon, HeartIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { formatPrice } from "@/helpers/helpers";

type BoxProductProps = {
  image: string;
  name: string;
  price: number;
  sale_price: number;
  slug: string;
  frame_image?: string;
  discount?: number;
  quantity?: number;
  sold?: number;
  is_new?: boolean;
};

const BoxProduct = ({
  image,
  name,
  price,
  sale_price,
  frame_image,
  discount,
  quantity,
  sold,
  slug,
  is_new,
}: BoxProductProps) => {
  const [wishlistVisible, setWishlistVisible] = useState(false);
  const [compareVisible, setCompareVisible] = useState(false);
  const [quickViewVisible, setQuickViewVisible] = useState(false);

  const [rating, setRating] = useState(5);

  return (
    <div className="border border-gray-300 w-full h-full relative rounded-md overflow-hidden bg-white">
      <div className="group relative overflow-hidden cursor-pointer">
        {frame_image && (
          <Image
            alt={name}
            src={frame_image}
            className="absolute z-10 bottom-0 left-0"
            width={80}
            height={80}
          />
        )}

        {discount && (
          <div className="absolute right-0 top-0 h-16 w-16 z-10">
            <div className="absolute transform rotate-45 bg-red-600 text-center text-white font-semibold py-1 right-[-37px] top-[32px] w-[170px]">
              {discount} % off
            </div>
          </div>
        )}
        <Image
          alt={name}
          src={image}
          width={300}
          height={300}
          className="relative z-1"
          unoptimized
        />
        <div className="absolute bg-[rgb(0,0,0,0.3)] z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bottom-0 left-0 flex items-center justify-center w-full h-full">
          <div className="flex items-center gap-[15px] justify-center">
            <div
              onMouseOver={() => setWishlistVisible(true)}
              onMouseOut={() => setWishlistVisible(false)}
              className="relative w-max group-hover:translate-y-0 translate-y-[50px] transition-all opacity-0 group-hover:opacity-100 duration-300"
            >
              <p className="rounded-full bg-white p-2 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer">
                <HeartIcon className="text-[1.3rem]" />
              </p>

              <p
                className={`${
                  wishlistVisible
                    ? "opacity-100 z-[100] translate-y-0"
                    : "opacity-0 z-[-1] translate-y-[20px]"
                } absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}
              >
                Yêu thích
                <span className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
              </p>
            </div>

            <div
              onMouseOver={() => setCompareVisible(true)}
              onMouseOut={() => setCompareVisible(false)}
              className="relative w-max group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-[80px]"
            >
              <p className="rounded-full bg-white p-2 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer">
                <ArrowDownUpIcon className="text-[1.3rem]" />
              </p>

              <p
                className={`${
                  compareVisible
                    ? "opacity-100 z-[100] translate-y-0"
                    : "opacity-0 z-[-1] translate-y-[20px]"
                } absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}
              >
                So sánh
                <span className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
              </p>
            </div>

            <Link
              href={`/san-pham/${slug}`}
              onMouseOver={() => setQuickViewVisible(true)}
              onMouseOut={() => setQuickViewVisible(false)}
              className="relative w-max group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100 translate-y-[110px]"
            >
              <p className="rounded-full bg-white p-2 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer">
                <EyeIcon className="text-[1.3rem]" />
              </p>

              <p
                className={`${
                  quickViewVisible
                    ? "opacity-100 z-[100] translate-y-0"
                    : "opacity-0 z-[-1] translate-y-[20px]"
                } absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}
              >
                Xem
                <span className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 pt-6 bg-white">
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => {
              const starRating = index + 1;
              return (
                <StarIcon
                  key={starRating}
                  className={`cursor-pointer ${
                    starRating <= rating ? "text-[#FA8232]" : "text-gray-300"
                  }`}
                  size={15}
                  onClick={() => setRating(starRating)}
                />
              );
            })}
          </div>
          <span className="text-[0.8rem] text-gray-500">(738)</span>
        </div>
        <h3 className="text-[1.1rem] text-gray-900 font-medium mb-2 mt-2">
          <Link href={`/san-pham/${slug}`}>{name}</Link>
        </h3>
        <p className="text-[1.150rem] font-medium text-red-500 mt-1">
          {sale_price ? (
            <>
              <span className="text-[0.9rem] line-through text-gray-500 mr-2">
                {formatPrice(price)}
              </span>
              {formatPrice(sale_price)}
            </>
          ) : (
            <> {formatPrice(price)}</>
          )}
        </p>

        <span className="inline-block absolute top-0 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700">
          Đã bán: {sold ?? 0}
        </span>
      </div>

      {is_new && (
        <div className="absolute top-0 left-0 bg-red-500 text-white font-semibold py-1 px-2 rounded-bl-md rounded-tr-md">
          Mới
        </div>
      )}
    </div>
  );
};

export default BoxProduct;
