// // "use client";

// // import { useState, useMemo } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useInView } from "react-intersection-observer";
// // import {
// //   ExternalLink,
// //   Github,
// //   ChevronLeft,
// //   ChevronRight,
// //   Search,
// //   X,
// // } from "lucide-react";
// // import { Card } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import projectsData from "@/data/projects.json";
// // import Image from "next/image";

// // const PROJECTS_PER_PAGE = 6;

// // export default function Projects() {
// //   const [ref, inView] = useInView({
// //     triggerOnce: true,
// //     threshold: 0.1,
// //   });

// //   const [filter, setFilter] = useState("all");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [searchQuery, setSearchQuery] = useState("");

// //   // Get unique categories from projects
// //   const categories = useMemo(() => {
// //     const cats = new Set(projectsData.map((p) => p.category));
// //     return ["all", ...Array.from(cats)];
// //   }, []);

// //   // Get unique technologies for filter
// //   const technologies = useMemo(() => {
// //     const techs = new Set(projectsData.flatMap((p) => p.technologies));
// //     return Array.from(techs).sort();
// //   }, []);

// //   const [selectedTech, setSelectedTech] = useState<string | null>(null);

// //   // Filter projects
// //   const filteredProjects = useMemo(() => {
// //     let filtered = projectsData;

// //     // Filter by category
// //     if (filter !== "all") {
// //       filtered = filtered.filter((project) => project.category === filter);
// //     }

// //     // Filter by technology
// //     if (selectedTech) {
// //       filtered = filtered.filter((project) =>
// //         project.technologies.includes(selectedTech)
// //       );
// //     }

// //     // Filter by search query
// //     if (searchQuery.trim()) {
// //       const query = searchQuery.toLowerCase();
// //       filtered = filtered.filter(
// //         (project) =>
// //           project.title.toLowerCase().includes(query) ||
// //           project.description.toLowerCase().includes(query) ||
// //           project.technologies.some((tech) =>
// //             tech.toLowerCase().includes(query)
// //           )
// //       );
// //     }

// //     return filtered;
// //   }, [filter, selectedTech, searchQuery]);

// //   // Pagination
// //   const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
// //   const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
// //   const endIndex = startIndex + PROJECTS_PER_PAGE;
// //   const currentProjects = filteredProjects.slice(startIndex, endIndex);

// //   // Reset to page 1 when filters change
// //   const handleFilterChange = (newFilter: string) => {
// //     setFilter(newFilter);
// //     setCurrentPage(1);
// //   };

// //   const handleTechChange = (tech: string | null) => {
// //     setSelectedTech(tech);
// //     setCurrentPage(1);
// //   };

// //   const handleSearchChange = (query: string) => {
// //     setSearchQuery(query);
// //     setCurrentPage(1);
// //   };

// //   const clearFilters = () => {
// //     setFilter("all");
// //     setSelectedTech(null);
// //     setSearchQuery("");
// //     setCurrentPage(1);
// //   };

// //   return (
// //     <section id="projects" className="py-20 relative overflow-hidden">
// //       {/* Background decoration */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

// //       <div className="container max-w-5xl mx-auto px-4 relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true, amount: 0.2 }}
// //          transition={{ duration: 0.6 }} 
// //          > 
// //           {/* Section heading */}
// //           <div className="text-center mb-12">
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.5 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.5 }}
// //               className="inline-block mb-4"
// //             >
// //               <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
// //                 Portfolio
// //               </span>
// //             </motion.div>
// //             <h2 className="text-4xl md:text-5xl font-bold mb-4">
// //               My <span className="text-primary">Projects</span>
// //             </h2>
// //             <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
// //               A collection of projects showcasing my skills and passion for web
// //               development
// //             </p>
// //             <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full" />
// //           </div>

