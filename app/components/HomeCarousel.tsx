"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { getSliders } from "@/services/SliderServices";
import type { SliderItem } from "@/types/Slider";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Error from "@/components/layouts/Error";

const HomeCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const {
    data: sliders,
    isLoading,
    isError,
  } = useQuery<SliderItem[]>({
    queryKey: ["sliders"],
    queryFn: () => getSliders("home_slider"),
  });

  if (isError) {
    return <Error />;
  }

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[600px] flex items-center justify-center bg-red-200">
          <Skeleton className="w-full h-[600px] bg-red-200" />
        </div>
      ) : (
        <div className="w-full max-w-[1280px] px-10 md:px-0 relative">
          <Carousel
            ref={emblaRef}
            plugins={[Autoplay({ delay: 5000 })]}
            className="embla__carousel"
          >
            <CarouselContent className="w-full">
              {sliders && sliders.length > 0 ? (
                sliders.map((item) => (
                  <CarouselItem key={item.id} className="w-full">
                    <Link
                      href={item.link || "/"}
                      className="flex items-center justify-center gap-2"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[300px] md:h-[600px] object-cover rounded-md"
                        width={1280}
                        height={600}
                        unoptimized
                      />
                    </Link>
                  </CarouselItem>
                ))
              ) : (
                <div className="w-full flex items-center justify-center">
                  No slider available
                </div>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </>
  );
};

export default HomeCarousel;
