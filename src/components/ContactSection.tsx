import { motion } from "framer-motion";
import { contactData } from "../data/ContactData.ts";
import "../css/Contact.css";
import { FaGithub, FaLinkedin,FaPhoneAlt , FaInstagram, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const emailUrl = `mailto:${contactData.email}`;
    const gitHubUrl = contactData.socials.find(s => s.name === "GitHub")?.url || "https://github.com";
    const linkedInUrl = contactData.socials.find(s => s.name === "LinkedIn")?.url || "https://linkedin.com";
    const instagramUrl = contactData.socials.find(s => s.name === "Instagram")?.url || "https://instagram.com";
    const naukriUrl = contactData.socials.find(s => s.name === "Naukri")?.url || "https://naukri.com";
    const phoneUrl = `tel:${contactData.phone}`;

    const contacts = [
        { name: "Email", label: contactData.email, url: emailUrl, icon: FaEnvelope, color: "#c084fc" },
        {
            name: "Mobile",
            label: contactData.phone,
            url: phoneUrl,
            icon: FaPhoneAlt,
            color: "#fb923c"
        },
        { name: "LinkedIn", label: "LinkedIn Profile", url: linkedInUrl, icon: FaLinkedin, color: "#61DBFB" },
        { name: "GitHub", label: "GitHub Profile", url: gitHubUrl, icon: FaGithub, color: "#ffffff" },
        { name: "Naukri", label: "Naukri Profile", url: naukriUrl, icon: FaBriefcase, color: "#4ade80" },
        { name: "Instagram", label: "Instagram Profile", url: instagramUrl, icon: FaInstagram, color: "#fb923c" }
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="section-header">
                    <span className="section-subtitle">{contactData.title}</span>
                    <h2 className="section-main-title">Connect With Me</h2>
                </div>

                <div className="contact-desc-wrapper">
                    <p className="contact-desc">{contactData.description}</p>
                </div>

                <div className="contact-cards-grid">
                    {contacts.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <motion.a 
                                key={index}
                                href={contact.url}
                                target="_blank"
                                rel="noreferrer"
                                className="contact-click-card"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ 
                                    y: -5,
                                    borderColor: "rgba(255, 255, 255, 0.25)",
                                    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.12)"
                                }}
                            >
                                <div className="contact-card-icon-wrapper" style={{ color: contact.color }}>
                                    <Icon size={24} />
                                </div>
                                <div className="contact-card-info">
                                    <h3>{contact.name}</h3>
                                    <p>{contact.label}</p>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}