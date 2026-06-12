export const projects = [
    {
        title: "CourtFlo",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
        description: "A pickleball app that helps players find courts, track games, and connect with the local community.",
        tags: ["Native Android", "Firebase", "Google Maps", "Sports Tech"],
        github: "https://github.com/",
        demo: "https://github.com/"
    },
    {
        title: "CarSpa",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
        description: "A car wash service app that enables users to discover nearby providers, schedule bookings, and receive Notifications.",
        tags: ["Native Android", "Firebase", "Google Maps", "Car Wash"],
        github: "https://github.com/",
        demo: "https://github.com/"
    },
    {
        title: "Cash4Edu",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
        description: "A React Native fintech application that helps students access educational funding, track applications, and manage financial assistance programs.",
        tags: ["React Native", "Fintech", "Firebase", "Education"],
        github: "https://github.com/",
        demo: ""
    },
    {
        title: "Developer Portfolio",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
        description: "A modern developer portfolio showcasing Android, React Native, and web development projects with smooth animations and responsive design.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/",
        demo: "https://github.com/"
    },
];

export const projectFeatures: Record<string, string[]> = {
    "CourtFlo": [
        "Find and explore nearby pickleball courts with an intuitive map experience.",
        "Create, join, and manage matches with real-time updates.",
        "Connect with local players and build your pickleball network.",
        "Firebase-powered backend with secure Email and Google authentication."
    ],
    "CarSpa": [
        "Browse and book premium car wash packages with ease.",
        "Find nearby service centers with integrated Google Maps navigation.",
        "Track booking status and appointment history in real time.",
        "Built with Jetpack Compose, Firebase, and Material 3 design principles."
    ],
    "Developer Portfolio": [
        "Responsive portfolio website built with React and TypeScript.",
        "Smooth animations and interactive UI powered by Framer Motion.",
        "Showcases mobile and web development projects with modern design.",
        "Optimized for performance, accessibility, and cross-device compatibility."
    ],
    "Cash4Edu": [
        "Simplifies access to scholarships, grants, and educational funding programs.",
        "Streamlined application workflow with real-time progress tracking.",
        "Secure user onboarding and document management experience.",
        "Built with React Native to deliver a seamless Android and iOS experience."
    ]
};
