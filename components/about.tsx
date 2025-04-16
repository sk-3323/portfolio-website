"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 min-h-screen"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I'm Shubham, a passionate{" "}
        <span className="font-medium">MERN Stack Developer</span> who loves
        building fast, responsive, and scalable web applications. With a strong
        foundation in JavaScript and hands-on experience in
        <span className="font-medium">
          {" "}
          MongoDB, Express.js, React, and Node.js,
        </span>{" "}
        I thrive on turning complex problems into
        <span className="italic"> simple, beautiful solutions. </span>
        Whether it's creating sleek UI or designing robust{" "}
        <span className="font-medium">APIs</span>, I'm all about crafting
        digital experiences that actually work.
      </p>
      <p className="mb-3">
        I'm always exploring new tools, frameworks, and best practices to level
        up my skills and stay ahead in the ever-evolving dev world. Whether it's
        collaborating on team projects or building solo side hustles, I'm driven
        by curiosity, creativity, and the thrill of bringing ideas to life
        through code.
      </p>
    </motion.section>
  );
}
