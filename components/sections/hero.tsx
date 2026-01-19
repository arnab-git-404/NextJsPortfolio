"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingLines from "@/components/FloatingLines";
import Magnet from "../Magnet";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
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

      <div className="container max-w-7xl mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-primary text-lg font-medium">
              Hi there, I'm
            </span>
          </motion.div>

          {/* Name with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-4 text-primary"
          >
            Arnab Mukherjee
          </motion.h1>

          {/* Role/Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-4xl font-semibold mb-6 text-muted-foreground"
          >
            {/* {`Full Stack Developer(MERN)`} */}
            {/* camelCase Full Stack Developer */}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Next.js Developer passionate about building beautiful, functional,
            and user friendly web applications, who loves writing clean
            <br /> code in <span className="text-primary font-semibold">camelCase</span> using MongoDB, Express.js, <br /> React,
            and Tailwind CSS.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth hover:scale-110 hover:cursor-pointer "
            >
              View My Work
            </Button>
            <Magnet padding={300} disabled={false} magnetStrength={3}>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/50 hover:bg-primary/10 transition-smooth hover:scale-110 hover:cursor-pointer"
              >
                <a
                  href="/arnabMukherjee.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Resume
                </a>
              </Button>
            </Magnet>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-4 justify-center"
          >
            <a
              href="https://github.com/arnab-git-404"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:glass-strong transition-smooth hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/0xarnab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:glass-strong transition-smooth hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mukherjeearnab988@gmail.com"
              className="p-3 rounded-full glass hover:glass-strong transition-smooth hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          viewport={{ once: true }}
          className="cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
