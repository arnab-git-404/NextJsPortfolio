import HeroSectionLines from "./hero/HeroSectionLines";
import ScrollIndicator from "./hero/scrollIndicator";
import MainContent from "./hero/mainContent";

export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroSectionLines />

      <MainContent />

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
