import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "../css/NavBar.css";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isOpen, setIsOpen] = useState(false);

    // Track active section on scroll
    useEffect(() => {
        const sections = ["home", "about", "skills", "projects", "contact"];
        const observers = sections.map((id) => {
            const element = document.getElementById(id);
            if (!element) return null;
            
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
            );
            observer.observe(element);
            return { element, observer };
        });

        return () => {
            observers.forEach((obs) => {
                if (obs) obs.observer.unobserve(obs.element);
            });
        };
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navItems = [
        { label: "Home", id: "home" },
        { label: "About", id: "about" },
        { label: "Skills", id: "skills" },
        { label: "Projects", id: "projects" },
        { label: "Contact", id: "contact" }
    ];

    return (
        <>
            <motion.nav
                className="navbar"
                initial={{ y: -20, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Logo */}
                <a href="#home" className="navbar-logo" onClick={closeMenu}>
                    S
                </a>

                {/* Desktop Links */}
                <ul className="navbar-links">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a 
                                href={`#${item.id}`} 
                                className={activeSection === item.id ? "active" : ""}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Resume Button */}
                <div className="navbar-actions">
                    <motion.a
                        href="/resume.pdf"
                        download="resume.pdf"
                        className="navbar-resume"
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Resume
                    </motion.a>

                    {/* Hamburger Button for Mobile */}
                    <button 
                        className={`hamburger-btn ${isOpen ? "open" : ""}`} 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className="hamburger-line line-1"></span>
                        <span className="hamburger-line line-2"></span>
                        <span className="hamburger-line line-3"></span>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="mobile-menu-links">
                            {navItems.map((item) => (
                                <motion.li 
                                    key={item.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a 
                                        href={`#${item.id}`} 
                                        className={activeSection === item.id ? "active" : ""}
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <a 
                                    href="/resume.pdf" 
                                    download="resume.pdf"
                                    onClick={closeMenu}
                                    className="mobile-resume-link"
                                >
                                    Download Resume
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}