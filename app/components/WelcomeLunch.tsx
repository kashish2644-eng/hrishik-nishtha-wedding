import Image from "next/image";

export default function WelcomeLunch() {
  return (
    <div className="flex justify-center py-4 welcome-reveal">
      <div className="relative w-full max-w-[700px]">

        <Image
          src="/images/welcomelunch.png"
          alt="Welcome Lunch"
          width={1080}
          height={1920}
          className="w-full h-auto"
        />

        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>

      </div>
    </div>
  );
}
