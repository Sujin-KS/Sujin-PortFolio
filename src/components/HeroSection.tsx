import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "../css/Hero.css";
import { HERO_DATA } from "../data/HeroDatas";

export default function Hero() {
    const cardRef = useRef<HTMLDivElement>(null);

    // Motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 120, damping: 18 };

    const mouseXSpring = useSpring(x, springConfig);
    const mouseYSpring = useSpring(y, springConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <section className="hero">

            {/* Background layers */}
            <div className="hero-depth-layer-1 float-breathing-slow" />
            <div className="hero-depth-layer-2 float-breathing" />

            {/* LEFT */}
            <motion.div
                className="hero-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
            >
                <h1>
                    {HERO_DATA.title}
                    <span>{HERO_DATA.subtitle}</span>
                </h1>

                <p>{HERO_DATA.description}</p>

                <div className="hero-buttons">

                    <motion.button
                        className="primary-btn"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={scrollToProjects}
                    >
                        {HERO_DATA.buttons.primary}
                    </motion.button>

                    <motion.button
                        className="secondary-btn"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {HERO_DATA.buttons.secondary}
                    </motion.button>

                </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
                className="hero-right"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
            >
                <div className="profile-glow" />

                <motion.div
                    ref={cardRef}
                    className="profile-card"
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{
                        boxShadow:
                            "0 30px 60px rgba(124, 58, 237, 0.25)"
                    }}
                >
                    <div className="profile-avatar">
                        {HERO_DATA.profile.avatar}
                    </div>

                    <h3>{HERO_DATA.profile.name}</h3>

                    <p>{HERO_DATA.profile.role}</p>

                    <div className="profile-stats">
                        {HERO_DATA.stats.map((stat) => (
                            <div key={stat.label}>
                                <h4>{stat.value}</h4>
                                <span>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}