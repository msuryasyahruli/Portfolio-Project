import React from "react";
import { FiDownload, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import pic from "../assets/profile/pic4.jpeg";

const Home = () => {
  return (
    <section
      id="profile"
      className="container mx-auto min-h-screen flex justify-center items-center p-4 pt-16 relative sm:items-start sm:flex-col"
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-[600px]"
      >
        <motion.p 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold sm:text-3xl mb-2"
        >
          Hi, I'm Muhammad Surya Syahruli
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl font-bold text-[#00abf0] sm:text-xl"
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
          className="mt-2"
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
          className="bg-[#00abf0] flex items-center gap-2 w-fit p-3 sm:p-2 mt-4 font-semibold text-[#081b29] rounded-lg hover:bg-[#00c4f0] active:scale-95 transition-transform"
        >
          <p>Download CV</p>
          <FiDownload />
        </a>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 1.2 }}
        className="right-4 md:absolute sm:w-full h-full flex items-center sm:p-8"
      >
        <img src={pic} alt="profile" className="w-96 mx-auto rounded-2xl" />
      </motion.div>
    </section>
  );
};

export default Home;
