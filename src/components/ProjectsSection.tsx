import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {projectFeatures, projects} from "../data/ProjectsData.ts";
import "../css/Project.css";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ProjectsSection() {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    return (
        <section className="Projects" id="projects">
            <motion.div 
                className="projects-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={containerVariants}
            >

                <motion.div className="section-header" variants={fadeUpVariants}>
                    <span className="section-subtitle">Portfolio</span>
                    <h2 className="section-main-title">Recent Projects</h2>
                </motion.div>

                {/* Projects Grid */}
                <motion.div className="projects-grid" variants={containerVariants}>
                    {projects.map((project, index) => {
                        const isExpanded = expandedCard === index;
                        const features = projectFeatures[project.title] || [];

                        return (
                            <motion.div 
                                layout
                                className={`project-card-new unified-card ${isExpanded ? "expanded" : ""}`}
                                key={index}
                                variants={fadeUpVariants}
                            >
                                {/* IMAGE */}
                                <motion.div layout="position" className="project-image-box">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-image-overlay"></div>
                                </motion.div>

                                {/* CONTENT */}
                                <div className="project-details-box">
                                    <motion.div layout="position" className="project-header-row">
                                        <h3>{project.title}</h3>
                                        <button 
                                            onClick={() => toggleExpand(index)}
                                            className="expand-toggle-btn"
                                            aria-label={isExpanded ? "Show Less" : "Show Details"}
                                        >
                                            {isExpanded ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                                        </button>
                                    </motion.div>

                                    <motion.p layout="position" className="project-short-desc">
                                        {project.description}
                                    </motion.p>

                                    {/* EXPANDED CASE STUDY DETAILS */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div 
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="project-expanded-content"
                                            >
                                                <h4>Key Achievements & Features</h4>
                                                <ul className="project-feature-list">
                                                    {features.map((feat, i) => (
                                                        <li key={i}>{feat}</li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* TAGS */}
                                    <motion.div layout="position" className="project-tags-row">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="project-tag-chip">{tag}</span>
                                        ))}
                                    </motion.div>

                                    {/* BUTTONS */}
                                    <motion.div layout="position" className="project-actions-row">
                                        <motion.a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-action-btn code-btn"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <FaGithub size={15} /> Code
                                        </motion.a>
                                        {project.demo ? (
                                            <motion.a 
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-action-btn live-btn"
                                                whileHover={{ y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <FaExternalLinkAlt size={12} /> Live Demo
                                            </motion.a>
                                        ) : (
                                            <span className="project-action-btn-disabled">
                                                Private Demo
                                            </span>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
}