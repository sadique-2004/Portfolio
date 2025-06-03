import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, CommandLineIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import {
  faGithub,
  faLinkedin,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faTrophy,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import profileImage from "../assets/images/profileImg.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const AnimatedText = ({ text, className }) => {
  const processText = (text) => {
    const segments = [];
    let currentText = "";
    let isBold = false;

    for (let i = 0; i < text.length; i++) {
      if (text.slice(i, i + 3) === "<b>") {
        if (currentText) segments.push({ text: currentText, bold: false });
        currentText = "";
        isBold = true;
        i += 2;
      } else if (text.slice(i, i + 4) === "</b>") {
        if (currentText) segments.push({ text: currentText, bold: true });
        currentText = "";
        isBold = false;
        i += 3;
      } else {
        currentText += text[i];
      }
    }
    if (currentText) segments.push({ text: currentText, bold: isBold });

    return segments;
  };

  const segments = processText(text);
  let wordIndex = 0;

  return (
    <p className={`${className} inline-block w-full`} lang="en">
      {segments.map((segment, segmentIndex) => {
        const words = segment.text.split(" ").filter((word) => word.length > 0);

        return words.map((word, i) => {
          const currentWordIndex = wordIndex++;
          const Wrapper = segment.bold ? "b" : "span";

          return (
            <motion.span
              key={`${segmentIndex}-${i}`}
              className="inline-block opacity-40"
              style={{ marginRight: "0.25em" }}
              initial={{ opacity: 0.4 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: currentWordIndex * 0.08,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                margin: "-20px",
                amount: 0.1,
              }}
            >
              <Wrapper>{word}</Wrapper>
            </motion.span>
          );
        });
      })}
    </p>
  );
};

