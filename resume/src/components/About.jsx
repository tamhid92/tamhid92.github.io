import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Simple way to trigger animation on view

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2,    // Trigger when 20% of the element is visible
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 container mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center lg:text-left flex flex-col lg:flex-row items-center gap-10">
          <div className="text-lg text-gray-300 space-y-4">
            <p>
              Hello! I'm Tamhid, a passionate developer with a love for creating elegant and efficient solutions. I specialize in front-end development using technologies like React, Next.js, and Tailwind CSS.
            </p>
            <p>
              I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me [Your Hobby 1], [Your Hobby 2], or exploring the latest advancements in web technology.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;