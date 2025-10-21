
import React from "react";
import { motion } from "framer-motion";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      location: "Bhopal, Madhya Pradesh, India",
      duration: "2023 - 2026",
      status: "Pursuing",
      description: [
        "Currently pursuing B.Tech in CSE with focus on modern software development and engineering principles.",
      ],
    },
    {
      degree: "Diploma",
      field: "Computer Science",
      institution: "School of Research & Technology (People University)",
      location: "Bhopal, Madhya Pradesh, India",
      duration: "2021 - 2023",
      status: "Completed",
      description: [
        "Successfully completed diploma in Computer Science with First Division and Distinction, demonstrating exceptional academic performance and technical proficiency.",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <AcademicCapIcon className="w-12 h-12 text-blue-500" />
            Education
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            My academic journey & qualifications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-400 dark:border-blue-600">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 pl-6 relative"
            >
              {/* Timeline dot */}
              <span className={`absolute -left-4 top-4 w-8 h-8 ${edu.status === "Completed" ? "bg-green-500" : "bg-yellow-500"} rounded-full border-4 border-white dark:border-gray-900 shadow-md`}></span>

              {/* Card */}
              <div className="p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {edu.degree} in {edu.field}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-left md:text-right">
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full px-2 md:px-4 py-1 text-sm font-semibold shadow-md">
                      {edu.duration}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 md:mt-0">
                      {edu.location}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0 ${edu.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 mt-3">
                  {edu.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1.5 text-blue-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-20 pt-16 border-t border-gray-200 dark:border-gray-700">
        <div className="inline-flex items-center space-x-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl px-8 py-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex -space-x-2">   
            <div className="w-12 h-12 bg-yellow-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
            <div className="w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
          </div>
          <div className="text-left">
            <p className="font-semibold text-gray-900 dark:text-white">Continuous Learning</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Always expanding knowledge and skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

