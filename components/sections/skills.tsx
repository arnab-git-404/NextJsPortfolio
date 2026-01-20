import LogoLoop from "@/components/LogoLoop";
import skillsData from "@/data/skills.json";

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {" "}
            My <span className="text-primary">Skills</span>
          </h2>{" "}
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing web applications
          </p>
        </div>

        <div
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={skillsData}
            speed={120}
            direction="left"
            logoHeight={70}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            // fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
}
