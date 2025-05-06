import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Add your skills here
const skillsList = [
  { name: 'Cloud Platforms', content: 'AWS, GCP, Azure' },
  { name: 'Containerization', content: 'Docker, Kubernetes, Helm' },
  { name: 'Databases', content: 'PostgreSQL, MongoDB, RDS' },
  { name: 'Networking', content: 'TCP/IP, DNS, HTTP' },
  { name: 'Scripting', content: 'Python, Bash, PowerShell, Ruby' },
  { name: 'Infrastructure as Code', content: 'Terraform, Ansible, Chef, Pulumi' },
  { name: 'Continuous Integration/Continuous Deployment', content: 'Jenkins, GitHub Actions' },
  { name: 'Monitoring and Logging', content: 'Prometheus, Grafana, Datadog' },
  { name: 'Version Control', content: 'Git, GitHub, Bitbucket' },
  { name: 'Operating Systems', content: 'Linux (Ubuntu, CentOS), Windows Server' }
  // Add more skills
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation of children
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Skills
        </h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {skillsList.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-gray-700/50 p-6 rounded-lg shadow-md"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)" }} // Cool hover effect
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-100">{skill.name}</h2>
              <h4 className="text-lg text-gray-300">{skill.content}</h4>
               {/* Optional: Add text percentage */}
               {/* <p className="text-right text-sm text-cyan-300 mt-1">{skill.level}%</p> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;