// //           {/* Filters Section */}
// //           <div className="mb-8 space-y-6">
// //             {/* Search Bar */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.5, delay: 0.2 }}
// //               className="max-w-2xl mx-auto relative"
// //             >
// //               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
// //               <Input
// //                 type="text"
// //                 placeholder="Search projects by name, description, or technology..."
// //                 value={searchQuery}
// //                 onChange={(e) => handleSearchChange(e.target.value)}
// //                 className="pl-12 pr-12 py-6 glass-strong border-border/50 focus:border-primary/50 rounded-xl"
// //               />
// //               {searchQuery && (
// //                 <button
// //                   onClick={() => handleSearchChange("")}
// //                   className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
// //                 >
// //                   <X className="w-5 h-5" />
// //                 </button>
// //               )}
// //             </motion.div>

// //             {/* Category Filter */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.5, delay: 0.3 }}
// //               className="flex flex-wrap justify-center gap-3"
// //             >
// //               {categories.map((category) => (
// //                 <Button
// //                   key={category}
// //                   variant={filter === category ? "default" : "outline"}
// //                   onClick={() => handleFilterChange(category)}
// //                   className="capitalize rounded-full transition-all hover:scale-105"
// //                   size="sm"
// //                 >
// //                   {category}
// //                 </Button>
// //               ))}
// //             </motion.div>

// //             {/* Technology Filter */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.5, delay: 0.4 }}
// //             >
// //               <div className="text-center mb-3">
// //                 <p className="text-sm text-muted-foreground">
// //                   Filter by Technology
// //                 </p>
// //               </div>
// //               <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
// //                 {technologies.map((tech) => (
// //                   <button
// //                     key={tech}
// //                     onClick={() =>
// //                       handleTechChange(selectedTech === tech ? null : tech)
// //                     }
// //                     className={`
// //                                             px-3 py-1.5 text-xs font-medium rounded-lg
// //                                             transition-all hover:scale-105
// //                                             ${
// //                                               selectedTech === tech
// //                                                 ? "bg-primary text-primary-foreground border-2 border-primary"
// //                                                 : "bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20"
// //                                             }
// //                                         `}
// //                   >
// //                     {tech}
// //                   </button>
// //                 ))}
// //               </div>
// //             </motion.div>

// //             {/* Active Filters & Clear */}
// //             {(filter !== "all" || selectedTech || searchQuery) && (
// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 className="flex items-center justify-center gap-3 flex-wrap"
// //               >
// //                 <span className="text-sm text-muted-foreground">
// //                   Active filters:
// //                 </span>
// //                 {filter !== "all" && (
// //                   <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary">
// //                     Category: {filter}
// //                   </span>
// //                 )}
// //                 {selectedTech && (
// //                   <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary">
// //                     Tech: {selectedTech}
// //                   </span>
// //                 )}
// //                 {searchQuery && (
// //                   <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary">
// //                     Search: "{searchQuery}"
// //                   </span>
// //                 )}
// //                 <Button
// //                   variant="ghost"
// //                   size="sm"
// //                   onClick={clearFilters}
// //                   className="text-xs hover:text-primary"
// //                 >
// //                   Clear All
// //                 </Button>
// //               </motion.div>
// //             )}

// //             {/* Results Count */}
// //             <div className="text-center">
// //               <p className="text-sm text-muted-foreground">
// //                 Showing {currentProjects.length} of {filteredProjects.length}{" "}
// //                 projects
// //               </p>
// //             </div>
// //           </div>

// //           {/* Projects Grid */}
// //           {/* <AnimatePresence mode="wait"> */}

// //           <div className="min-h-[600px]">
// //             {currentProjects.length > 0 ? (
// //               <motion.div
// //                 key={`${filter}-${selectedTech}-${searchQuery}-${currentPage}`}
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12"
// //               >
// //                 {currentProjects.map((project, index) => (
                 
// //                     <Card className="glass overflow-hidden group hover:glass-strong transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
// //                       {/* Project Image */}
// //                       <div className="relative h-48  bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
// //                         {project.image ? (
// //                           <Image
// //                             src={project.image}
// //                             alt={project.title}
// //                             fill
// //                             className="object-cover group-hover:scale-110 transition-transform duration-500"
// //                           />
// //                         ) : (
// //                           <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary/20">
// //                             {project.title.charAt(0)}
// //                           </div>
// //                         )}
// //                         {project.featured && (
// //                           <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
// //                             Featured
// //                           </div>
// //                         )}
// //                         <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //                       </div>

