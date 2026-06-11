import { motion } from "framer-motion";
import "../css/Skills.css";
import {skillsData} from "../data/SkillData.ts";

export default function SkillsSection() {
    return (
        <section className="skills-section" id="skills">
            <div className="skills-container">
                <motion.div
                    className="skills-left"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <span className="section-subtitle">{skillsData.title}</span>
                    <h2 className="section-main-title">{skillsData.heading}</h2>
                    <p className="section-description">{skillsData.description}</p>
                </motion.div>

                <motion.div
                    className="skills-right"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                >
                    <motion.div
                        className="skills-card"
                        whileHover={{
                            y: -4,
                            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                            borderColor: "rgba(255, 255, 255, 0.2)"
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Tech Stack</h3>

                        <div className="skills-categories">
                            {skillsData.categories.map((category, index) => (
                                <div key={index} className="skill-category">
                                    <h4 className="category-label">{category.title}</h4>
                                    <div className="skills-chips">
                                        {category.skills.map((skill, i) => (
                                            <motion.span
                                                key={i}
                                                className="skill-chip"
                                                whileHover={{ y: -2, scale: 1.03 }}
                                                transition={{ duration: 0.2 }}
                                                style={{ borderLeft: `3px solid ${category.color}` }}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}