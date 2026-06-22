"use client";

import { useState } from "react";
import Image from "next/image";
import OpeningScreen from "./components/OpeningScreen";
import ScratchReveal from "./components/ScratchReveal";
import SangeetPrototype from "./components/SangeetPrototype";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="bg-[#F7F3EE] min-h-screen">
      {!opened && (
        <OpeningScreen onOpen={() => setOpened(true)} />
      )}

      {opened && (
  <>
    <div className="flex justify-center py-10 invitation-reveal">
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
    <SangeetPrototype />
  </>
      )}
    </main>
  );
}
