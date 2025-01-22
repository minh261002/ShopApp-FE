"use client";

import type { HomeCategory } from "@/types/Category";
import { useQuery } from "@tanstack/react-query";
import { getCategoryInHome } from "@/services/CategoryService";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Error from "@/components/layouts/Error";
const HomeCategory = () => {
  const {
    data: homeCategory = [],
    isLoading,
    isError,
  } = useQuery<HomeCategory[]>({
    queryKey: ["homeCategory"],
    queryFn: getCategoryInHome,
  });

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <h1 className="text-balance text-center mb-5 text-2xl font-bold tracking-tight text-red-700 sm:text-md">
        HÔM NAY MUA GÌ
      </h1>
      {isLoading ? (
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <Skeleton className="w-32 h-32 rounded-full bg-red-200" />
              <Skeleton className="mt-2 w-32 h-6 bg-red-200" />
            </div>
          ))}
        </div>
      ) : homeCategory && homeCategory.length > 0 ? (
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {homeCategory.map((category) => (
            <Link
              key={category.id}
              href={`/danh-muc/${category.slug}`}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div className=" rounded-full w-32 h-32 flex items-center justify-center overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="object-cover"
                    width={128}
                    height={128}
                  />
                </div>
              </div>
              <div className="mt-2 text-base font-medium">{category.name}</div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          No category available
        </div>
      )}
    </>
  );
};

export default HomeCategory;
