import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import hackchainLogo from "../assets/logos/hackchain.png";
import gssocLogo from "../assets/logos/gssoc.png";
import tapLogo from "../assets/logos/tap.png";

const Experience = () => {
  const experiences = [
    {
      company: "TAP Academy",
      logo: tapLogo,
      position: "Technical Trainer & Full-Stack Developer",
      duration: "Sep 2025 - Present",
      location: "On-site",
      description: [
        "Mentoring students in frontend technologies — HTML5, CSS3, ES6-JS, React, and Tailwind CSS.",
        "Guiding them to create professional portfolios, LinkedIn profiles, and real-world projects.",
      ],


    },
    {
      company: "HackChain Network",
      logo: hackchainLogo,
      position: "Founder & Community Lead",
      duration: "March 2025 – Present",
      location: "India",
      description: [
        "Founded HackChain Network — a community for developers to learn and grow together.",
        "Building connections through events, resources, and collaboration.",
      ],
    },
    {
      company: "Hacktoberfest & GirlScript Summer of Code",
      logo: gssocLogo,
      position: "Open Source Contributor",
      duration: "Oct 2024 - Nov 2024 · 2 mos",
      location: "Remote",
      description: [
        "Collaborated on global open-source projects using modern frontend tools.",
        "Crafted responsive UIs and improved project performance.",
        "Recognized with top GSSoC rank and Hacktoberfest achievements.",
      ],

    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative"
    >
      {/* Dotted background pattern */}
      <div
        className="absolute inset-0 pointer-events-none 
             bg-[radial-gradient(circle,hsla(0,0%,0%,0.86)_1px,transparent_1px)] 
             dark:bg-[radial-gradient(circle,hsla(0,0%,100%,0.8)_1px,transparent_1px)]"
        style={{
          backgroundSize: '25px 25px',
          opacity: 1
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-blue-900 dark:text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <VerticalTimeline>
          {experiences.map((exp, idx) => (
            <VerticalTimelineElement
              key={idx}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                boxShadow: "none",
                padding: "0",
              }}
              contentArrowStyle={{ borderRight: "7px solid rgb(59,130,246)" }} // blue-500
              // date={exp.duration}
              iconStyle={{
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)", // blue to cyan
                color: "#fff",
                boxShadow: "0 4px 15px rgba(59,130,246,0.4)",
              }}
              icon={
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className="w-full h-full object-contain rounded-full p-2 bg-white"
                />
              }
            >
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-8 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
              >
                {/* Header Section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <BriefcaseIcon className="w-5 h-5" />
                      <span className="font-semibold text-lg">{exp.position}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                      {exp.company}
                    </h3>
                  </div>
                </div>

                {/* Duration + Location */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                  {exp.duration && (
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-purple-500" />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                  )}
                  {exp.location && (
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4 text-green-500" />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  )}
                </div>

                {/* Description Points */}
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2 flex-shrink-0 shadow-md" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </VerticalTimelineElement>

          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;


