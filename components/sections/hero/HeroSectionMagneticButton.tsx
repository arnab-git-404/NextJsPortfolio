"use client";

import Magnet from "../../Magnet";
import { Button } from "../../ui/button";

export default function HeroSectionMagneticButton() {
  return (
    <Magnet padding={300} disabled={false} magnetStrength={4}>
      <Button
        size="lg"
        variant="outline"
        asChild
        className="border-primary/50 hover:bg-primary/10 transition-smooth hover:scale-110 hover:cursor-pointer"
      >
        <a href="/arnabMukherjee.pdf" target="_blank" rel="noopener noreferrer">
          My Resume
        </a>
      </Button>
    </Magnet>
  );
}
