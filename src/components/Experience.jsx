import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon as LocationMarkerIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const experiences = [


    {
      company: 'Orange Antelopes',
      position: 'Frontend Developer',
      duration: 'Dec 2024 - Present',
      location: 'Onsite',
      description: [
        'Working on production-level projects to deliver robust and scalable solutions.',
        'Enhancing web interfaces with modern frontend technologies for optimal performance.',
        'Learning from experienced developers through daily onsite collaboration and meetings.',
      ],
      
    },    

    {
      company: 'BlinkFind',
      position: 'Frontend Developer',
      duration: 'Sep 2024 - Present',
      location: 'Remote',
      description: [
        'Contributed significantly to building and optimizing the company website (BlinkFind), ensuring speed, scalability, and functionality.',
        'Developed responsive, high-performance web interfaces to enhance cross-device usability.',
        'Collaborated with teams to deliver innovative, user-focused solutions aligned with business objectives.',
      ],
      
    },

    // {
    //   company: 'GirlScript Summer of Code',
    //   position: 'Open Source Contributor',
    //   duration: 'Oct 2024 - Nov 2024 · 2 mos',
    //   location: 'Remote',
    //   description: [
    //     'Contributed to real-world open-source projects, focusing on collaboration and quality code delivery.',
    //     'Enhanced skills in Git, API development, and testing, while improving application functionality.',
    //     'Ranked 424 out of 60,000 participants with a score of 1000, showcasing dedication to open-source growth.',
    //   ],
    // },

    // {
    //   company: 'Hacktoberfest',
    //   position: 'Open Source Contributor',
    //   duration: 'Oct 2024 - Nov 2024 · 2 mos',
    //   location: 'Remote',
    //   description: [
    //     'Contributed to open-source projects by building responsive web pages using HTML, CSS, and JavaScript.',
    //     'Styled and optimized web interfaces with Bootstrap and Tailwind, ensuring a seamless user experience.',
    //     'Earned 2 Holopin badges out of 4 by contributing to meaningful projects and collaborating with fellow developers.',
    //   ],
    // },

    {
      company: 'Hacktoberfest & GirlScript Summer of Code',
      position: 'Open Source Contributor',
      duration: 'Oct 2024 - Nov 2024 · 2 mos',
      location: 'Remote',
      description: [
        'Delivered high-quality code to real-world open-source projects, collaborating globally with developers.',
        'Built and optimized responsive interfaces using HTML, CSS, Bootstrap, and Tailwind CSS.',
        'Enhanced skills in Git, API development, and testing while improving project functionality.',
        'Achieved a top rank (424/60,000) in GirlScript Summer of Code and earned 2 Holopin badges in Hacktoberfest.',
      ],
      
      
    }

  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-900 dark:to-dark-950 dooted-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-200 to-secondary-200 dark:from-dark-700 dark:to-dark-700" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />

                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
                      <BriefcaseIcon className="w-5 h-5" />
                      <span className="font-semibold">{exp.position}</span>
                    </div>

                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                      {exp.company}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-dark-600 dark:text-dark-400 mb-4">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LocationMarkerIcon className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="list-none space-y-2 text-dark-600 dark:text-dark-300">
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
