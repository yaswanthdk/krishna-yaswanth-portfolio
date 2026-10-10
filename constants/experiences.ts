import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    role: "Front End Engineer",
    company: "Edsanta Education Pvt. Ltd.",
    duration: "Feb 2025 – Present",
    location: "Bengaluru, India",
    product:
    "Learning Management Platform serving students, faculty, and administrators with role-based dashboards, course management, assessments, and learning analytics.",
    description:
      "Own the end-to-end frontend development of an enterprise Learning Management System supporting students, faculty, and administrators with role-based access, analytics dashboards, and personalized learning experiences.",
    contributions: [
      "Redesigned and modernized the complete LMS user interface by translating Replit-based designs into production-ready React applications.",
      "Engineered a custom collaborative whiteboard using React Konva with recording, image export, and annotation capabilities.",
      "Integrated SCORM-compliant learning packages with learner progress tracking and analytics.",
      "Led frontend modernization by migrating from Create React App to Vite, SCSS to Tailwind CSS, and Redux to Zustand.",
    ],
    impact: [
      "Delivered the LMS UI revamp in two weeks and stabilized major production issues within the following week.",
      "Reduced build times from approximately 5 minutes to 45 seconds while improving first-load performance.",
      "Improved developer productivity through faster hot module replacement and a modern frontend toolchain.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "React Konva",
      "SCORM",
      "React Query",
    ],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "AppBrigade Technologies",
    duration: "Aug 2024 – Feb 2025",
    location: "Bengaluru, India",
    description:
      "Developed production-ready enterprise web applications using Next.js App Router, TypeScript, and Tailwind CSS while collaborating closely with backend engineers.",
    contributions: [
      "Designed reusable and type-safe UI components while integrating REST APIs and secure cookie-based authentication.",
      "Collaborated with backend engineers to implement scalable frontend modules with responsive and pixel-perfect interfaces.",
      "Optimized routing, rendering, and application performance using Next.js best practices.",
    ],
    impact: [
      "Shipped scalable frontend modules that supported reliable API integrations and secure authentication flows.",
      "Improved application responsiveness and rendering efficiency through Next.js App Router optimizations.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "React Hook Form",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Capgemini",
    duration: "Sep 2022 – Apr 2024",
    location: "Chennai, India",
    description:
      "Developed and enhanced React.js applications for enterprise clients, focusing on reusable UI architecture, API integration, and reliable delivery within Agile teams.",
    contributions: [
      "Developed and enhanced enterprise React.js applications by implementing reusable UI components and business-critical features.",
      "Integrated REST APIs and collaborated with backend teams to deliver reliable and scalable frontend functionality.",
      "Debugged complex application issues involving routing, state management, and asynchronous data flows, improving application stability.",
      "Worked within Agile teams, contributing to sprint planning, feature delivery, and continuous code quality improvements.",
    ],
    impact: [
      "Improved application stability by resolving routing, state management, and asynchronous data flow issues.",
      "Shipped business-critical frontend capabilities through reusable component patterns on enterprise React codebases.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "REST APIs",
      "State Management",
      "Routing",
      "Git",
      "Agile",
    ],
  },
];
