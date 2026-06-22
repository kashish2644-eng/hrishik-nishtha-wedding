"use client";

import Image from "next/image";

export default function SangeetPrototype() {
  return (
    <div className="relative flex justify-center py-20 overflow-hidden">

      {/* Background */}
      <div className="relative w-[95vw] max-w-[700px]">

        <Image
          src="/images/sangeet-background.png"
          alt="Sangeet"
          width={700}
          height={1244}
          className="w-full h-auto"
        />

        {/* Couple */}
        <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 animate-sway">

          <Image
            src="/images/sangeet-couple.png"
            alt="Couple"
            width={520}
            height={520}
            className="drop-shadow-2xl"
          />

        </div>

      </div>

    </div>
  );
}
