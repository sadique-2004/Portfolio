import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon as LocationMarkerIcon,
} from "@heroicons/react/24/outline";

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
        "Joined TAP Academy as a Technical Trainer, mentoring students in Computer Science fundamentals and software development.",
        "Contributing as a Full-Stack Developer to build, enhance, and maintain scalable applications using MERN stack and modern tools.",
        "Focused on empowering learners with practical coding knowledge, industry-relevant projects, and hands-on development experience.",
      ],
    },
    {
      company: "HackChain Network",
      logo: hackchainLogo,
      position: "Founder & Community Lead",
      duration: "March 2025 – Present",
      location: "India",
      description: [
        "Founded HackChain Network — a developer-first tech community built to inspire, educate, and empower developers through events, resources, and collaboration.",
      ],
    },
    {
      company: "Hacktoberfest & GirlScript Summer of Code",
      logo: gssocLogo,
      position: "Open Source Contributor",
      duration: "Oct 2024 - Nov 2024 · 2 mos",
      location: "Remote",
      description: [
        "Delivered high-quality code to real-world open-source projects, collaborating globally with developers.",
        "Built and optimized responsive interfaces using HTML, CSS, JS, Bootstrap, and Tailwind CSS.",
        "Enhanced skills in Git, API development, and testing while improving project functionality.",
        "Achieved a top rank (424/60,000) in GirlScript Summer of Code and earned 4 badges in Hacktoberfest.",
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 hidden lg:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Logo on the timeline */}
                <motion.div
                  className="absolute lg:left-1/2 left-8 transform -translate-x-1/2 -translate-y-4 lg:translate-y-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg border-4 border-blue-100 dark:border-gray-700 overflow-hidden flex items-center justify-center z-20"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 object-contain"
                  />
                </motion.div>

                {/* Card with proper margins */}
                <div
                  className={`mt-12 lg:mt-0 w-full lg:w-5/12 ${index % 2 === 0
                      ? "lg:mr-auto lg:pr-16" // Right side with margin from timeline
                      : "lg:ml-auto lg:pl-16" // Left side with margin from timeline
                    }`}
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300"
                  >
                    {/* Position and Company */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 mb-2">
                          <BriefcaseIcon className="w-5 h-5" />
                          <span className="font-semibold text-lg">{exp.position}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.company}
                        </h3>
                      </div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-purple-500" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LocationMarkerIcon className="w-4 h-4 text-green-500" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;