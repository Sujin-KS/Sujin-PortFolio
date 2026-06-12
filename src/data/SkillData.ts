import { SiFirebase, SiKotlin } from "react-icons/si";
import { FaAndroid, FaGithub, FaReact, FaMobileAlt, FaDatabase, FaExchangeAlt } from "react-icons/fa";


export const skillsData = [
    {
        name: "Android Development",
        desc: "Native Android apps, SDK, Services, and Lifecycle Management.",
        icon: FaAndroid,
        color: "#3ddc84"
    },
    {
        name: "Kotlin",
        desc: "Modern language features, Coroutines, Flow, and clean codebase.",
        icon: SiKotlin,
        color: "#7f52ff"
    },
    {
        name: "Jetpack Compose",
        desc: "Declarative UI toolkit, responsive layouts, and smooth animations.",
        icon: FaMobileAlt,
        color: "#4285f4"
    },
    {
        name: "MVVM Architecture",
        desc: "ViewModel, LiveData, Clean Architecture, and separation of concerns.",
        icon: FaDatabase,
        color: "#fb923c"
    },
    {
        name: "React Native",
        desc: "Cross-platform mobile apps using JavaScript, TypeScript, and Expo.",
        icon: FaReact,
        color: "#61dafb"
    },
    {
        name: "Firebase",
        desc: "Authentication, Firestore, Cloud Messaging, and Crashlytics.",
        icon: SiFirebase,
        color: "#ffca28"
    },
    {
        name: "GitHub",
        desc: "Version control, Git workflows, PR reviews, and CI/CD pipelines.",
        icon: FaGithub,
        color: "#ffffff"
    },
    {
        name: "REST APIs",
        desc: "Networking, Retrofit, Ktor, Axios, JSON parsing, and async requests.",
        icon: FaExchangeAlt,
        color: "#4ade80"
    }
];