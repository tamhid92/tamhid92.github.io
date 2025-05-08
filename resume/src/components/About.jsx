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
              I'm Tamhid Chowdhury, a Cloud DevOps Engineer with over 7 years of experience designing, automating, and managing scalable infrastructure in both cloud and hybrid environments. I specialize in building secure, resilient CI/CD pipelines, infrastructure as code, and monitoring solutions that keep modern applications running smoothly.
            </p>
            <p>
              At Alvaria (formerly Aspect Software), I’ve led cloud migration initiatives, managed thousands of servers, and built multi-region deployment pipelines with support for global disaster recovery. I also like to sharpen my skills through hands-on projects involving Kubernetes, Terraform, Ansible, and monitoring stacks like Prometheus and Grafana.
            </p>
            <p>
            I'm passionate about solving complex problems with clean, automated solutions—and always eager to learn the next tool that makes systems faster, safer, or smarter. When I’m not deep in the terminal, you’ll likely find me staying active, playing soccer, or exploring new places through travel.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;