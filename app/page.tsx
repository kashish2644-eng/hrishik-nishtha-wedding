"use client";

import { useState } from "react";
import Image from "next/image";
import OpeningScreen from "./components/OpeningScreen";
import ScratchReveal from "./components/ScratchReveal";
import WelcomeLunch from "./components/WelcomeLunch";
import Myra from "./components/Myra";
import Sangeet from "./components/Sangeet";
import Carnival from "./components/Carnival";
import Barat from "./components/Barat";
import Varmala from "./components/Varmala";
import Phera from "./components/Phera";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="bg-[#F7F3EE] min-h-screen">
      {!opened && (
        <OpeningScreen onOpen={() => setOpened(true)} />
      )}

      {opened && (
  <>
    <div className="flex justify-center py-4 invitation-reveal">
      <Image
        src="/images/invitation.png"
        alt="Invitation"
        width={700}
        height={1200}
        priority
        className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
      />
    </div>

    <ScratchReveal />
    <WelcomeLunch />
    <Myra />
    <Sangeet />
    <Carnival />
    <Barat />
    <Varmala />
    <Phera />
  </>
      )}
    </main>
  );
}
