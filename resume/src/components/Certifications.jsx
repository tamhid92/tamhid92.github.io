import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Add your certification images to your project and import them here
import awsCert from '/awsCert.png';
// ...add more as needed

const certs = [
  { img: awsCert, alt: 'AWS Certified Developer - Associate' },
  // Add more certs as needed
];

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="certifications" className="py-20 px-4 container mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Certifications
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.alt}
              className="rounded-2xl overflow-hidden shadow-lg bg-gray-800 p-2 flex items-center justify-center w-36 h-36"
              whileHover={{ scale: 1.08, boxShadow: "0 8px 32px rgba(0,255,255,0.2)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * idx, duration: 0.4, ease: 'easeOut' }}
            >
              <img
                src={cert.img}
                alt={cert.alt}
                className="object-contain w-28 h-28"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