// //                       {/* Project Content */}
// //                       <div className="p-6 flex-1 flex flex-col">
// //                         <div className="flex items-start justify-between mb-2">
// //                           <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
// //                             {project.title}
// //                           </h3>
// //                           <span className="px-2 py-1 text-xs bg-muted/50 border border-border/50 rounded capitalize text-muted-foreground shrink-0 ml-2">
// //                             {project.category}
// //                           </span>
// //                         </div>
// //                         <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
// //                           {project.description}
// //                         </p>

// //                         {/* Technologies */}
// //                         <div className="flex flex-wrap gap-2 mb-4">
// //                           {project.technologies.slice(0, 4).map((tech, i) => (
// //                             <span
// //                               key={i}
// //                               className="px-2 py-1 text-xs bg-primary/10 border border-primary/30 rounded text-primary hover:bg-primary/20 transition-colors cursor-default"
// //                             >
// //                               {tech}
// //                             </span>
// //                           ))}
// //                           {project.technologies.length > 4 && (
// //                             <span className="px-2 py-1 text-xs text-muted-foreground">
// //                               +{project.technologies.length - 4} more
// //                             </span>
// //                           )}
// //                         </div>

// //                         {/* Links */}
// //                         <div className="flex gap-3 pt-4 border-t border-border/50">
// //                           {project.github && (
// //                             <a
// //                               href={project.github}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                               className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors group/link"
// //                             >
// //                               <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
// //                               Code
// //                             </a>
// //                           )}
// //                           {project.live && (
// //                             <a
// //                               href={project.live}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                               className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors group/link"
// //                             >
// //                               <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
// //                               Live Demo
// //                             </a>
// //                           )}
// //                         </div>
// //                       </div>
// //                     </Card>
                 
// //                 ))}
// //               </motion.div>
// //             ) : (
// //               <motion.div
                
// //                 className="text-center py-20"
// //               >
// //                 <div className="inline-block p-6 bg-muted/30 rounded-2xl mb-4">
// //                   <Search className="w-12 h-12 text-muted-foreground" />
// //                 </div>
// //                 <h3 className="text-2xl font-bold mb-2">No projects found</h3>
// //                 <p className="text-muted-foreground mb-6">
// //                   Try adjusting your filters or search query
// //                 </p>
// //                 <Button onClick={clearFilters} variant="outline">
// //                   Clear Filters
// //                 </Button>
// //               </motion.div>
// //             )}
// //           </div>

// //           {/* Pagination */}
// //           {totalPages > 1 && (
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.5 }}
// //               className="flex items-center justify-center gap-2"
// //             >
// //               <Button
// //                 variant="outline"
// //                 size="icon"
// //                 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
// //                 disabled={currentPage === 1}
// //                 className="rounded-full"
// //               >
// //                 <ChevronLeft className="w-4 h-4" />
// //               </Button>

// //               <div className="flex gap-2">
// //                 {Array.from({ length: totalPages }, (_, i) => i + 1).map(
// //                   (page) => {
// //                     // Show first page, last page, current page, and pages around current
// //                     if (
// //                       page === 1 ||
// //                       page === totalPages ||
// //                       Math.abs(page - currentPage) <= 1
// //                     ) {
// //                       return (
// //                         <Button
// //                           key={page}
// //                           variant={currentPage === page ? "default" : "outline"}
// //                           size="icon"
// //                           onClick={() => setCurrentPage(page)}
// //                           className="rounded-full w-10 h-10"
// //                         >
// //                           {page}
// //                         </Button>
// //                       );
// //                     } else if (
// //                       page === currentPage - 2 ||
// //                       page === currentPage + 2
// //                     ) {
// //                       return (
// //                         <span key={page} className="flex items-center px-2">
// //                           ...
// //                         </span>
// //                       );
// //                     }
// //                     return null;
// //                   }
// //                 )}
// //               </div>

