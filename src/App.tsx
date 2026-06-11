import './App.css'

import AuroraBackground from "../src/components/customiseBackground.tsx";
import Navbar from "./components/NavBar.tsx";
import Hero from "./components/HeroSection.tsx";
import About from "./components/AboutSection.tsx";
import Contact from "./components/ContactSection.tsx";
import SkillsSection from "./components/SkillsSection.tsx";
import ProjectsSection from "./components/ProjectsSection.tsx";

function App() {
    return (
        <>
            <AuroraBackground />

            <Navbar />
            <main>
                <section id="home"><Hero /></section>
                <section id="about"><About /></section>
                <section id="skills"><SkillsSection/></section>
                <section id="projects"><ProjectsSection /> </section>
                <section id="contact"><Contact /></section>
            </main>
        </>
    );
}
export default App;
