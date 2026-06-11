import { motion } from "framer-motion";
import { projects } from "../data/ProjectsData.ts";
import "../css/Project.css";

export default function ProjectsSection() {
    return (
        <section className="projects-section" id="projects">

            <div className="projects-container">

                {/* LEFT SIDE */}
                <motion.div
                    className="projects-left"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-subtitle">About Projects</span>
                    <h2 className="section-main-title">Recent Projects</h2>

                    <p className="section-description">
                        A collection of my recent work including full-stack apps,
                        UI designs and experiments using modern tech stack.
                    </p>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    className="projects-right"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    {/* SINGLE CARD */}
                    <div className="projects-card">

                        <h3>My Projects</h3>

                        <div className="projects-grid">

                            {projects.slice(0, 4).map((project, index) => (
                                <motion.div
                                    className="project-item"
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <img src={project.image} alt={project.title} />

                                    <h4>{project.title}</h4>

                                    <p>{project.description}</p>

                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i}>{tag}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}