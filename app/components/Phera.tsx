import Image from "next/image";

export default function Phera() {
  return (
    <div className="flex justify-center py-4">
      <Image
        src="/images/phera.png"
        alt="Phera"
        width={1080}
        height={1920}
        className="w-full max-w-[700px] h-auto"
      />
    </div>
  );
}
