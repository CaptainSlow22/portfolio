"use client";
import * as React from "react";
import "react-photo-view/dist/react-photo-view.css";
import Link from "next/link";
import { IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
    <main
      className={`${ibmPlexSerif.className} min-h-svh overflow-x-hidden bg-emerald-800`}
    >
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
            <button
              type="button"
              onClick={openEmail}
              aria-label="Send email"
              className="inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-500 transition-transform duration-200 hover:scale-110"
                fill="currentColor"
                viewBox="0 0 50 50"
              >
                <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z" />
              </svg>
            </button>

            <a
              href="https://www.instagram.com/barcelona_in_blue/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Instagram profile"
              className="inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-500 transition-transform duration-200 hover:scale-110"
                fill="currentColor"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
              </svg>
            </a>
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
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
            About me
          </h2>

          <p className="text-lg leading-relaxed text-white sm:text-md">
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
        <h2 className="mb-8 text-3xl font-bold text-white sm:text-5xl">
          My work
        </h2>

        <h3 className="mb-6 text-xl font-bold text-white sm:text-3xl">
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
          <h3 className="mb-6 text-xl font-bold text-white sm:text-3xl">
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

function openEmail() {
  const email = "ariadna.dragoi10@gmail.com";
  const subject = "Project Inquiry";

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  } else {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }
}
