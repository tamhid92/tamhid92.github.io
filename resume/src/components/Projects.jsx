import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Replace with your actual project data
const projectData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One. Focused on React and API integration.',
    imageUrl: '/images/project1.jpg', // CHANGE THIS PATH
    liveUrl: '#', // Link to live demo
    repoUrl: '#', // Link to GitHub repo
    tags: ['React', 'API', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Showcasing advanced CSS animations and responsive design.',
    imageUrl: '/images/project2.jpg', // CHANGE THIS PATH
    liveUrl: '#',
    repoUrl: '#',
    tags: ['HTML', 'CSS', 'JavaScript', 'Animation'],
  },
  // Add more projects
];

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    };

  return (
    <section id="projects" className="py-20 px-4 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Projects
      </h2>
      <motion.div
         ref={ref}
         variants={containerVariants}
         initial="hidden"
         animate={inView ? 'visible' : 'hidden'}
         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col"
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)" }} // Cool hover effect
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <img
              src={project.imageUrl} // Make sure paths are correct (e.g., in public/images/)
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2 text-gray-100">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-block bg-cyan-900/50 text-cyan-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex justify-between items-center">
                 <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-cyan-400 hover:text-cyan-300 font-medium transition-colors ${!project.liveUrl || project.liveUrl === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-disabled={!project.liveUrl || project.liveUrl === '#'}
                    onClick={(e) => (!project.liveUrl || project.liveUrl === '#') && e.preventDefault()}
                 >
                    Live Demo
                 </a>
                 <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 hover:text-cyan-400 transition-colors ${!project.repoUrl || project.repoUrl === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-disabled={!project.repoUrl || project.repoUrl === '#'}
                    onClick={(e) => (!project.repoUrl || project.repoUrl === '#') && e.preventDefault()}
                >
                     GitHub Repo
                 </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;