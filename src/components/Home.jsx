import React from "react";
import { FiDownload, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Home = () => {
  return (
    <section
      id="profile"
      className="container mx-auto min-h-screen flex justify-center items-center p-4 pt-16 relative sm:items-start sm:flex-col"
    >
      <div className="max-w-[600px]">
        <p className="text-5xl font-bold sm:text-3xl mb-2">
          Hi, I'm Muhammad Surya Syahruli
        </p>
        <p className="text-3xl font-bold text-[#00abf0] sm:text-xl">
          Fullstack Web & Mobile Developer
        </p>
        <p>
          I am a Fullstack Web & Mobile Developer with experience in building
          various web and mobile applications. Skilled in React.js, Next.js,
          React Native, and modern technologies, I focus on creating efficient,
          responsive, and user-friendly digital solutions.
        </p>
        <div className="mt-2">
          <a
            href="https://github.com/msuryasyahruli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="me-2 p-1 rounded-md border border-[#00abf0] hover:bg-black">
              <FiGithub />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-surya-syahruli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="me-2 p-1 rounded-md border border-[#00abf0] hover:bg-[#0077B5]">
              <FiLinkedin />
            </button>
          </a>
          <a
            href="https://www.instagram.com/m_ss.18/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="me-2 p-1 rounded-md border border-[#00abf0] hover:bg-gradient-to-br from-[#4f5bd5] to-[#feda75]">
              <FiInstagram />
            </button>
          </a>
        </div>
        <a
          href="public/CV_MuhammadSuryaSyahruli.pdf"
          download="CV_MuhammadSuryaSyahruli.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00abf0] flex items-center gap-2 w-fit p-3 sm:p-2 mt-4 font-semibold text-[#081b29] rounded-lg hover:bg-[#00c4f0] active:scale-95 transition-transform"
        >
          <p>Download CV</p>
          <FiDownload />
        </a>
      </div>
      <div className="right-4 md:absolute sm:w-full h-full flex items-center sm:p-8">
        <img
          src={require("../assets/profile/pic4.jpeg")}
          alt="profile"
          className="w-96 mx-auto rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Home;
