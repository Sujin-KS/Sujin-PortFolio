import { motion } from "framer-motion";
import "../css/NavBar.css";

export default function Navbar() {
    return (
        <motion.nav
            className="navbar"
            initial={{ y: -15, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Logo */}
            <div className="navbar-logo">
                S
            </div>

            {/* Links */}
            <ul className="navbar-links">

                <li>
                    <a href="#home">Home</a>
                </li>

                <li>
                    <a href="#about">About Me</a>
                </li>

                <li>
                    <a href="#skills">Skills</a>
                </li>

                <li>
                    <a href="#projects">Projects</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>

            </ul>

            {/* Resume Button */}
            <motion.a
                href="/resume.pdf"
                className="navbar-resume"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
            >
                Resume
            </motion.a>
        </motion.nav>
    );
}