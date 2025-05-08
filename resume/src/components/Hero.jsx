import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// You'll need a background image. Place it in public/ or src/assets/
// Example using public folder: '/images/hero-background.jpg'
// Example using src/assets: import heroBg from '../assets/hero-background.jpg';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger once
    threshold: 0.2,     // Trigger when 20% of the element is visible
  });

  return (
    <ParallaxBanner style={{ aspectRatio: '2 / 1', height: '100vh' }}>
      {/* --- Background Layer --- */}
      <ParallaxBannerLayer
        image="/background1.jpg" // CHANGE THIS PATH
        speed={-150}
        className="bg-cover"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px) brightness(0.7)',
        }}
      />

      {/* --- Content Layer --- */}
      <ParallaxBannerLayer className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center text-white px-4"
        >
          {/* Optional: Add a profile picture here */}
          <div className='flex justify-center bg-origin-padding' ref={ref}> {/* Attach the ref here */}
            <motion.img
              src="/profile.jpg" // CHANGE THIS
              alt="Tamhid"
              className=" w-90 h-60 rounded-full object-cover shadow-lg mb-6 lg:mb-0"
              initial={{ scale: 1, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }} // Animate out when not in view
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">Tamhid</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-300">
            Cloud DevOps Engineer | Automating Infrastructure, Scaling Systems, Enabling Resilience
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#22d3ee" /* cyan-500 */ }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://github.com/tamhid92', '_blank')}
            className="bg-cyan-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-cyan-300 transition-all duration-300"
          >
            Check out my GitHub
          </motion.button>
        </motion.div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Hero;