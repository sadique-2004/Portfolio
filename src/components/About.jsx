import React from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, CommandLineIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import boltIcon from "../assets/icons/bolt ai logo.png"
import lovableIcon from "../assets/icons/lovable-logo-icon.svg"
import claudeIcon from "../assets/icons/claude-color.svg"
import cursorIcon from "../assets/icons/cursor.svg"
import chatGptIcon from "../assets/icons/ChatGPT-Logo.svg"
import perplexityIcon from "../assets/icons/perplexity-ai-seeklogo.svg"


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
import Achievements from "./Achievements";

const aiTools = [
  chatGptIcon,
  claudeIcon,
  lovableIcon,
  boltIcon,
  cursorIcon,
  perplexityIcon,
];


const achievements = [
  {
    title: "Frontend Domination Hackathon",
    subtitle: "Ranked 3rd | Team Lead | Book Tracker System Track",
    description:
      "Led a team to build the frontend end-to-end using React—no templates, no shortcuts. Competed against 300+ participants and secured 3rd place, demonstrating leadership, teamwork, and strong frontend skills.",
    icon: faTrophy,
    link: "https://www.linkedin.com/posts/mdsadique5_i-joined-an-online-hackathon-called-frontend-activity-7357405754984693761-NNwf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuBF8gBtYbQhRPJIF4Cx50ONtBHZpmX93w",
  },
  {
    title: "Story Builder Hackathon",
    subtitle: "Web3 Hackathon | Frontend Developer",
    description:
      "Developed the frontend for DecentraVault MVP – a decentralized DigiLocker. Learned on-chain IP, shared our idea, got a Story Protocol T-shirt, and connected with amazing mentors.",
    icon: faTrophy,
    link: "https://www.linkedin.com/posts/mdsadique5_web3-buildwithstory-storyprotocol-activity-7331790527148789760-qZ_D?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuBF8gBtYbQhRPJIF4Cx50ONtBHZpmX93w",
  },
  {
    title: "BuildIt Tour 2.0 – Microsoft",
    subtitle: "Tech Event Attendee | AI Exploration",
    description:
      "Explored Agentic AI concepts and the Microsoft campus. Connected with SDEs, felt inspired by the environment, and motivated to keep building.",
    icon: faTrophy,
    link: "https://www.linkedin.com/posts/mdsadique5_microsoft-buildittour-ai-activity-7363781840584822784-mjUy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuBF8gBtYbQhRPJIF4Cx50ONtBHZpmX93w",
  },
  {
    title: "Introduction to Blockchain & Anryton",
    subtitle: "Event Organizer | College Event",
    description:
      "Organized a hands-on blockchain session for 170+ participants in collaboration with HackTour IND. Facilitated P2P token transfers and networking opportunities.",
    icon: faTrophy,
    link: "https://www.linkedin.com/posts/mdsadique5_blockchain-web3-cryptoevents-activity-7330833593478393857-l_0o?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuBF8gBtYbQhRPJIF4Cx50ONtBHZpmX93w",
  },
  {
    title: "Core Nexus Hackathon",
    subtitle: "Lead Volunteer | Web3 Event",
    description:
      "Assisted 200+ hackers by providing real-time tech support, helping with Git/GitHub setup, and coordinating workflows. Led a volunteer team of 15–20, ensuring smooth execution and supporting participants throughout the hackathon.",
    icon: faTrophy,
    link: "https://www.linkedin.com/posts/mdsadique5_corenexus-web3spell-hackathonvibes-activity-7321047148953780224-0z5V?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuBF8gBtYbQhRPJIF4Cx50ONtBHZpmX93w",
  },
];




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
  const [showMore, setShowMore] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const naviagte = useNavigate();
  const handleNavigate = () => {
    naviagte("/memories");
  };

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "Js (ES6)", icon: "devicon-javascript-plain colored" },
        { name: "React.js", icon: "devicon-react-original colored" },
        { name: "React Router", icon: "devicon-reactrouter-plain colored" },
        { name: "Vite", icon: "devicon-vitejs-plain colored" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "Framer Motion", icon: "devicon-figma-plain colored" },
        { name: "Material UI", icon: "devicon-materialui-plain colored" },
      ],
      icon: CodeBracketIcon,
    },
    {
      category: "Programming & Backend",
      icon: Icon,    // <-- for Iconify icons
      items: [
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", icon: "devicon-express-original colored" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "Mongoose", icon: "devicon-mongoose-original colored" },
        { name: "My_SQL", icon: "devicon-mysql-plain colored" },
        { name: "REST API", icon: "mdi:api" },               // API icon
        { name: "Cloudinary", icon: "simple-icons:cloudinary" },    // Cloudinary logo
      ],
      icon: CommandLineIcon,
    },
    {
      category: "Tools, Cloud & Deployment",
      items: [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-original colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "Postman", icon: "devicon-postman-plain colored" },
        { name: "Hoppscotch", icon: "devicon-hoppscotch-plain colored" },
        { name: "npm", icon: "devicon-npm-original-wordmark colored" },
        // { name: "Webpack", icon: "devicon-webpack-plain colored" },
        { name: "Netlify", icon: "devicon-netlify-plain colored" },
        { name: "Vercel", icon: "devicon-vercel-original colored" },
        // { name: "Firebase", icon: "devicon-firebase-plain colored" },
      ],
      icon: CodeBracketIcon,
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
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>


          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            {/* A passionate Full Stack Developer creating elegant solutions and meaningful web experiences. */}
            An AI-Augmented Full Stack Developer crafting elegant solutions and impactful web experiences
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <motion.img
              src={profileImage}
              alt="Md Sadique"
              className="w-64 h-64 rounded-full shadow-xl border-4 border-gradient-to-tr from-blue-500 to-cyan-400 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            />

            <div className="flex flex-col items-center md:items-start gap-6">
              <a
                href="/Md_Sadique_Software_Engineer_Resume.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faDownload} className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              {/* 
              <a
                href="https://www.linkedin.com/in/mdsadique5"
                target="_blank"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
              >
                Follow me on LinkedIn
              </a> */}
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-600 hover:scale-110 hover:shadow-lg transition-all duration-300"
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors duration-300"
                    />
                    <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-gray-600 dark:text-gray-400 transition-opacity duration-300">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Memories Section */}
              <a
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold 
              rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 focus:outline-none 
              focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 cursor-pointer "

                target="_blank"
                rel="noopener noreferrer"
                aria-label="View My Memories"
                onClick={handleNavigate}
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
          </div>




          <div className="mt-12 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <motion.h3
              className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              👋 Hi, I’m <span className="bg-gradient-to-r from-primary-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Md Sadique</span>
            </motion.h3>

            <div className="mt-10 max-w-4xl mx-auto space-y-8">
              <AnimatedText
                text="A <b>CSE’26 Undergrad</b> & <b> AI-Augmented Full-Stack Developer </b> 
                on a mission to break into the <b>Top 1% of Software Engineers</b>. 
                I specialize in building <b>modern, scalable web applications</b> using the <b>MERN stack</b> — crafting seamless experiences from frontend to backend."
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
              />



              {showMore && (
                <>
                  <AnimatedText
                    text="I’ve independently launched impactful projects like <b>HackChain Network</b>, taking them from <b>idea → design → deployment</b>. Along the way, I’ve organized <b>tech events</b> (170+ participants), served as <b>Core Technical Coordinator</b> at hackathons, and contributed to <b>open source</b> through <b>GirlScript Summer of Code</b> & <b>Hacktoberfest</b>."
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  />

                  <AnimatedText
                    text="Beyond coding, I thrive in <b>hackathons</b>, <b>open-source</b>, and <b>tech communities</b> — constantly pushing myself to learn, teach, and inspire. Currently, I’m scaling <b>HackChain Network</b> to deliver <b>AI-powered real-world solutions</b>."
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  />

                  <AnimatedText
                    text="When I’m not coding, you’ll find me at <b>tech events</b>, <b>exploring new technologies</b>, or <b>sharing knowledge</b> with the developer community. My mantra: <b>Build. Break. Learn. Repeat.</b>"
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  />

                  <AnimatedText
                    text="🤝 Let’s connect & create amazing things together!"
                    className="text-gray-600 dark:text-gray-300 font-semibold text-lg"
                  />
                </>
              )}

              {/* Toggle Button */}
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-primary-500 hover:text-primary-600 font-semibold"
                >
                  {showMore ? "Read Less ▲" : "Read More ▼"}
                </button>
              </div>


              {/* <motion.p
                className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                🚀 Currently following <span className="font-semibold text-yellow-500">Striver’s A2Z DSA Sheet</span>.
                It’s not about the number of problems solved, but about mastering
                <span className="font-semibold text-blue-500"> patterns & concepts</span> that matter in real interviews.
              </motion.p> */}

              {/* LeetCode Stats Card */}
              {/* <motion.div
                className="flex justify-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a href="https://leetcode.com/sadique_Dev/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://leetcard.jacoblin.cool/sadique_Dev?theme=dark&font=Syne&ext=heatmap"
                    alt="LeetCode Stats"
                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700"
                  />
                </a>
              </motion.div> */}
            </div>
          </div>

        </motion.div>


        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
            Skills & Technologies
          </h3>

          {/* Toggle Button */}
          <div className="flex justify-center mb-6">
            <button
              className="px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Hide Skills" : "Show Skills"}
            </button>
          </div>

          {/* Category Headings */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700"
              >
                {/* Category Heading */}
                <div className="flex items-center mb-2">
                  <skillCategory.icon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white tracking-wide">
                    {skillCategory.category}
                  </h4>
                </div>

                {/* Skills Grid: only show if isOpen */}
                {isOpen && (
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 mt-2">
                    {skillCategory.items.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center p-2 rounded-lg bg-gradient-to-tr from-gray-50/80 to-gray-100/40 dark:from-gray-700/40 dark:to-gray-800/40 shadow-sm hover:shadow-lg transition"
                      >
                        {typeof item.icon === "string" ? (
                          item.icon.startsWith("devicon-") ? (
                            <i className={`${item.icon} text-3xl`} />
                          ) : (
                            <Icon icon={item.icon} className="text-3xl" />
                          )
                        ) : (
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-8 h-8 object-contain"
                          />
                        )}

                        <span className="text-[10px] text-gray-700 dark:text-gray-300 mt-1 text-center">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>


        <div className="mt-16 relative overflow-hidden">
          <h3 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
            AI Tools I Use
          </h3>

          <div className="relative mx-auto w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] overflow-hidden">
            <div className="flex justify-center items-center space-x-10 animate-scroll">
              {aiTools.concat(aiTools).map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt={`AI Tool ${index}`}
                  className="w-10 h-10 object-contain opacity-90 hover:opacity-100 transition-transform duration-300 hover:scale-110"
                />
              ))}
            </div>

            {/* Gradient fade edges for smooth transition */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent" />
          </div>
        </div>



        {/* Hackathons & Highlights Section */}
        <div className="hidden md:block ">
          <Achievements achievements={achievements} />
        </div>





      </div>
    </section>
  );
};

export default About;
