import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js). I'm also proficient in modern frontend technologies like Tailwind CSS, Framer Motion for animations, and various other JavaScript libraries. Additionally, I have experience with responsive design, API integration, and version control using Git."
    },
    {
      question: "Are you available for freelance projects?",
      answer: "Yes! I'm open to freelance opportunities, particularly in web development and full-stack projects. I can help with building responsive websites, web applications, or enhancing existing platforms. Feel free to reach out through the contact form above to discuss your project needs."
    },
    {
      question: "How do you approach new projects?",
      answer: "My approach to new projects involves several key steps: First, I thoroughly understand the requirements and objectives through detailed discussion. Then, I create a structured plan including technology stack selection, architecture design, and timeline. During development, I maintain regular communication, implement features iteratively, and ensure high code quality through testing and best practices."
    },
    {
      question: "Do you contribute to open source projects?",
      answer: "Yes, I actively participate in open source contributions! I've contributed to GirlScript Summer of Code 2024 and HacktoberFest 2024. These experiences have helped me collaborate with developers worldwide, improve my coding skills, and give back to the developer community. You can check out my contributions on my GitHub profile."
    },
    {
      question: "How can I collaborate with you?",
      answer: "There are several ways to collaborate! You can reach out through the contact form above, connect with me on LinkedIn, or check out my GitHub profile. I'm open to project discussions, mentorship opportunities, code reviews, or just general networking within the tech community. Don't hesitate to start a conversation!"
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some common questions about my work and experience
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="text-left font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white dark:bg-gray-800">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
