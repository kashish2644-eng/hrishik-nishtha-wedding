import Image from "next/image";

export default function Venue() {
  return (
    <div className="flex justify-center py-4">
      <div className="relative w-full max-w-[700px]">

        {/* Venue Card */}
        <Image
          src="/images/venue.png"
          alt="Venue"
          width={1080}
          height={1920}
          className="w-full h-auto"
        />

        {/* Clickable Map Area */}
        <a
          href="https://maps.app.goo.gl/WKYXkSHDdsk8wHXJ7"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute"
          style={{
            left: "5%",
            top: "36%",
            width: "90%",
            height: "36%",
            zIndex: 10,
          }}
          aria-label="Open Krishna Resort in Google Maps"
        />

        {/* Clickable Green Button */}
        <a
          href="https://maps.app.goo.gl/WKYXkSHDdsk8wHXJ7"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute"
          style={{
            left: "28%",
            top: "78%",
            width: "44%",
            height: "6%",
            zIndex: 20,
          }}
          aria-label="Open Krishna Resort in Google Maps"
        />

      </div>
    </div>
  );
}