// //               <Button
// //                 variant="outline"
// //                 size="icon"
// //                 onClick={() =>
// //                   setCurrentPage((p) => Math.min(totalPages, p + 1))
// //                 }
// //                 disabled={currentPage === totalPages}
// //                 className="rounded-full"
// //               >
// //                 <ChevronRight className="w-4 h-4" />
// //               </Button>
// //             </motion.div>
// //           )}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";

// import { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   ExternalLink,
//   Github,
//   ChevronLeft,
//   ChevronRight,
//   Search,
//   X,
// } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import projectsData from "@/data/projects.json";
// import Image from "next/image";

// const PROJECTS_PER_PAGE = 6;

// export default function Projects() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [filter, setFilter] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Get unique categories from projects
//   const categories = useMemo(() => {
//     const cats = new Set(projectsData.map((p) => p.category));
//     return ["all", ...Array.from(cats)];
//   }, []);

//   // Get unique technologies for filter
//   const technologies = useMemo(() => {
//     const techs = new Set(projectsData.flatMap((p) => p.technologies));
//     return Array.from(techs).sort();
//   }, []);

//   const [selectedTech, setSelectedTech] = useState<string | null>(null);

//   // Filter projects
//   const filteredProjects = useMemo(() => {
//     let filtered = projectsData;

//     if (filter !== "all") {
//       filtered = filtered.filter((project) => project.category === filter);
//     }

//     if (selectedTech) {
//       filtered = filtered.filter((project) =>
//         project.technologies.includes(selectedTech)
//       );
//     }

//     if (searchQuery.trim()) {
//       const query = searchQuery.toLowerCase();
//       filtered = filtered.filter(
//         (project) =>
//           project.title.toLowerCase().includes(query) ||
//           project.description.toLowerCase().includes(query) ||
//           project.technologies.some((tech) =>
//             tech.toLowerCase().includes(query)
//           )
//       );
//     }

//     return filtered;
//   }, [filter, selectedTech, searchQuery]);

//   // Pagination
//   const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
//   const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
//   const endIndex = startIndex + PROJECTS_PER_PAGE;
//   const currentProjects = filteredProjects.slice(startIndex, endIndex);

//   const handleFilterChange = (newFilter: string) => {
//     setFilter(newFilter);
//     setCurrentPage(1);
//   };

//   const handleTechChange = (tech: string | null) => {
//     setSelectedTech(tech);
//     setCurrentPage(1);
//   };

//   const handleSearchChange = (query: string) => {
//     setSearchQuery(query);
//     setCurrentPage(1);
//   };

//   const clearFilters = () => {
//     setFilter("all");
//     setSelectedTech(null);
//     setSearchQuery("");
//     setCurrentPage(1);
//   };

//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

//       <div className="container max-w-5xl mx-auto px-4 relative z-10">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Section heading */}
//           <div className="text-center mb-12">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.5 }}
//               className="inline-block mb-4"
//             >
//               <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
//                 Portfolio
//               </span>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               My <span className="text-primary">Projects</span>
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
//               A collection of projects showcasing my skills and passion for web
//               development
//             </p>
//             <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full" />
//           </div>

//           {/* Filters Section */}
//           <div className="mb-8 space-y-6">
//             {/* Search Bar */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="max-w-2xl mx-auto relative"
//             >
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//               <Input
//                 type="text"
//                 placeholder="Search projects by name, description, or technology..."
//                 value={searchQuery}
//                 onChange={(e) => handleSearchChange(e.target.value)}
//                 className="pl-12 pr-12 py-6 glass-strong border-border/50 focus:border-primary/50 rounded-xl"
//               />
//               {searchQuery && (
//                 <button
//                   onClick={() => handleSearchChange("")}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               )}
//             </motion.div>

