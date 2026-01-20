import nextDynamic from "next/dynamic";
import Hero from "@/components/sections/hero";
import Footer from "@/components/footer";

const About = nextDynamic(() => import("@/components/sections/about"));
const Skills = nextDynamic(() => import("@/components/sections/skills"));
const Experience = nextDynamic(() => import("@/components/sections/experience"));
const Projects = nextDynamic(() => import("@/components/sections/projects"));
const Education = nextDynamic(() => import("@/components/sections/education"));
const Contact = nextDynamic(() => import("@/components/sections/contact"));

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

