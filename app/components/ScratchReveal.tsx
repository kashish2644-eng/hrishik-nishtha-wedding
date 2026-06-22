"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Confetti from "react-confetti";


export default function ScratchReveal() {
  const [revealed, setRevealed] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const weddingDate = new Date("2026-12-04T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (revealed) {
      setShowConfetti(true);

      setTimeout(() => {
        setShowCountdown(true);
      }, 500);

      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  }, [revealed]);

  useEffect(() => {
    if (!showCountdown) return;

    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showCountdown]);

  return (
    <div className="flex justify-center py-4">

      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={700}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      )}

      <div className="relative w-[95vw] max-w-[700px] mx-auto">

        {/* Background */}
        <Image
          src="/images/scratch-layout.png"
          alt="Countdown Layout"
          width={700}
          height={1244}
          className="w-full h-auto"
        />

       {/* Reveal Pill */}
<div
  onClick={() => setRevealed(true)}
  className="absolute cursor-pointer flex items-center justify-center"
  style={{
    left: "50%",
    top: "43%",
    width: "86%",
    height: "12%",
    transform: "translate(-50%, -50%)",
  }}
>
  {!revealed && (
    <h2 className="w-full text-center text-2xl md:text-4xl italic font-serif animate-pulse text-[#2B2B2B]">
      Tap To Reveal
    </h2>
  )}
</div>

{revealed && (
  <div
    className="absolute flex items-center justify-center z-50"
    style={{
      left: "50%",
      top: "43%",
      width: "86%",
      height: "12%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <h2 className="text-3xl md:text-5xl font-serif text-[#A8842E] animate-fadeIn">
      04 December,2026
    </h2>
  </div>
)}
        {/* Countdown */}
        {showCountdown && (
          <div
            className="absolute w-full animate-fadeIn"
            style={{
              top: "60%",
            }}
          >
            <div className="grid grid-cols-4 text-center px-6 md:px-12">

              <div>
                <h3 className="text-2xl md:text-6xl font-bold text-[#A8842E]">
                  {timeLeft.days}
                </h3>
                <p className="text-black text-sm md:text-3xl font-medium"> Days</p>
                </div>

              <div>
                <h3 className="text-2xl md:text-6xl font-bold text-[#A8842E]">
                  {timeLeft.hours}
                </h3>
                <p className="text-black text-sm md:text-3xl font-medium">Hours</p>
              </div>

              <div>
                <h3 className="text-2xl md:text-6xl font-bold text-[#A8842E]">
                  {timeLeft.minutes}
                </h3>
                <p className="text-black text-sm md:text-3xl font-medium">Minutes</p>
              </div>

              <div>
                <h3 className="text-2xl md:text-6xl font-bold text-[#A8842E]">
                  {timeLeft.seconds}
                </h3>
                 <p className="text-black text-sm md:text-3xl font-medium">Seconds</p>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