//             {/* Category Filter */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="flex flex-wrap justify-center gap-3"
//             >
//               {categories.map((category) => (
//                 <Button
//                   key={category}
//                   variant={filter === category ? "default" : "outline"}
//                   onClick={() => handleFilterChange(category)}
//                   className="capitalize rounded-full transition-all hover:scale-105"
//                   size="sm"
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </motion.div>

//             {/* Technology Filter */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <div className="text-center mb-3">
//                 <p className="text-sm text-muted-foreground">
//                   Filter by Technology
//                 </p>
//               </div>
//               <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
//                 {technologies.map((tech) => (
//                   <button
//                     key={tech}
//                     onClick={() =>
//                       handleTechChange(selectedTech === tech ? null : tech)
//                     }
//                     className={`
//                       px-3 py-1.5 text-xs font-medium rounded-lg
//                       transition-all hover:scale-105
//                       ${
//                         selectedTech === tech
//                           ? "bg-primary text-primary-foreground border-2 border-primary"
//                           : "bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20"
//                       }
//                     `}
//                   >
//                     {tech}
//                   </button>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Active Filters & Clear */}
//             {(filter !== "all" || selectedTech || searchQuery) && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="flex items-center justify-center gap-3 flex-wrap"
//               >
//                 <span className="text-sm text-muted-foreground">
//                   Active filters:
//                 </span>
//                 {filter !== "all" && (
//                   <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary">
//                     Category: {filter}
//                   </span>
//                 )}
//                 {selectedTech && (
//                   <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary">
//                     Tech: {selectedTech}
//                   </span>
//                 )}
//                 {searchQuery && (
//                   <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary">
//                     Search: "{searchQuery}"
//                   </span>
//                 )}
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={clearFilters}
//                   className="text-xs hover:text-primary"
//                 >
//                   Clear All
//                 </Button>
//               </motion.div>
//             )}

//             {/* Results Count */}
//             <div className="text-center">
//               <p className="text-sm text-muted-foreground">
//                 Showing {currentProjects.length} of {filteredProjects.length}{" "}
//                 projects
//               </p>
//             </div>
//           </div>

//           {/* Projects Grid */}
//           {/* <div className="min-h-[600px]"> */}
//             {currentProjects.length > 0 ? (
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
//               >
//                 {currentProjects.map((project, index) => (
//                   <Card key={project.id} className="glass overflow-hidden group hover:glass-strong transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
//                     {/* Project Image */}
//                     <div className="relative h-48 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
//                       {project.image ? (
//                         <Image
//                           src={project.image}
//                           alt={project.title}
//                           fill
//                           className="object-cover group-hover:scale-110 transition-transform duration-500"
//                         />
//                       ) : (
//                         <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary/20">
//                           {project.title.charAt(0)}
//                         </div>
//                       )}
//                       {project.featured && (
//                         <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
//                           Featured
//                         </div>
//                       )}
//                       <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     </div>

//                     {/* Project Content */}
//                     <div className="p-6 flex-1 flex flex-col">
//                       <div className="flex items-start justify-between mb-2">
//                         <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
//                           {project.title}
//                         </h3>
//                         <span className="px-2 py-1 text-xs bg-muted/50 border border-border/50 rounded capitalize text-muted-foreground shrink-0 ml-2">
//                           {project.category}
//                         </span>
//                       </div>
//                       <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
//                         {project.description}
//                       </p>

