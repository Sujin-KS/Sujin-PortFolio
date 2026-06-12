import { motion } from "framer-motion";
import { contactData } from "../data/ContactData.ts";
import "../css/Contact.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaBriefcase, FaArrowRight } from "react-icons/fa";

export default function Contact() {
    const emailUrl = `mailto:${contactData.email}`;
    const phoneUrl = `tel:${contactData.phone}`;
    const linkedInUrl = contactData.socials.find(s => s.name === "LinkedIn")?.url || "https://linkedin.com";
    const naukriUrl = contactData.socials.find(s => s.name === "Naukri")?.url || "https://naukri.com";

    const contactOptions = [
        {
            name: "Email",
            title: "Send an Email",
            desc: "Send me an email for project discussions or job opportunities.",
            actionText: contactData.email,
            url: emailUrl,
            icon: FaEnvelope,
            color: "#c084fc",
            glow: "rgba(192, 132, 252, 0.15)"
        },
        {
            name: "Phone",
            title: "Call or WhatsApp",
            desc: "Reach out via call or WhatsApp for quick communication.",
            actionText: contactData.phone,
            url: phoneUrl,
            icon: FaPhoneAlt,
            color: "#fb923c",
            glow: "rgba(251, 146, 60, 0.15)"
        },
        {
            name: "LinkedIn",
            title: "LinkedIn Profile",
            desc: "Connect professionally and view my updates.",
            actionText: "Connect with me",
            url: linkedInUrl,
            icon: FaLinkedin,
            color: "#61DBFB",
            glow: "rgba(97, 219, 251, 0.15)"
        },
        {
            name: "Naukri",
            title: "Naukri Profile",
            desc: "View my professional resume and hiring status.",
            actionText: "View Profile",
            url: naukriUrl,
            icon: FaBriefcase,
            color: "#4ade80",
            glow: "rgba(74, 222, 128, 0.15)"
        }
    ];

    // Container animation variants for staggered cards reveal
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    return (
        <section id="contact" className="contact-section">
            <motion.div 
                className="contact-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Section Header */}
                <motion.div className="section-header" variants={cardVariants}>
                    <span className="section-subtitle">{contactData.title}</span>
                    <h2 className="section-main-title">Network Hub</h2>
                </motion.div>

                {/* Short Professional Description */}
                <motion.div className="contact-desc-wrapper" variants={cardVariants}>
                    <p className="contact-desc">{contactData.description}</p>
                </motion.div>

                {/* Contact Cards Grid */}
                <motion.div 
                    className="contact-grid-new"
                    variants={containerVariants}
                >
                    {contactOptions.map((option, index) => {
                        const Icon = option.icon;
                        return (
                            <motion.a 
                                key={index}
                                href={option.url}
                                target="_blank"
                                rel="noreferrer"
                                className="contact-option-card unified-card"
                                variants={cardVariants}
                                whileHover={{ 
                                    y: -8,
                                    borderColor: option.color + "44",
                                    boxShadow: `0 20px 40px -10px ${option.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.12)`
                                }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="contact-option-header">
                                    <div className="contact-option-icon" style={{ color: option.color, border: `1px solid ${option.color}22` }}>
                                        <Icon size={22} />
                                    </div>
                                    <h3>{option.title}</h3>
                                </div>
                                
                                <p className="contact-option-desc">{option.desc}</p>
                                
                                <div className="contact-option-action">
                                    <span className="action-label" style={{ color: option.color }}>
                                        {option.actionText}
                                    </span>
                                    <FaArrowRight size={10} className="action-arrow" style={{ color: option.color }} />
                                </div>
                            </motion.a>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
}