const About = () => {
  const [showFullContent, setShowFullContent] = React.useState(false);

  const naviagte = useNavigate();
  const handleNavigate = () => {
    naviagte("/memories");
  };

  const skills = [
    {
      category: "Frontend Development",
      items: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
        "Framer Motion",
        "Material-UI",
      ],
      icon: CodeBracketIcon,
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express.js", "MongoDB", "SQL", "RESTful APIs"],
      icon: CommandLineIcon,
    },
    {
      category: "Tools & Version Control",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Hoppscatch",
        "npm",
        "Webpack",
      ],
      icon: CodeBracketIcon,
    },
    {
      category: "Cloud & Deployment",
      items: ["Netlify", "Vercel", "Firebase", "Hostinger"],
      icon: CodeBracketIcon,
    },
  ];

  const achievements = [
    {
      title: "Open Source Contributor",
      description:
        "Participant in GirlScript Summer of Code 2024 and HacktoberFest 2024. Where I actively contribute to various open-source repositories",
      icon: faTrophy,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mdsadique5",
      icon: faLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/sadique-2004",
      icon: faGithub,
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/md_sadique",
      icon: faHackerrank,
    },
    {
      name: "Linktree",
      url: "https://linktr.ee/Md_Sadique2004",
      icon: faLink,
    },
  ];

  return (
    <section id="about" className="pt-20 pb-5 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          {/* <div className="w-44 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div> */}
          {/* <div className='flex flex-row-reverse h-1 w-full px-[200px] top-0 bg-[#504953]'>

          </div> */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4 mb-4">
            A passionate Full Stack Developer with a love for creating elegant
            solutions and meaningful web experiences.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex-shrink-0"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-64  h-64 rounded-full object-left-bottom shadow-lg border-4 border-[#4793D0]"
              />
            </motion.div>

            <div className="flex flex-col items-center md:items-start gap-6">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faDownload} className="w-5 h-5 mr-2" />
                Download Resume
              </a>

              <a
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=mdsadique5"
                target="_blank"
              >
                Follow me on LinkedIn
              </a>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-gray-700 shadow-md 
                                 border border-gray-200 dark:border-gray-600 
                                 transform transition-all duration-300 
                                 hover:scale-110 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400"
                    >
                      <FontAwesomeIcon
                        icon={link.icon}
                        className="w-6 h-6 text-gray-600 dark:text-gray-300 
                                 group-hover:text-blue-500 dark:group-hover:text-blue-400 
                                 transition-colors duration-300"
                      />
                    </div>
                    <span
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                   text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap"
                    >
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <a
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 cursor-pointer mt-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View My Memories"
              onClick={handleNavigate} // This will navigate to the memories page
              // like after using react router dom i can add link and all now just need to improve the ui
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
              View My Memories
            </a>
          </div>

          <div className="mt-12 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <motion.h3
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0.4 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{
                once: true,
                margin: "-20px",
                amount: 0.1,
              }}
            >
              👋 Hello, I'm Md Sadique
            </motion.h3>

            <AnimatedText
              text="I specialize in building modern web applications using cutting-edge technologies. As a passionate full-stack developer with expertise in the <b>MERN stack</b>, I have a strong foundation in frontend and backend development, ensuring seamless user experiences and solving real-world problems."
              className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed md:block justify justify-text"
              style={{ textAlign: "justify" }}
            />

            {/* Mobile view content with read more */}
            <div className="md:hidden">
              {!showFullContent ? (
                <div>
                  <button
                    onClick={() => setShowFullContent(true)}
                    className="text-blue-600 dark:text-blue-400 font-medium mt-2 focus:outline-none hover:underline"
                  >
                    Read More
                  </button>
                </div>
              ) : (
                <>
                  <AnimatedText
                    text="I’ve independently launched impactful products like <b>HackChain Network</b>, <b>LearnMate</b>, and <b>Invoicify</b>, building everything from scratch — from design to deployment. I'm actively involved in the tech community — organizing events like the <b>Blockchain & Anryton Workshop</b> with HackTour IND (170+ participants) and volunteering as a <b>Core Technical Coordinator at Nexus Hackathon</b>. I regularly participate in hackathons and contribute to open source, including <b>GirlScript Summer of Code 2024</b> and <b>Hacktoberfest 2024</b>. Currently, I’m focused on scaling my products — <b>HackChain Network</b> and <b>LearnMate</b> — to deliver real-world impact through AI-powered solutions."
                    className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed justify justify-text"
                    style={{ textAlign: "justify" }}
                  />

                  <AnimatedText
                    text="When I'm not coding, you'll find me In tech-events,  exploring new technologies or sharing my knowledge with the developer community."
                    className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed justify justify-text"
                    style={{ textAlign: "justify" }}
                  />

                  <AnimatedText
                    text="Let's connect and create amazing things together! 🤝✨"
                    className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed justify justify-text"
                    style={{ textAlign: "justify" }}
                  />

                  <button
                    onClick={() => setShowFullContent(false)}
                    className="text-blue-600 dark:text-blue-400 font-medium mt-2 focus:outline-none hover:underline"
                  >
                    Read Less
                  </button>
                </>
              )}
            </div>

            {/* Desktop view - full content always visible */}
            <div className="hidden md:block">
              <AnimatedText
                text="I’ve independently launched impactful products like <b>HackChain Network</b>, <b>LearnMate</b>, and <b>Invoicify</b>, building everything from scratch — from design to deployment. I'm actively involved in the tech community — organizing events like the <b>Blockchain & Anryton Workshop</b> with HackTour IND (170+ participants) and volunteering as a <b>Core Technical Coordinator at Nexus Hackathon</b>. I regularly participate in hackathons and contribute to open source, including <b>GirlScript Summer of Code 2024</b> and <b>Hacktoberfest 2024</b>. Currently, I’m focused on scaling my products — <b>HackChain Network</b> and <b>LearnMate</b> — to deliver real-world impact through AI-powered solutions."
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed justify justify-text"
                style={{ textAlign: "justify" }}
              />

              <AnimatedText
                text="When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community."
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed justify justify-text"
                style={{ textAlign: "justify" }}
              />

              <AnimatedText
                text="Let's connect and create amazing things together! 🤝✨"
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed justify justify-text"
                style={{ textAlign: "justify" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: index * 0.2,
                      duration: 0.5,
                    },
                  },
                }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        {/* <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8 flex items-center justify-center gap-3">
            <FontAwesomeIcon icon={faTrophy} className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />
            Achievements
          </h3>
          <div className="max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.2,
                      duration: 0.5
                    }
                  }
                }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon
                    icon={achievement.icon}
                    className="h-8 w-8 text-yellow-500 dark:text-yellow-400 mr-3"
                  />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {achievement.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 pl-11">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
