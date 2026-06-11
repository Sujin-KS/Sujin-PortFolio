import { motion } from "framer-motion";
import { aboutData } from "../data/AboutData.ts";
import "../css/About.css";

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                {/* LEFT SIDE */}
                <motion.div 
                    className="about-left"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="section-header" style={{ alignItems: "flex-start", textAlign: "left", marginBottom: "24px" }}>
                        <span className="section-subtitle">{aboutData.title}</span>
                        <h2 className="section-main-title" style={{ color: "white", fontSize: "clamp(2rem, 3.8vw, 3rem)" }}>{aboutData.heading}</h2>
                    </div>

                    <p className="about-text">
                        {aboutData.description1}
                    </p>

                    <p className="about-text">
                        {aboutData.description2}
                    </p>

                    <div className="about-buttons">
                        <motion.button 
                            className="primary-btn"
                            whileHover={{ y: -2, scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                        >
                            {aboutData.buttons.primary}
                        </motion.button>

                        <motion.button 
                            className="secondary-btn"
                            whileHover={{ y: -2, scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                        >
                            {aboutData.buttons.secondary}
                        </motion.button>
                    </div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div 
                    className="about-right"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                >
                    <motion.div 
                        className="about-card"
                        whileHover={{ 
                            y: -4, 
                            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                            borderColor: "rgba(255, 255, 255, 0.2)"
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>Quick Info</h3>

                        <div className="info-grid">
                            {aboutData.stats.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ 
                                        y: -2, 
                                        backgroundColor: "rgba(255, 255, 255, 0.07)",
                                        borderColor: "rgba(192, 132, 252, 0.2)"
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <h4>{item.label}</h4>
                                    <p>{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}