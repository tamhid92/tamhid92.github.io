import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XMarkIcon } from '@heroicons/react/24/solid';

const projectData = [
  {
    id: 1,
    title: 'Home Lab',
    description: 'A fully automated, production-grade infrastructure built from the ground up to showcase my skills in infrastructure automation, Kubernetes, CI/CD, and observability.',
    imageUrl: 'projects/homelab.png', 
    repoUrl: 'https://github.com/yourusername/homelab-showcase',
    details: 'Every Proxmox VM in the environment is built from a custom Ubuntu cloud image, optimized for automation and security. Provisioning and configuration is entirely handled via Terraform and Ansible. All infrastructure is declarative and reproducible, which speeds up the deployment process. The Kubernetes cluster is set up with a custom CNI and ingress controller, and all applications are deployed in Docker. CI/CD pipelines are implemented using Jenkins, with automated testing and deployment processes. Monitoring and observability are achieved through Grafana and Prometheus using custom exporters, providing real-time insights into system performance.',
    technologies: ['Ansible', 'Terraform', 'Proxmox', 'Docker', 'Kubernetes', 'Jenkins', 'Grafana', 'Prometheus', 'Python', 'Ngnix Proxy Manager'],
  },
  {
    id: 2,
    title: 'Cert Deployer',
    description: 'CI\CD pipeline for deploying SSL certificates to multiple servers using Jenkins, Ansible, and Python.',
    imageUrl: '/projects/cert.svg',
    repoUrl: '#',
    details: 'Designed and implemented a robust, multi-stage CI/CD pipeline for the automated deployment of SSL certificates across a fleet of 2,000+ servers. Leveraging Jenkins for orchestration and Ansible for configuration management, the pipeline integrates Python automation to seamlessly procure certificates from DigiCert, replicate them for multi-tenant customer environments, and ensure secure handling throughout the process. Certificates are encrypted and stored in HashiCorp Vault, then programmatically propagated to Chef cookbooks and integrated into customer-facing applications during scheduled cutovers. The architecture is built for high scalability and strict security compliance, with end-to-end automation including real-time monitoring and alerting for certificate lifecycle events, such as impending expirations.',
    technologies: ['Jenkins', 'Ansible', 'Chef', 'Python', 'DigiCert API', 'HashiCorp Vault'],
  },
  {
    id: 3,
    title: 'Customer Migration',
    description: 'Customer migration to AWS cloud infrastructure with CI/CD pipelines and Ansible playbooks for reverse proxy configuration.',
    imageUrl: '/projects/migration.png',
    repoUrl: '#',
    details: 'Led the cloud migration of customer-dedicated reverse proxies from on-premises infrastructure to AWS, supporting high-availability and disaster recovery across multiple regions. Designed CI/CD pipelines using Jenkins and Terraform to provision infrastructure, update Route 53 DNS records, and automate deployment. Developed Ansible playbooks to configure IIS-based reverse proxies and re-point customer applications to the new cloud endpoints, ensuring minimal downtime and seamless service continuity.',
    technologies: ['EC2', 'Route 53', 'Terraform', 'Ansible', 'IIS', 'Jenkins'],
  }
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Handle Escape key press to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.body.addEventListener('keydown', handleEsc);
    return () => {
      document.body.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);


  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2} },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: "-50px" },
    visible: {
      opacity: 1,
      scale: 1,
      y: "0px",
      transition: { type: 'spring', stiffness: 300, damping: 25},
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: "50px",
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      key="projectModalBackdrop" // Unique key for AnimatePresence
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose} // Close modal when backdrop is clicked
    >
      <motion.div
        className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        variants={modalVariants}
        // initial, animate, exit are implicitly handled by being variants of this motion component
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside modal content
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 p-1 rounded-full hover:bg-gray-700"
          aria-label="Close project details"
        >
          <XMarkIcon className="h-7 w-7 sm:h-8 sm:w-8" />
        </button>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-cyan-400 pr-10">{project.title}</h2>
        <div className="w-full aspect-video overflow-hidden rounded-md mb-6 shadow-lg bg-gray-700">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2">About this project:</h3>
          <p className="text-gray-300 whitespace-pre-line text-sm sm:text-base">{project.details}</p>
        </div>

        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-cyan-600 text-cyan-100 px-3 py-1 text-xs sm:text-sm rounded-full shadow">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.repoUrl && project.repoUrl !== '#' && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow hover:shadow-md text-sm sm:text-base"
          >
            View GitHub Repo
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once when it comes into view
    threshold: 0.1,   // 10% of the component is visible
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Stagger children animations
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.1, ease: 'easeOut' } },
  };

  const handleCardClick = (projectId) => {
    setSelectedProjectId(projectId);
    document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
  };

  const handleCloseModal = () => {
    setSelectedProjectId(null);
    document.body.style.overflow = 'auto'; // Restore background scroll
  };

  const selectedProject = projectData.find(p => p.id === selectedProjectId);

  return (
    <>
      <section id="projects" className="py-16 sm:py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 sm:mb-8 text-cyan-400"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 mb-16 text-md"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Heres a selection of projects completed at Alvaria (formerly Aspect Software) and through personal initiative, aimed at practicing and advancing my skills in cloud infrastructure, automation, and DevOps engineering.
          </motion.p>
          <motion.div
            ref={ref} // Attach the ref for intersection observer
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'} // Animate when inView is true
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            {projectData.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants} // Apply item animation variants
                className="bg-gray-800 rounded-xl shadow-xl overflow-hidden flex flex-col group cursor-pointer transform transition-all hover:shadow-cyan-500/30"
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.1 }}
                onClick={() => handleCardClick(project.id)}
                tabIndex={0} // Make it focusable
                onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick(project.id)} // Keyboard accessibility
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4 flex-grow line-clamp-3">{project.description}</p>
                  <div className="mt-auto pt-2 border-t border-gray-700/50 flex justify-end items-center">
                     <span className="text-sm text-cyan-500 group-hover:text-cyan-300 font-medium transition-colors duration-100">
                       View Details &rarr;
                     </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal Rendering */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectModal key={selectedProject.id} project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;