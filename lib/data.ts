import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/image.png";
import rmtdevImg from "@/public/bookstore.png";
import wordanalyticsImg from "@/public/ans.png";

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
    location:
      "C B Patel Computer College | Veer Narmad South Gujarat University",
    description:
      "Pursuing Bachelor of Computer Applications (BCA) at C.B. Patel College, gaining strong foundational knowledge in software development, databases, data structures, and web technologies through real-world projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2025",
  },
  {
    title: "MERN Stack Developer Internship",
    location: "ANS IT INDIA PVT LTD",
    description:
      "Gained hands-on industry experience while pursuing BCA, contributing to real-world web development projects using the MERN stack. Balanced academic learning with practical implementation, building scalable applications, collaborating in teams, and continuously enhancing technical and problem-solving skills.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Academix - E Learning Platform",
    description:
      "A responsive e-learning platform with efficientdata management, and implemented secure role-based authentication for Admins, Instructors, and Students.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    url: "https://academix-learning.netlify.app/",
  },

  {
    title: "Book Store",
    description:
      "A basic web application built using the MERN stack. The app features a responsive UI for easy navigation, and a RESTful API for smooth data handling between the frontend and backend.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Daisy UI", "Redux"],
    imageUrl: rmtdevImg,
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
    imageUrl: wordanalyticsImg,
    url: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
] as const;
