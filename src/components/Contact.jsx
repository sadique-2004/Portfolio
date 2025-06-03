import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import TextField from '@mui/material/TextField';

import {
  EnvelopeIcon as MailIcon,
  PhoneIcon,
  MapPinIcon as LocationMarkerIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: '04d49db6-2c13-4b08-81e5-bcf5fd8222a4',
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: formData.name,
            subject_line: formData.subject
          })
        });

        const result = await response.json();
        if (result.success) {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contactInfo = [
    {
      icon: MailIcon,
      title: 'Email',
      content: 'mdsadique044234@gmail.com',
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '+91 9608025106',
    },
    {
      icon: LocationMarkerIcon,
      title: 'Location',
      content: 'Patepur, Vaishali, Bihar, 843114, India',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Feel free to reach out. I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 flex-grow">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    {item.title === 'Email' ? (
                      <a
                        href={`mailto:${item.content}`}
                        className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {item.content}
                      </a>
                    ) : item.title === 'Phone' ? (
                      <a
                        href={`tel:${item.content}`}
                        className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8"
          >


            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              <ReplyAllOutlinedIcon className='text-blue-500' /> Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <TextField
                id="name"
                name="name"
                type="text"
                size="small"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                label="Name"
                fullWidth variant="outlined"
                error={Boolean(errors.name)}  // Highlights the field in red if error exists
                helperText={errors.name || ''} // Displays error message below the field
                inputProps={{ pattern: "[A-Za-z ]*" }}
              />

              <TextField
                // type="email"
                id="email"
                name="email"
                size="small"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                label="Email"
                fullWidth variant="outlined"
                error={Boolean(errors.email)}  // Highlights the field in red if error exists
                helperText={errors.email || ''} // Displays error message below the field
              />

              <TextField
                id="subject"
                name="subject"
                type="text"
                size="small"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Collaboration Opportunity"
                label="Subject"
                fullWidth variant="outlined"
                error={Boolean(errors.subject)}  // Highlights the field in red if error exists
                helperText={errors.subject || ''} // Displays error message below the field
                inputProps={{ pattern: "[A-Za-z ]*" }}
              />

              <TextField
                id="message"
                name="message"
                label="Message"
                multiline
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Sadique, I came across your portfolio and I'm impressed with your work. I'd love to discuss a potential collaboration on..."
                fullWidth
                variant="outlined"
                error={Boolean(errors.message)}
                helperText={errors.message || ""}
              />


              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg text-white font-medium ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                    } transition-colors duration-300`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

              </div>
            </form>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mt-4 p-4 rounded-lg ${submitStatus === 'success'
                    ? 'bg-green-50 dark:bg-green-900'
                    : 'bg-red-50 dark:bg-red-900'
                    }`}
                >
                  <div className="flex items-center">
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircleIcon className="h-5 w-5 text-green-400" />
                        <p className="ml-3 text-sm text-green-800 dark:text-green-200">
                          Message sent successfully! I'll get back to you soon.
                        </p>
                      </>
                    ) : (
                      <>
                        <XCircleIcon className="h-5 w-5 text-red-400" />
                        <p className="ml-3 text-sm text-red-800 dark:text-red-200">
                          Oops! Something went wrong. Please try again later.
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${submitStatus === 'success'
              ? 'bg-green-100 dark:bg-green-800'
              : 'bg-red-100 dark:bg-red-800'
              }`}
          >
            <div className="flex items-center space-x-2">
              {submitStatus === 'success' ? (
                <CheckCircleIcon className="h-6 w-6 text-green-600 dark:text-green-200" />
              ) : (
                <XCircleIcon className="h-6 w-6 text-red-600 dark:text-red-200" />
              )}
              <p className={`text-sm ${submitStatus === 'success'
                ? 'text-green-700 dark:text-green-200'
                : 'text-red-700 dark:text-red-200'
                }`}>
                {submitStatus === 'success'
                  ? 'Message sent successfully!'
                  : 'Failed to send message. Please try again.'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
