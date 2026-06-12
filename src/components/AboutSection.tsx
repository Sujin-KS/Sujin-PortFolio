import { motion } from "framer-motion";
import { aboutData } from "../data/AboutData.ts";
import "../css/About.css";

export default function About() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    return (
        <section id="about" className="about-section">
            <motion.div 
                className="about-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div className="section-header" variants={fadeUpVariants}>
                    <span className="section-subtitle">{aboutData.title}</span>
                    <h2 className="section-main-title">{aboutData.heading}</h2>
                </motion.div>

                {/* Developer Story Card */}
                <motion.div 
                    className="about-story-card unified-card"
                    variants={fadeUpVariants}
                    whileHover={{ 
                        y: -6, 
                        borderColor: "rgba(168, 85, 247, 0.3)",
                        boxShadow: "0 30px 60px -15px rgba(124, 58, 237, 0.2)"
                    }}
                >
                    <div className="story-content">
                        <h3>My Story</h3>
                        <p>{aboutData.description1}</p>
                        <p>{aboutData.description2}</p>
                    </div>

                    <div className="stats-divider"></div>

                    {/* Quick Info Grid inside Card */}
                    <div className="about-stats-grid">
                        {aboutData.stats.map((item, index) => (
                            <motion.div 
                                key={index}
                                className="about-stat-item"
                                whileHover={{ 
                                    y: -2, 
                                    background: "rgba(255, 255, 255, 0.05)",
                                    borderColor: "rgba(168, 85, 247, 0.2)"
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="stat-label-text">{item.label}</span>
                                <span className="stat-value-text">{item.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}