'use client';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const images = [
  'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
];

export default function BlackAndWhitePage() {
  return (
    <main className={`${ibmPlexSerif.className} min-h-svh bg-emerald-800 px-5 py-16 sm:px-8 md:px-12 lg:px-16`}>
      <section className="mx-auto w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-white sm:text-6xl">
          Black and White
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
          Photography projects in the Black and White category.
        </p>

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