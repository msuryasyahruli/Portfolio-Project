import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Loader from "./Loader";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
  
    window.addEventListener("load", handleLoad);
  
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-svh flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
