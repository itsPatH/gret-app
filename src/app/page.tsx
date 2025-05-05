import React, { Suspense } from 'react';
import { CarouselPlugin } from '../components/Carousel/Carousel';

export default function Home() {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-indigo-50" />
      <div className="container relative px-4 py-12 mx-auto">
        <div className="flex items-center justify-center">
          <Suspense fallback={
            <div className="flex items-center justify-center w-full h-[70vh]">
              <div className="w-12 h-12 border-t-2 border-b-2 border-indigo-500 rounded-full animate-spin"></div>
            </div>
          }>
            <CarouselPlugin />
          </Suspense>
        </div>
      </div>
    </div>
  );
}