"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export const HomeCarousel = () => {
  return (
    <section className="w-full h-64 md:h-72">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        // plugins={[
        //   Autoplay({
        //     delay: 2000,
        //   }),
        // ]}
      >
        <CarouselContent>
          <CarouselItem className="h-full min-h-60 flex flex-col items-center justify-center relative md:min-h-96">
            <Image
              src="/images/1.jpeg"
              width={500}
              height={300}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="bg-black/30 w-full absolute bottom-0 flex items-center justify-center h-16">
              <p className="font-lg text-orange-50">
                Check Out Our Best Range Of Collections
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="h-full min-h-60 flex flex-col items-center justify-center relative md:min-h-96">
            <Image
              src="/images/1.jpeg"
              width={500}
              height={300}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="bg-black/30 w-full absolute bottom-0 flex items-center justify-center h-16">
              <p className="font-lg text-orange-50">
                Check Out Our Best Range Of Collections
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="h-full min-h-60 flex flex-col items-center justify-center relative md:min-h-96">
            <Image
              src="/images/1.jpeg"
              width={500}
              height={300}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="bg-black/30 w-full absolute bottom-0 flex items-center justify-center h-16">
              <p className="font-lg text-orange-50">
                Check Out Our Best Range Of Collections
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-10" />
        <CarouselNext className="right-10" />
      </Carousel>
    </section>
  );
};

// <CarouselItem className="h-full min-h-60 flex items-center justify-center md:min-h-72">
