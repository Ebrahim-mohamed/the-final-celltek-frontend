"use client";

import { useRef } from "react";

const videos = [
  {
    src: "https://res.cloudinary.com/dnevlp0j4/video/upload/v1792501029/3D_Renders_V3_ng0jwx.mp4",
    
    type: "landscape",
  },
  // {
  //   src: "https://res.cloudinary.com/dnevlp0j4/video/upload/v1792501213/KitchenTake1_obfxmz.mp4",
  //
  //   type: "reel",
  // },
  {
    src: "https://res.cloudinary.com/dnevlp0j4/video/upload/v1792588226/escalator_final2_Reel_kwn9gd.mp4",
    
    type: "reel",
  },
  {
    src: "https://res.cloudinary.com/dnevlp0j4/video/upload/v1792588803/Final_Reel_Admin_Floor_spgc1i.mp4",
    
    type: "reel",
  },
  {
    src: "https://res.cloudinary.com/dnevlp0j4/video/upload/v1792590004/WhatsApp_Video_2026-10-21_at_16.38.32_plmfgq.mp4",
    
    type: "reel",
  },
  {
    src: "https://res.cloudinary.com/dnevlp0j4/video/upload/v1792590448/WhatsApp_Video_2026-10-21_at_16.41.194545_hc0gde.mp4",
    
    type: "reel",
  },
  {
    src: "https://res.cloudinary.com/dnevlp0j4/video/upload/v1792590558/WhatsApp_Video_2026-10-21_at_16.44.13_gp15bx.mp4",
    
    type: "reel",
  },
  {
    src: "https://res.cloudinary.com/dnevlp0j4/video/upload/v1792501380/Celltek_3d_Renders_V1_wd3jw9.mp4",
    
    type: "landscape",
  },
] as const;

function VideoSlider({
  items,
  type,
}: {
  items: typeof videos[number][];
  type: "reel" | "landscape";
}) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left:
        direction === "right"
          ? sliderRef.current.clientWidth * 0.85
          : -sliderRef.current.clientWidth * 0.85,
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
        {items.map((video) => (
          <div
            key={video.src}
            className={
              type === "reel"
                ? "w-[220px] shrink-0 snap-start sm:w-[240px]"
                : "w-[85%] shrink-0 snap-start sm:w-[70%] lg:w-[calc(50%-10px)]"
            }
          >
            <div
              className={`overflow-hidden rounded-2xl ${
                type === "reel"
                  ? "h-[320px] sm:h-[380px] lg:h-[420px]"
                  : "h-[240px] sm:h-[320px] lg:h-[420px]"
              }`}
            >
              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
                
                className="h-full w-full object-contain"
              >
                Your browser does not support HTML video.
              </video>
            </div>

            
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VideoGallery() {
  const reels = videos.filter((video) => video.type === "reel");
  const landscapeVideos = videos.filter(
    (video) => video.type === "landscape"
  );

  return (
    <div className="space-y-12">
      <section>
        <div className="mb-5">
          <h3 className="text-2xl font-semibold">Reels</h3>
          <p className="mt-2 text-sm opacity-70">
            Vertical videos for social media and campaigns.
          </p>
        </div>

        <VideoSlider items={[...reels]} type="reel" />
      </section>

      <section>
        <div className="mb-5">
          <h3 className="text-2xl font-semibold">Landscape Videos</h3>
          <p className="mt-2 text-sm opacity-70">
            3D renders and cinematic project videos.
          </p>
        </div>

        <VideoSlider items={[...landscapeVideos]} type="landscape" />
      </section>
    </div>
  );
}