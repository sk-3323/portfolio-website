import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { CgLaptop } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

// import corpcommentImg from "@/public/image.png";
// import rmtdevImg from "@/public/bookstore.png";
// import wordanalyticsImg from "@/public/ans.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Computer Applications",
    location: `@C B Patel Computer College | Veer Narmad South Gujarat University`,
    description:
      "Pursuing Bachelor of Computer Applications (BCA) at C.B. Patel College, gaining strong foundational knowledge in software development, databases, data structures, and web technologies through real-world projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
  {
    title: "MERN Stack Developer Internship",
    location: "@ANS IT INDIA PVT LTD",
    description:
      "Gained hands-on industry experience while pursuing BCA, contributing to real-world web development projects using the MERN stack. Balanced academic learning with practical implementation, building scalable applications, collaborating in teams, and continuously enhancing technical and problem-solving skills.",
    icon: React.createElement(CgLaptop),
    date: "Nov 2024 - Apr 2025",
  },
  {
    title: "MERN Stack Developer",
    location: "@Par Solution",
    description:
      "Built and optimized scalable backend systems using Node.js and Next.js. Worked on advanced backend concepts like job queues, caching, server scaling, and role-based access control (RBAC). Also implemented efficient API design, authentication flows, and performance tuning to support production-level apps.",
    icon: React.createElement(CgWorkAlt),

    date: "May 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Academix - E Learning Platform",
    description:
      "A responsive e-learning platform with efficientdata management, and implemented secure role-based authentication for Admins, Instructors, and Students.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl:
      "http://res.cloudinary.com/dlh3tav1v/image/upload/v1744829956/academix-cloudinary-mongodb/image_tuhtw8.png",
    url: "https://academix-learning.netlify.app/",
  },

  {
    title: "Book Store",
    description:
      "A basic web application built using the MERN stack. The app features a responsive UI for easy navigation, and a RESTful API for smooth data handling between the frontend and backend.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Daisy UI", "Redux"],
    imageUrl:
      "http://res.cloudinary.com/dlh3tav1v/image/upload/v1744830164/academix-cloudinary-mongodb/bookstore_frbkbm.png",
    url: "https://github.com/sk-3323/BookStore/tree/master",
  },
  {
    title: "ANS Official Website",
    description:
      "ANS IT India is a leading provider of IoT-enabled telematics solutions, specializing in fleet management, vehicle tracking, and real-time monitoring.",
    tags: [
      "React",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Prisma",
      "Tailwind",
      "Redux",
    ],
    imageUrl:
      "http://res.cloudinary.com/dlh3tav1v/image/upload/v1744830202/academix-cloudinary-mongodb/ans_otkkca.png",
    url: "",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Socket.io",
  "Tailwind",
  "Prisma",
  "Redux",
  "Express",
  "Redis",
  "Docker",
  "Nginx",
  "Langchain",
  "MongoDB",
  "Postgresql",
  "Supabase",
  "n8n",
] as const;