//                       {/* Technologies */}
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {project.technologies.slice(0, 4).map((tech, i) => (
//                           <span
//                             key={i}
//                             className="px-2 py-1 text-xs bg-primary/10 border border-primary/30 rounded text-primary hover:bg-primary/20 transition-colors cursor-default"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                         {project.technologies.length > 4 && (
//                           <span className="px-2 py-1 text-xs text-muted-foreground">
//                             +{project.technologies.length - 4} more
//                           </span>
//                         )}
//                       </div>

//                       {/* Links */}
//                       <div className="flex gap-3 pt-4 border-t border-border/50">
//                         {project.github && (
//                           <a
//                             href={project.github}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors group/link"
//                           >
//                             <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
//                             Code
//                           </a>
//                         )}
//                         {project.live && (
//                           <a
//                             href={project.live}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors group/link"
//                           >
//                             <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
//                             Live Demo
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   </Card>
//                 ))}
//               </div>
//             ) : (
//               <motion.div className="text-center py-20">
//                 <div className="inline-block p-6 bg-muted/30 rounded-2xl mb-4">
//                   <Search className="w-12 h-12 text-muted-foreground" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">No projects found</h3>
//                 <p className="text-muted-foreground mb-6">
//                   Try adjusting your filters or search query
//                 </p>
//                 <Button onClick={clearFilters} variant="outline">
//                   Clear Filters
//                 </Button>
//               </motion.div>
//             )}
//           {/* </div> */}

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="flex items-center justify-center gap-2"
//             >
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                 disabled={currentPage === 1}
//                 className="rounded-full"
//               >
//                 <ChevronLeft className="w-4 h-4" />
//               </Button>

//               <div className="flex gap-2">
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                   (page) => {
//                     if (
//                       page === 1 ||
//                       page === totalPages ||
//                       Math.abs(page - currentPage) <= 1
//                     ) {
//                       return (
//                         <Button
//                           key={page}
//                           variant={currentPage === page ? "default" : "outline"}
//                           size="icon"
//                           onClick={() => setCurrentPage(page)}
//                           className="rounded-full w-10 h-10"
//                         >
//                           {page}
//                         </Button>
//                       );
//                     } else if (
//                       page === currentPage - 2 ||
//                       page === currentPage + 2
//                     ) {
//                       return (
//                         <span key={page} className="flex items-center px-2">
//                           ...
//                         </span>
//                       );
//                     }
//                     return null;
//                   }
//                 )}
//               </div>

//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() =>
//                   setCurrentPage((p) => Math.min(totalPages, p + 1))
//                 }
//                 disabled={currentPage === totalPages}
//                 className="rounded-full"
//               >
//                 <ChevronRight className="w-4 h-4" />
//               </Button>
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useState, useMemo } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import projectsData from "@/data/projects.json";
import Image from "next/image";

const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Categories
  const categories = useMemo(() => {
    const cats = new Set(projectsData.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, []);

  // Technologies
  const technologies = useMemo(() => {
    const techs = new Set(projectsData.flatMap((p) => p.technologies));
    return Array.from(techs).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    let filtered = projectsData;

    if (filter !== "all") {
      filtered = filtered.filter((p) => p.category === filter);
    }

    if (selectedTech) {
      filtered = filtered.filter((p) => p.technologies.includes(selectedTech));
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.technologies.some((t) => t.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [filter, selectedTech, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const clearFilters = () => {
    setFilter("all");
    setSelectedTech(null);
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            A collection of projects showcasing my skills and passion for web
            development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-12 pr-12 py-6 glass-strong rounded-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                size="sm"
                variant={filter === category ? "default" : "outline"}
                className="capitalize rounded-full"
                onClick={() => {
                  setFilter(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Technologies */}
          <div>
            <p className="text-sm text-muted-foreground text-center mb-3">
              Filter by Technology
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => {
                    setSelectedTech(selectedTech === tech ? null : tech);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                    selectedTech === tech
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-primary/10 border-primary/30 text-primary"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Active filters */}
          {(filter !== "all" || selectedTech || searchQuery) && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {filter !== "all" && (
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
                  Category: {filter}
                </span>
              )}
              {selectedTech && (
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
                  Tech: {selectedTech}
                </span>
              )}
              {searchQuery && (
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
                  Search: "{searchQuery}"
                </span>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground">
            Showing {currentProjects.length} of {filteredProjects.length} projects
          </p>
        </div>

        {/* Grid */}
        {currentProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentProjects.map((project) => (
              <Card
                key={project.id}
                className="glass overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary/20">
                      {project.title.charAt(0)}
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 text-xs rounded bg-muted/50 border capitalize text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-primary/10 border border-primary/30 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4 border-t">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-muted/30 rounded-2xl mb-4">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                size="icon"
                variant={page === currentPage ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
