"use client";

import BoxProduct from "@/components/layouts/BoxProduct";
import Error from "@/components/layouts/Error";
import Timer from "@/components/layouts/Timer";
import { Skeleton } from "@/components/ui/skeleton";
import { getFlashSale } from "@/services/FlashSaleServices";
import { FlashSale } from "@/types/FlashSale";
import { useQuery } from "@tanstack/react-query";

const HomeFlashSale = () => {
  const {
    data: flashSales,
    isError,
    isLoading,
  } = useQuery<FlashSale[]>({
    queryKey: ["flashSales"],
    queryFn: getFlashSale,
  });

  if (isError) {
    <Error />;
  }

  return (
    <>
      {isLoading && (
        <>
          <div className="w-full">
            <div className="flex items-center justify-center gap-4 mb-5">
              <Skeleton className="h-[100px] w-full bg-red-200" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="flex flex-col space-y-3" key={index}>
                <Skeleton className="h-[325px] w-full rounded-xl bg-red-200" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px] bg-red-200" />
                  <Skeleton className="h-4 w-[200px] bg-red-200" />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {Array.isArray(flashSales) &&
        flashSales.map((flashSale) => (
          <div key={flashSale.id}>
            <h1 className="text-balance text-center mb-5 text-2xl font-semibold tracking-tight text-red-700 sm:text-md">
              {flashSale.title}
            </h1>
            <div className="mb-5">
              <Timer endDateTime={flashSale.end_date} />
            </div>
            {flashSale.end_date < new Date().toISOString() ? (
              <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                  Đã hết thời gian !
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>
                    Khuyến mãi đã kết thúc. Vui lòng quay lại sau để xem các
                    chương trình khuyến mãi khác.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-5 items-stretch gap-4 px-10 md:px-0">
                {flashSale.items.map((item) => (
                  <div key={item.id}>
                    {item.product.map((product) => (
                      <BoxProduct
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        sale_price={product.sale_price}
                        slug={product.slug}
                        frame_image={item.image ? item.image : undefined}
                        discount={item.discount ? item.discount : undefined}
                        sold={item.sold ? item.sold : undefined}
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </>
  );
};

export default HomeFlashSale;
