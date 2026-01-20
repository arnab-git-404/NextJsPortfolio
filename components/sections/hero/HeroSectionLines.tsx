"use client";

import FloatingLines from "../../FloatingLines";

export default function HeroSectionLines() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={5}
        lineDistance={5}
        bendRadius={5.0}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
      />
    </div>
  );
}
