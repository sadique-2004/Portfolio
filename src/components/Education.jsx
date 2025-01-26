import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AcademicCapIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import diplomaImage from '../assets/images/diploma.jpg';
import btechImage from '../assets/images/btech.jpg';

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
      location: 'Bhopal, Madhya Pradesh, India',
      duration: '2023 - 2026',
      status: 'Pursuing',
      description: [
        'Currently pursuing B.Tech in CSE with focus on modern software development and engineering principles.',
        // 'Learning core computer science fundamentals',
        // 'Participating in coding competitions'
      ],
      // achievements: [
      //   'Learning core computer science fundamentals',
      //   'Participating in coding competitions'
      // ],
      certificate: btechImage
    },
    {
      degree: 'Diploma',
      field: 'Computer Science',
      institution: 'School of Research & Technology (People University)',
      location: 'Bhopal, Madhya Pradesh, India',
      duration: '2021 - 2023',
      status: 'Completed',
      description: [
        'Successfully completed diploma in Computer Science with First Division and Distinction, demonstrating exceptional academic performance and technical proficiency.',
        // 'Specialized in computer Science',
        // 'Completed multiple technical projects with excellence',
      ],
      // achievements: [
      //   'Graduated with First Division and Distinction',
      //   'Achieved outstanding academic performance'
      // ],
      certificate: diplomaImage
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={selectedCertificate}
                alt="Certificate Full View"
                className="w-full h-auto"
              />
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4 flex items-center justify-center">
            <AcademicCapIcon className="w-10 h-10 text-blue-500" />
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="lg:flex">
                {/* Information Section - 80% width */}
                <div className="lg:w-[80%] p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {edu.degree} in {edu.field}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-left md:text-right">
                      <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold">
                        {edu.duration}
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {edu.location}
                      </p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 ${edu.status === 'Completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300">
                    {edu.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {edu.achievements && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Certificate Image Section - 20% width */}
                {edu.certificate && (
                  <div className="lg:w-[20%] p-4 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                    <div
                      className="cursor-pointer relative group"
                      onClick={() => setSelectedCertificate(edu.certificate)}
                    >
                      <img
                        src={edu.certificate}
                        alt={`${edu.institution} Certificate`}
                        className="w-full h-auto object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Click to View</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
