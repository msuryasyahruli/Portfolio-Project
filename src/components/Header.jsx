import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("profile");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["profile", "about", "skills", "projects", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveItem(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (item) => {
    setIsOpen(false);
    setActiveItem(item.toLowerCase());
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full bg-[#081b29]/35 backdrop-blur-lg z-50 transition-all duration-300 ${
        isOpen ? "h-screen" : "h-16"
      } `}
    >
      <div className="flex justify-between px-4 container m-auto h-full sm:flex-col">
        <div className="w-full min-h-16 flex justify-between items-center">
          <p className="text-2xl font-semibold">𐰀𐰃</p>
          <button
            className="h-8 font-semibold text-lg rounded-lg md:hidden lg:hidden"
            onClick={handleClick}
          >
            {isOpen ? (
              <FiX className="w-8 h-8" />
            ) : (
              <FiMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center h-full ${!isOpen && "sm:hidden"}`}
        >
          <nav className="flex sm:flex-col w-full text-center">
            {["Profile", "About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className={`text-lg font-medium px-4 py-2 transition-colors duration-200 w-full hover:bg-black/25 rounded-xl ${
                  activeItem === item.toLowerCase()
                    ? "text-[#00abf0] font-bold"
                    : "hover:text-[#00abf0]"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
