"use client";
import * as React from "react";
import "react-photo-view/dist/react-photo-view.css";
import Link from "next/link";

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

const photographyCategories = [
  {
    name: "Street Photography",
    href: "/photography/street-photography",
    url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Behind the Scenes",
    href: "/photography/behind-the-scenes",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Black and White",
    href: "/photography/black-and-white",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Nature and Landscapes",
    href: "/photography/nature-and-landscapes",
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-emerald-800">
      {/* Hero */}
      <section className="mx-auto flex min-h-svh w-full max-w-7xl flex-col items-center justify-center gap-10 px-5 py-16 sm:px-8 md:px-12 lg:flex-row lg:justify-between lg:px-16">
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h1 className="text-balance text-[clamp(2.5rem,11vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-white">
            Ariadna-Maria
          </h1>
          <h1 className="text-balance text-[clamp(2.5rem,11vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-white">
            Drăgoi
          </h1>

          <span className="mt-4 block text-2xl text-white sm:text-3xl">
            Video Editor
          </span>

          <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z" />
              <path d="M8 11h8v2H8zm0 4h8v2H8zm0-8h3v2H8z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-500"
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
          <h2 className="mb-4 text-4xl font-bold sm:text-3xl text-white">
            About me
          </h2>

          <p className="text-base leading-relaxed text-white sm:text-md">
            I'm a video editor and creative technologist who loves crafting
            visual stories. I work across editing, motion design, and
            interactive experiences, blending technical skill with a strong
            sense of storytelling. I enjoy collaborating on projects that
            challenge the form and bring ideas to life through engaging visuals.
          </p>
        </div>
      </section>

      {/* Work */}
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 md:px-12 lg:px-16">
        <h2 className="mb-8 text-4xl font-bold text-white sm:text-3xl">
          My work
        </h2>

        <h3 className="mb-6 text-xl font-bold text-white sm:text-xl">
          Video Projects
        </h3>

        <div className="clean-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-webkit-overflow-scrolling:touch] sm:gap-6">
          {videos.map((video, index) => (
            <article
              key={index}
              className="w-[85vw] shrink-0 snap-start sm:w-[420px] md:w-[480px] lg:w-[520px]"
            >
              <div
                className="aspect-video w-full overflow-hidden rounded-lg bg-black"
                style={{ transform: "translateZ(0)" }}
              >
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  loading="lazy"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <p className="mt-3 text-sm font-light leading-relaxed text-white">
                {video.title}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-xl font-bold text-white sm:text-xl">
            Photography Projects
          </h3>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {photographyCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative flex aspect-[4/3] min-h-[120px] items-center justify-center overflow-hidden rounded-2xl px-4 text-center text-base text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] sm:min-h-[150px] sm:text-xl"
              >
                <div
                  className="absolute inset-0 scale-110 bg-cover bg-center blur-sm transition-transform duration-300 group-hover:scale-125"
                  style={{
                    backgroundImage: `url(${category.url})`,
                  }}
                />

                <div className="absolute inset-0" />

                <span className="relative z-10">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
