"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="about" className="py-20 relative">
            <div className="container max-w-7xl mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            About <span className="text-primary">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative w-64 h-64 mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75 blur-xl" />
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 glass">
                                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-6xl font-bold text-primary">
                                        YN
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* About Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-4"
                        >
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I'm a passionate <span className="text-primary font-semibold">MERN Stack Developer</span> with
                                a strong foundation in building modern web applications. I love
                                creating seamless user experiences and solving complex problems
                                with clean, efficient code.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                With hands-on experience from internships and client projects,
                                I've developed a diverse skill set in both frontend and backend
                                technologies. I'm always eager to learn new technologies and
                                stay updated with the latest industry trends.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                When I'm not coding, you can find me exploring new frameworks,
                                contributing to open-source projects, or sharing my knowledge
                                with the developer community.
                            </p>

                            {/* Key highlights */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="glass p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-primary">3+</div>
                                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                                </div>
                                <div className="glass p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-primary">2+</div>
                                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
