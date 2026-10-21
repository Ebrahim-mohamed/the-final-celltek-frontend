"use client";

import { useRef } from "react";

const videos = [
  {
    src: "https://res.cloudinary.com/dnevlp0j4/video/upload/v1792501029/3D_Renders_V3_ng0jwx.mp4",
    title: "3D Renders",
  },
  {
    src: "https://res.cloudinary.com/dnevlp0j4/video/upload/v1792501213/KitchenTake1_obfxmz.mp4",
    title: "Kitchen Rendering",
  },
  {
    src: "https://res.cloudinary.com/dnevlp0j4/video/upload/v1792501380/Celltek_3d_Renders_V1_wd3jw9.mp4",
    title: "Celltek 3D Renders",
  },
];

export default function VideoGallery() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.85;

    sliderRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous videos"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-current/20 transition hover:bg-black/5"
        >
          <span aria-hidden="true" className="text-xl">
            ←
          </span>
        </button>

        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next videos"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-current/20 transition hover:bg-black/5"
        >
          <span aria-hidden="true" className="text-xl">
            →
          </span>
        </button>
      </div>

      <div
        ref={sliderRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollbarWidth: "thin" }}
      >
        {videos.map((video) => (
          <div
            key={video.src}
            className="w-[85%] shrink-0 snap-start sm:w-[70%] lg:w-[calc(50%-10px)]"
          >
            <div className="overflow-hidden rounded-2xl bg-black">
              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
                aria-label={video.title}
                className="aspect-video w-full object-contain"
              >
                Your browser does not support HTML video.
              </video>
            </div>

            <h3 className="mt-3 text-base font-medium">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}