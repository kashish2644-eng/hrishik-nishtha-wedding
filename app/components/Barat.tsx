import Image from "next/image";

export default function Myra() {
  return (
    <div className="flex justify-center py-4">
      <Image
        src="/images/barat.png"
        alt="Myra"
        width={1080}
        height={1920}
        className="w-full max-w-[700px] h-auto"
      />
    </div>
  );
}
