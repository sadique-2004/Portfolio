import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faServer,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FaRegHandshake } from "react-icons/fa";
import {
  EnvelopeIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import TextField from "@mui/material/TextField";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // ✅ Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Web3Forms submission (using FormData)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const formDataObj = new FormData();
        formDataObj.append(
          "access_key",
          "04d49db6-2c13-4b08-81e5-bcf5fd8222a4"
        ); // your key
        formDataObj.append("name", formData.name);
        formDataObj.append("email", formData.email);
        formDataObj.append("subject", formData.subject);
        formDataObj.append("message", formData.message);

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataObj,
        });

        const result = await response.json();
        console.log("Web3Forms response:", result);

        if (result.success) {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setSubmitStatus("error");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const offerings = [
    {
      title: "Frontend Wizardry",
      description: "React.js • Modern UI/UX • Pixel-Perfect Responsive Design",
      icon: faCode,
    },
    {
      title: "Backend Magic",
      description: "Node.js • Express.js • MongoDB • APIs that never sleep",
      icon: faServer,
    },
    {
      title: "Available For",
      description: "Full-time Roles • Freelance Projects • Collabs with Devs",
      icon: faClock,
    },
  ];

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      content: "mdsadique044234@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=mdsadique044234@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-pulse pb-2 drop-shadow-md">
            Let’s Build Something Legendary!
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you’re an{" "}
            <span className="font-semibold text-blue-600">
              HR hunting talent
            </span>
            , a{" "}
            <span className="font-semibold text-cyan-500">
              client with a big idea
            </span>
            , or a{" "}
            <span className="font-semibold text-purple-500">
              developer craving collaboration
            </span>{" "}
            — my inbox is wide open. Let’s turn your vision into reality.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Offerings & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="w-6 h-6 mr-3 text-blue-500"
                />
                Why Choose Me?
              </h3>
              <div className="space-y-4">
                {offerings.map((offering, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <FontAwesomeIcon
                      icon={offering.icon}
                      className="h-6 w-6 text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {offering.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                📧 Reach Out Anytime
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <item.icon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    <span className="ml-4 text-base text-gray-700 dark:text-gray-200">
                      {item.content}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <ReplyAllOutlinedIcon className="text-blue-500" /> Shoot Me a
              Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <TextField
                name="name"
                label="Your Name"
                value={formData.name}
                placeholder="Enter your full name"
                onChange={handleChange}
                error={Boolean(errors.name)}
                helperText={errors.name || ""}
                fullWidth
                size="small"

                InputProps={{
                  style: {
                    color: "white",            // text color
                  },
                  classes: {
                    notchedOutline: "border-white", // border color in dark mode
                  },
                }}
                InputLabelProps={{
                  style: { color: "white" },   // label color
                }}
              />
              <TextField
                name="email"
                label="Email"
                value={formData.email}
                placeholder="example@domain.com"
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email || ""}
                fullWidth
                size="small"

                InputProps={{
                  style: {
                    color: "white",            // text color
                  },
                  classes: {
                    notchedOutline: "border-white", // border color in dark mode
                  },
                }}
                InputLabelProps={{
                  style: { color: "white" },   // label color
                }}
              />
              <TextField
                name="subject"
                label="Subject"
                value={formData.subject}
                placeholder="e.g. Hiring for a project, Collaboration idea"
                onChange={handleChange}
                error={Boolean(errors.subject)}
                helperText={errors.subject || ""}
                fullWidth
                size="small"

                InputProps={{
                  style: {
                    color: "white",            // text color
                  },
                  classes: {
                    notchedOutline: "border-white", // border color in dark mode
                  },
                }}
                InputLabelProps={{
                  style: { color: "white" },   // label color
                }}
              />
              <TextField
                name="message"
                label="Message"
                value={formData.message}
                placeholder="✍️ Write your message here (at least a few lines for clarity)"
                onChange={handleChange}
                error={Boolean(errors.message)}
                helperText={errors.message || ""}
                fullWidth
                multiline
                rows={4}

                className="dark:[&_.MuiOutlinedInput-root]:text-white 
                          dark:[&_.MuiInputLabel-root]:text-gray-200"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  "On the Way..."
                ) : (
                  <>
                    Let’s Talk <FaRegHandshake className="size-6" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
            className="fixed bottom-5 right-5 z-50"
          >
            <div
              className={`flex items-center p-4 rounded-lg shadow-lg text-white ${
                submitStatus === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {submitStatus === "success" ? (
                <CheckCircleIcon className="h-6 w-6 mr-2" />
              ) : (
                <XCircleIcon className="h-6 w-6 mr-2" />
              )}
              <p className="text-sm font-medium">
                {submitStatus === "success"
                  ? "😊 Got it! I’ll be in touch soon."
                  : "⚠️ Failed to send message."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
