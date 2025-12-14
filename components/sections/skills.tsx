"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import skillsData from "@/data/skills.json";

const categoryIcons: Record<string, string> = {
    frontend: "🎨",
    backend: "⚙️",
    database: "🗄️",
    tools: "🛠️",
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            My <span className="text-primary">Skills</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full" />
                        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                            Technologies and tools I work with to build amazing web applications
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                className="glass p-6 rounded-xl hover:glass-strong transition-smooth"
                            >
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-3xl">{categoryIcons[category]}</span>
                                    <h3 className="text-xl font-semibold capitalize">{category}</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {skills.map((skill: { name: string; icon: string }, index: number) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.05 }}
                                            className="flex flex-col items-center gap-2 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 hover:scale-105 transition-all cursor-default group"
                                        >
                                            <div className="relative w-12 h-12 group-hover:scale-110 transition-transform">
                                                <Image
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    width={48}
                                                    height={48}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-center">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* MERN Stack Highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-12 glass-strong p-8 rounded-xl max-w-4xl mx-auto text-center"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-primary">MERN Stack Specialist</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                                { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                            ].map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    className="flex flex-col items-center gap-3 px-6 py-4 bg-primary/10 border border-primary/30 rounded-xl hover:bg-primary/20 hover:scale-105 transition-all"
                                >
                                    <div className="relative w-16 h-16">
                                        <Image
                                            src={tech.icon}
                                            alt={tech.name}
                                            width={64}
                                            height={64}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-semibold text-primary">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}