import React from "react";
import { FiDownload, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import pic from "../assets/profile/pic4.jpeg";

const Home = () => {
  return (
    <section
      id="profile"
      className="hero container mx-auto min-h-screen flex justify-between gap-12 items-center p-4 pt-24 relative lg:flex-col lg:justify-center lg:text-center"
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="hero-copy max-w-[650px] lg:order-2"
      >
        <motion.p 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title text-6xl font-bold leading-[1.05] tracking-tight sm:text-4xl mb-4"
        >
          Hi, I'm Muhammad Surya Syahruli
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-role text-2xl font-bold text-[#00abf0] sm:text-lg"
        >
          Fullstack Web & Mobile Developer
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I am a Fullstack Web & Mobile Developer with experience in building
          various web and mobile applications. Skilled in React.js, Next.js,
          React Native, and modern technologies, I focus on creating efficient,
          responsive, and user-friendly digital solutions.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-socials mt-6 flex gap-3 lg:justify-center"
        >
          <a href="https://github.com/msuryasyahruli" target="_blank" rel="noopener noreferrer">
            <button className="me-2 p-1 rounded-md border border-[#00abf0] hover:bg-black">
              <FiGithub />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-surya-syahruli/" target="_blank" rel="noopener noreferrer">
            <button className="me-2 p-1 rounded-md border border-[#00abf0] hover:bg-[#0077B5]">
              <FiLinkedin />
            </button>
          </a>
          <a href="https://www.instagram.com/m_ss.18/" target="_blank" rel="noopener noreferrer">
            <button className="me-2 p-1 rounded-md border border-[#00abf0] hover:bg-gradient-to-br from-[#4f5bd5] to-[#feda75]">
              <FiInstagram />
            </button>
          </a>
        </motion.div>
        <a
          href="https://drive.google.com/file/d/1aUubEASo_56z9PT_IbpUAUHtFJVX2w7U/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00abf0] inline-flex items-center gap-2 p-3 sm:p-2 mt-6 font-semibold text-[#081b29] rounded-full hover:bg-[#00c4f0] active:scale-95 transition-transform lg:mx-auto"
        >
          <p>Download CV</p>
          <FiDownload />
        </a>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 1.2 }}
        className="hero-visual w-[min(42vw,420px)] lg:order-1 sm:w-[min(72vw,320px)]"
      >
        <div className="portrait-card rounded-[2rem] bg-gradient-to-br from-[#00abf0] to-transparent p-1 shadow-2xl shadow-cyan-950/40">
          <img src={pic} alt="profile" className="aspect-square w-full rounded-[1.85rem] object-cover" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
