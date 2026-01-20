"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ScrollIndicator() {

  const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

  return (
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
  );
}
