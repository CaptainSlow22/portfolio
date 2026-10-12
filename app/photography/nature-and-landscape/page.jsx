'use client';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const images = [
  '/images/nature-and-landscape/IMG_0533.jpg',
  '/images/nature-and-landscape/IMG_0545.jpg',
  '/images/nature-and-landscape/IMG_0857.jpg',
  '/images/nature-and-landscape/IMG_1490.jpg',
  '/images/nature-and-landscape/IMG_5069.JPG',
  '/images/nature-and-landscape/IMG_5072.JPG',
  '/images/nature-and-landscape/IMG_5074.JPG',
  '/images/nature-and-landscape/IMG_8686.JPG'
];

export default function NatureAndLandscapePage() {
  return (
    <main className={`${ibmPlexSerif.className} min-h-svh bg-emerald-800 px-5 py-16 sm:px-8 md:px-12 lg:px-16`}>
      <section className="mx-auto w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-white sm:text-6xl">
          Nature and Landscape
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
                    alt={`Nature and Landscapes ${index + 1}`}
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