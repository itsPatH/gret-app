"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/src/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/src/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-auto max-w-2xl mx-auto mt-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-2 md:p-4 lg:p-6">
              <Card>
                <CardContent className="relative flex items-center justify-center p-2 aspect-square">
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-200 to-indigo-300" />
                  <Image
                    src={`/images/carousel${index + 1}.jpg`}
                    alt={`Imagen ${index + 1}`}
                    width={300}
                    height={300}
                    className="relative z-10 object-contain w-1/2 mx-auto rounded-xl"
                    priority={index === 0}
                  />
                  <CarouselPrevious 
                    className="absolute z-20 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 -translate-y-1/2 rounded-md shadow-lg bg-black/50 left-2 top-1/2 hover:bg-black/70" 
                  />
                  <CarouselNext 
                    className="absolute z-20 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 -translate-y-1/2 rounded-md shadow-lg bg-black/50 right-2 top-1/2 hover:bg-black/70" 
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
