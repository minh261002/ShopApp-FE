"use client";

import { useQuery } from "@tanstack/react-query";
import { getHomeDiscount } from "@/services/DiscountService";
import type { Discount } from "@/types/Discount";
import { Skeleton } from "@/components/ui/skeleton";
import Error from "@/components/layouts/Error";
import { useState } from "react";

const HomeDiscount = () => {
  const [copyDiscount, setCopyDiscount] = useState<string | null>(null);

  const {
    data: discounts = [],
    isLoading,
    isError,
  } = useQuery<Discount[]>({
    queryKey: ["discounts"],
    queryFn: getHomeDiscount,
  });

  if (isError) {
    return <Error />;
  }

  const handleCopyDiscount = (discount: Discount) => () => {
    navigator.clipboard.writeText(discount.code);
    setCopyDiscount(discount.code);
    setTimeout(() => {
      setCopyDiscount(null);
    }, 3000);
  };

  return (
    <div>
      <h1 className="text-balance text-center mb-5 text-2xl font-semibold tracking-tight text-red-700 sm:text-md">
        MÃ GIẢM GIÁ HOT
      </h1>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-red-50 w-full rounded-xl flex">
              <div className="flex flex-col p-4 gap-3 w-full">
                <Skeleton className="w-1/2 h-6 bg-red-200" />
                <Skeleton className="w-3/4 h-4 bg-red-200" />
                <Skeleton className="w-1/4 h-4 bg-red-200" />
              </div>
              <div className="flex items-center justify-center w-[40%] border-l-[2px] border-dashed border-gray-200 p-4">
                <Skeleton className="w-1/2 h-8" />
              </div>
            </div>
          ))}
        </div>
      ) : discounts && discounts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {discounts.map((discount) => (
            <div
              key={discount.code}
              className="bg-red-50 w-full rounded-xl flex"
            >
              <div className="flex flex-col p-4 gap-3 w-full">
                <h1 className="text-lg font-bold text-red-800">
                  {discount.code}
                </h1>
                <p className="text-sm text-gray-500">{discount.description}</p>
                <p className="text-sm text-gray-500">
                  Hết hạn: {discount.date_end}
                </p>
              </div>
              <div className="flex flex-col justify-center relative w-[45%] lg:w-[40%] items-center border-l-[2px] p-[15px] lg:p-[20px]  border-dashed border-gray-200">
                <div className="w-[45px] h-[45px] rounded-full bg-white absolute top-[-15%] lg:top-[-13%] sm:left-[-13.5%] left-[-19%] lg:left-[-11.5%]"></div>

                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 transition-colors duration-300"
                  onClick={handleCopyDiscount(discount)}
                >
                  {copyDiscount === discount.code ? "Copied" : "Copy"}
                </button>
                <div className="w-[45px] h-[45px] rounded-full bg-white absolute bottom-[-15%] lg:bottom-[-13%] left-[-18.5%] sm:left-[-13.5%] lg:left-[-11.5%]"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          No discount available
        </div>
      )}
    </div>
  );
};

export default HomeDiscount;
