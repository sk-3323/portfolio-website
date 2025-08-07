"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const skillsData = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Socket.io",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "Redis",
  "Docker",
  "Nginx",
  "Langchain",
  "Postgresql",
  "Supabase",
  "n8n",
] as const;
export const skillLogos = {
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "React.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Socket.io":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  Prisma: "https://www.svgrepo.com/show/354202/prisma.svg", // not on devicon
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Nginx:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  Langchain:
    "https://images.contentstack.io/v3/assets/bltf2fca5bf44f5e817/blt34d9fdb635976e4a/669e80a79fecd86c50d59f6d/Lang_Square.png",
  Postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg",
  Supabase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  n8n: "https://miro.medium.com/v2/resize:fit:1155/0*G-5F38rBStjlMNwd.png",
};

// Technology colors for better visual appeal
const skillColors = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-600",
  "React.js": "bg-cyan-400",
  "Next.js": "bg-black",
  "Node.js": "bg-green-600",
  "Socket.io": "bg-gray-800",
  Tailwind: "bg-teal-500",
  Prisma: "bg-indigo-600",
  MongoDB: "bg-green-500",
  Redux: "bg-purple-600",
  Express: "bg-gray-700",
  Redis: "bg-red-600",
  Docker: "bg-blue-500",
  Nginx: "bg-green-700",
  Langchain: "bg-green-500",
  Postgresql: "bg-blue-400",
  Supabase: "bg-green-400",
  n8n: "bg-red-300",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill}
              variants={item}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                {/* Skill Icon */}
                <div className="relative mb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-xl ${
                      skillColors[skill as keyof typeof skillColors]
                    } flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}
                  >
                    <Image
                      src={skillLogos[skill]}
                      alt={`${skill} icon`}
                      className="w-8 h-8 text-white filter brightness-0 invert"
                      height={300}
                      width={300}
                    />
                  </div>

                  {/* Floating particles effect */}
                  {hoveredSkill === skill && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: [0, (Math.random() - 0.5) * 100],
                            y: [0, (Math.random() - 0.5) * 100],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1,
                          }}
                          className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                        />
                      ))}
                    </>
                  )}
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {skill}
                </h3>

                {/* Progress Bar Animation */}
                <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hoveredSkill === skill ? "100%" : "0%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Skill level indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: hoveredSkill === skill ? 1 : 0,
                  y: hoveredSkill === skill ? 0 : 10,
                }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                Expert
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
