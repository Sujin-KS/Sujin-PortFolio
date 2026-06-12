import { motion } from "framer-motion";
import "../css/Skills.css";
import { skillsData } from "../data/SkillData";

export default function SkillsSection() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    return (
        <section className="skills-section" id="skills">
            <motion.div 
                className="skills-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div className="section-header" variants={fadeUpVariants}>
                    <span className="section-subtitle">Expertise</span>
                    <h2 className="section-main-title">My Tech Stack</h2>
                </motion.div>

                {/* Skills Grid */}
                <motion.div className="skills-grid" variants={containerVariants}>
                    {skillsData.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div 
                                key={index} 
                                className="skill-card-new unified-card"
                                variants={fadeUpVariants}
                                whileHover={{ 
                                    y: -8, 
                                    borderColor: skill.color + "44",
                                    boxShadow: `0 20px 40px -15px ${skill.color}22`
                                }}
                            >
                                <div className="skill-icon-box" style={{ color: skill.color, border: `1px solid ${skill.color}22` }}>
                                    <Icon size={24} />
                                </div>
                                <h3>{skill.name}</h3>
                                <p>{skill.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
}