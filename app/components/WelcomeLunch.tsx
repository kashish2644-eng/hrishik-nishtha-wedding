import Image from "next/image";

export default function WelcomeLunch() {
  return (
    <div className="flex justify-center py-4 welcome-reveal">
      <Image
        src="/images/welcomelunch.png"
        alt="Welcome Lunch"
        width={1080}
        height={1920}
        className="w-full max-w-[700px] h-auto"
      />
    </div>
  );
}
