"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-0 sm:p-2 md:p-4 lg:p-6">
              <Card>
                <CardContent className="relative flex items-center justify-center p-2 aspect-square">
                  <Image
                    src={`/images/carousel${index + 1}.jpg`}
                    alt={`Imagen ${index + 1}`}
                    width={300} 
                    height={300}
                    className="object-contain"
                  />
                                   <CarouselPrevious className="absolute flex items-center justify-center w-12 h-12 text-white transition-all duration-300 -translate-y-1/2 bg-transparent rounded-md shadow-lg left-4 top-1/2 hover:bg-gray-500/50" />
                                   <CarouselNext className="absolute flex items-center justify-center w-12 h-12 text-white transition-all duration-300 -translate-y-1/2 bg-transparent rounded-md shadow-lg right-4 top-1/2 hover:bg-gray-500/50" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}