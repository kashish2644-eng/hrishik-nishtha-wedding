"use client";

import { useState } from "react";
import Image from "next/image";

type OpeningScreenProps = {
  onOpen: () => void;
};

export default function OpeningScreen({
  onOpen,
}: OpeningScreenProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">

      {/* LEFT CURTAIN */}
      <div
        className={`absolute left-0 top-0 h-full w-1/2 overflow-hidden
        transition-transform duration-[4000ms] ease-in-out
        ${opening ? "-translate-x-full" : "translate-x-0"}`}
      >
        <Image
          src="/images/Curtain.png"
          alt="Curtain"
          fill
          priority
          className="object-cover object-left brightness-85"
        />
      </div>

      {/* RIGHT CURTAIN */}
      <div
        className={`absolute right-0 top-0 h-full w-1/2 overflow-hidden
        transition-transform duration-[4000ms] ease-in-out
        ${opening ? "translate-x-full" : "translate-x-0"}`}
      >
        <Image
          src="/images/Curtain.png"
          alt="Curtain"
          fill
          priority
          className="object-cover object-right brightness-85"
        />
      </div>

      {/* CENTER SHADOW */}
      <div className="absolute left-1/2 top-0 h-full w-6 -translate-x-1/2 bg-black/20 blur-md" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center pt-16">
        <div
          className={`text-center transition-opacity duration-700 ${
            opening ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
              src="/images/logo.png"
              alt="HN Logo"
              width={300}
              height={300}
              className="mx-auto"
              priority
            />

          <p className="text-[#4F463E] italic text-xl mb-6 -mt-16">
            A Celebration Awaits
          </p>

          <button
            onClick={handleOpen}
            className="bg-[#B79B5B] text-white px-10 py-4 rounded-full text-lg hover:opacity-90 transition"
          >
            Tap To Begin
          </button>
        </div>
      </div>
    </div>
  );
}