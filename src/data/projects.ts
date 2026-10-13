
export type ProjectCategory = "Web" | "Backend" | "UI";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  overview: string;
  technologies: string[];
  image: string;
  status: "Placeholder" | "Completed" | "In Progress";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "inventory-management-system",
    title: "Inventory Management System",
    category: "Backend",
    description:
      "An inventory management system developed using backend programming and SQL database technologies.",
    overview:
      "This project focuses on inventory management and database-driven software development. The original portfolio identifies Backend and SQL as its main technologies. Further technical details will be added after reviewing the source code.",
    technologies: ["Backend", "SQL"],
    image: "/images/projects/inventory-management.jpg",
    status: "Completed",
    githubUrl:
      "https://github.com/KeitumetseSetati/Inventory-Management-System",
    featured: true,
  },
  {
    id: 2,
    slug: "student-system-app",
    title: "Student System App (C#)",
    category: "Backend",
    description:
      "A C# desktop application for managing student information through a Windows-based interface.",
    overview:
      "A student management application built with C# and desktop application technologies. The repository documents student record management and related functionality.",
    technologies: [
      "C#",
      "Desktop",
      "Windows Forms",
      ".NET Framework",
    ],
    image: "/images/projects/student-system.jpg",
    status: "Completed",
    githubUrl: "https://github.com/aceoroal/PRG282_Project",
    featured: true,
  },
  {
    id: 3,
    slug: "community-portal",
    title: "Community Portal",
    category: "Web",
    description:
      "A community-oriented web application developed using Node.js, MongoDB, and EJS templates.",
    overview:
      "A web-based community portal using server-side JavaScript and EJS templating. The project includes community information and web interface functionality. Its documented technologies include Node.js, Express, and EJS.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Web",
    ],
    image: "/images/projects/community-portal.jpg",
    status: "Completed",
    githubUrl: "https://github.com/DOli4/WPR381",
    featured: true,
  },
  {
    id: 4,
    slug: "wellness-management-application",
    title: "Wellness Management Application",
    category: "Web",
    description:
      "A wellness-focused web application developed as part of a software development project.",
    overview:
      "A web application focused on wellness management. The original portfolio identifies this project under Web and Health. Additional functionality, technologies, and repository details will be included once the source code is confirmed.",
    technologies: ["Web", "Health"],
    image: "/images/projects/wellness-management.jpg",
    status: "Completed",
    featured: true,
  },
];

export const projectCategories = [
  "All",
  "Web",
  "Backend",
  "UI",
] as const;

export type ProjectFilter =
  (typeof projectCategories)[number];
