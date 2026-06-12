import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../css/Hero.css";
import { HERO_DATA } from "../data/HeroDatas.ts";

const roles = ["Android Developer", "React Native Mobile Developer", "Kotlin Specialist", "Cross-Platform Creator"];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollToProjects = () => {
        const projSection = document.getElementById("projects");
        if (projSection) {
            projSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="hero-section" id="home">
            {/* Premium background glows */}
            <div className="hero-ambient-glow"></div>

            <motion.div 
                className="floating-glass-element element-1"
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="floating-glass-element element-2"
                animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div 
                className="hero-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            >
                {/* Avatar */}
                <motion.div 
                    className="hero-avatar-wrapper"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                    <div className="hero-avatar">
                        {HERO_DATA.profile.avatar}
                    </div>
                    <div className="hero-avatar-ring"></div>
                </motion.div>

                {/* Name */}
                <motion.h1 
                    className="hero-name"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Hi, I'm <span className="highlight-text">{HERO_DATA.profile.name}</span>
                </motion.h1>

                {/* Animated Role */}
                <div className="hero-role-container">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={roleIndex}
                            className="hero-role-text"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.4 }}
                        >
                            {roles[roleIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>

                {/* Introduction */}
                <motion.p 
                    className="hero-intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    {HERO_DATA.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                    className="hero-ctas"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <motion.button 
                        onClick={scrollToProjects}
                        className="primary-btn"
                        whileHover={{ y: -4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        {HERO_DATA.buttons.primary}
                    </motion.button>

                    <motion.a 
                        href="/resume.pdf"
                        download="resume.pdf"
                        className="secondary-btn"
                        whileHover={{ y: -4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        {HERO_DATA.buttons.secondary}
                    </motion.a>
                </motion.div>

                {/* Stats Cards */}
                <motion.div 
                    className="hero-stats-grid"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    {HERO_DATA.stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            className="stat-card"
                            whileHover={{ 
                                y: -6,
                                borderColor: "rgba(168, 85, 247, 0.35)",
                                boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.15)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="stat-value">{stat.value}+</span>
                            <span className="stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                    
                    {/* Add one more stat card for design visual balance */}
                    <motion.div 
                        className="stat-card"
                        whileHover={{ 
                            y: -6,
                            borderColor: "rgba(168, 85, 247, 0.35)",
                            boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.15)"
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="stat-value">100%</span>
                        <span className="stat-label">Mobile Focus</span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}