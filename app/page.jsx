'use client';
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const videos = [
  {
    title: "'Peck Pocketed' by Kevin Herron | Disney Favorite",
    embedUrl: "https://www.youtube.com/embed/IUN664s7N-c",
  },
  {
    title: "'Peck Pocketed' by Kevin Herron | Disney Favorite",
    embedUrl: "https://www.youtube.com/embed/ttLu7ygaN6I",
  },
  {
    title: "UE5 | In The Heart Of The Forest by Anastasia Gorban",
    embedUrl: "https://www.youtube.com/embed/C3vyugaBhSs",
  },
  {
    title: "Unreal Engine 5.0 Lighting / Misty Forest",
    embedUrl: "https://www.youtube.com/embed/A-Jdm9CKDDs",
  },
];

export default function Home() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-black text-white">
      {/* Hero */}
      <section className="mx-auto flex min-h-svh w-full max-w-7xl flex-col items-center justify-center gap-10 px-5 py-16 sm:px-8 md:px-12 lg:flex-row lg:justify-between lg:px-16">
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h1 className="text-balance text-[clamp(2.5rem,11vw,4.5rem)] font-light leading-[0.95] tracking-tight text-white">
            Ariadna Maria Dragoi
          </h1>

          <span className="mt-4 block text-2xl font-light text-gray-400 sm:text-3xl">
            Video Editor
          </span>

          <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z" />
              <path d="M8 11h8v2H8zm0 4h8v2H8zm0-8h3v2H8z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z" />
            </svg>
          </div>
        </div>

        <div className="h-[300px] w-full max-w-[520px] sm:h-[400px] lg:h-[520px] lg:w-1/2">
          <iframe
            src="https://my.spline.design/3dcircularcardscopycopy-3YbhIJp015BZDrF0UJ5Hn7Rp-BcT/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="h-full w-full"
            title="3D interactive cards"
          />
        </div>
      </section>

      {/* About */}
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <h2 className="mb-4 text-3xl font-light text-white sm:text-4xl">
            About me
          </h2>

          <p className="text-base font-light leading-relaxed text-gray-400 sm:text-lg">
            I'm a video editor and creative technologist who loves crafting visual
            stories. I work across editing, motion design, and interactive
            experiences, blending technical skill with a strong sense of
            storytelling. I enjoy collaborating on projects that challenge the
            form and bring ideas to life through engaging visuals.
          </p>
        </div>
      </section>

      {/* Work */}
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 md:px-12 lg:px-16">
        <h2 className="mb-8 text-3xl font-light text-white sm:text-4xl">
          My Work
        </h2>

        <Carousel
  className="w-full px-10 sm:px-12"
  opts={{
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    skipSnaps: false,
    dragThreshold: 12,
    loop: true,
  }}
>
  <CarouselContent className="-ml-4 will-change-transform">
    {videos.map((video, index) => (
      <CarouselItem
        key={index}
        className="basis-full pl-4 md:basis-1/2 xl:basis-1/3"
      >
        <VideoFrame video={video} />

        <p className="mt-3 text-sm font-light leading-relaxed text-gray-400">
          {video.title}
        </p>
      </CarouselItem>
    ))}
  </CarouselContent>

  <CarouselPrevious className="left-1 z-30 border-white/20 bg-black/70 text-white hover:bg-black sm:left-0 md:-left-5" />
  <CarouselNext className="right-1 z-30 border-white/20 bg-black/70 text-white hover:bg-black sm:right-0 md:-right-5" />
</Carousel>
      </section>
    </main>
  );
}

function VideoFrame({ video }) {
  const [interactive, setInteractive] = React.useState(false);
  const startRef = React.useRef({ x: 0, y: 0 });
  const movedRef = React.useRef(false);

  const handlePointerDown = (event) => {
    startRef.current = {
      x: event.clientX,
      y: event.clientY,
    };

    movedRef.current = false;
  };

  const handlePointerMove = (event) => {
    const deltaX = Math.abs(event.clientX - startRef.current.x);
    const deltaY = Math.abs(event.clientY - startRef.current.y);

    if (deltaX > 10 || deltaY > 10) {
      movedRef.current = true;
    }
  };

  const handlePointerUp = () => {
    if (!movedRef.current) {
      setInteractive(true);
    }
  };

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-lg bg-black"
      style={{ transform: "translateZ(0)" }}
    >
      <iframe
        src={video.embedUrl}
        title={video.title}
        loading="lazy"
        className={`h-full w-full ${
          interactive ? "" : "max-md:pointer-events-none"
        }`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      {!interactive && (
        <button
          type="button"
          aria-label="Tap to activate video player"
          className="absolute inset-0 z-10 hidden items-center justify-center bg-black/10 text-white max-md:flex"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <span className="rounded-full bg-black/70 px-4 py-2 text-xs font-light">
            Tap to play · swipe to browse
          </span>
        </button>
      )}

      {interactive && (
        <button
          type="button"
          className="absolute right-2 top-2 z-20 hidden rounded-full bg-black/70 px-3 py-1 text-xs font-light text-white max-md:block"
          onClick={() => setInteractive(false)}
          onPointerDownCapture={(event) => event.stopPropagation()}
        >
          Swipe
        </button>
      )}
    </div>
  );
}