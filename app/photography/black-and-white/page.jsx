'use client';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const images = [
  '/images/black-and-white/1a8aedde-f263-421f-bdae-b545e5659790.JPG',
  '/images/black-and-white/IMG_1287.jpg',
  '/images/black-and-white/IMG_4004.jpg',
  '/images/black-and-white/IMG_4789.jpg',
  '/images/black-and-white/IMG_4869.jpg',
  '/images/black-and-white/IMG_7819.jpg',
  '/images/black-and-white/IMG_8544.JPG',
  
];

export default function BlackAndWhitePage() {
  return (
    <main className={`${ibmPlexSerif.className} min-h-svh bg-emerald-800 px-5 py-16 sm:px-8 md:px-12 lg:px-16`}>
      <section className="mx-auto w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-white sm:text-6xl">
          Black and White
        </h1>

        <PhotoProvider>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {images.map((item, index) => (
              <PhotoView key={index} src={item}>
                <button
                  type="button"
                  className="group aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white"
                >
                  <img
                    src={item}
                    alt={`Black and White ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </section>
    </main>
  );
}