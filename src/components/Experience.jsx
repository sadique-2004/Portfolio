import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon as LocationMarkerIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const experiences = [
    {
      company: 'BlinkFind',
      position: 'Frontend Developer',
      duration: 'Sep 2024 - Present',
      location: 'Remote',
      description: [
        'Crafted responsive and high-performance web interfaces, enhancing usability across devices.',
        'Optimized application speed and scalability through modern frontend technologies.',
        'Collaborated with teams to deliver innovative, user-focused solutions aligned with business goals.',
      ],
    },
       
    {
      company: 'GirlScript Summer of Code',
      position: 'Open Source Contributor',
      duration: 'Oct 2024 - Nov 2024 · 2 mos',
      location: 'Remote',
      description: [
        'Contributed to real-world open-source projects, focusing on collaboration and quality code delivery.',
        'Enhanced skills in Git, API development, and testing, while improving application functionality.',
        'Ranked 424 out of 60,000 participants with a score of 1000, showcasing dedication to open-source growth.',
      ],
    },
    
    {
      company: 'Hacktoberfest',
      position: 'Open Source Contributor',
      duration: 'Oct 2024 - Nov 2024 · 2 mos',
      location: 'Remote',
      description: [
        'Contributed to open-source projects by building responsive web pages using HTML, CSS, and JavaScript.',
        'Styled and optimized web interfaces with Bootstrap and Tailwind, ensuring a seamless user experience.',
        'Earned 2 Holopin badges out of 4 by contributing to meaningful projects and collaborating with fellow developers.',
      ],
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full" />

                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                      <BriefcaseIcon className="w-5 h-5" />
                      <span className="font-semibold">{exp.position}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.company}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LocationMarkerIcon className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
