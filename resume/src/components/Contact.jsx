import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut'} },
    };

  // Basic form handling (no actual submission logic here)
  // For real use, you'd need a backend or a service like Formspree/Netlify Forms
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (demo only)! You would need backend logic here.');
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto max-w-2xl text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">Get In Touch</h2>
        <p className="text-gray-300 mb-10 text-lg">
          Have a question or want to work together? Feel free to reach out!
        </p>

        {/* Simple Contact Info (Alternative to form) */}
        <div className="">
             <a href="mailto:tamhidchowdhury@gmail.com" className=""><MdEmail/>tamhidchowdhury@gmail.com</a>
             <a href="https://linkedin.com/in/tamhidchowdhury" target="_blank" rel="noopener noreferrer"><FaLinkedin/>Tamhid Chowdhury</a>
             {/* Add GitHub, Twitter, etc. */}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;