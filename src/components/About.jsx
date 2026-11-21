import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#00abf0] text-[#081b29] rounded-[2rem] mx-3 md:mx-6"
    >
      <div className="container m-auto flex items-center sm:flex-col p-8 md:p-16 gap-12 max-w-6xl">
        <img
          src={require("../assets/profile/pic3.jpeg")}
          alt="profile"
          className="w-full max-w-sm rounded-2xl mx-auto shadow-2xl shadow-[#081b29]/20"
        />
        <div className="text-[#081b29] rounded-lg max-w-2xl">
          <p className="text-4xl font-semibold mb-5 border-b-2 border-[#081b29] pb-3">
            About me
          </p>
          <p>
            I am a vocational school graduate majoring in Computer and Network
            Engineering (TKJ) who has a passion and ability in web and mobile
            development. Through the experience of attending the boot camp
            program at Pijarcamp, I have developed skills as a Fullstack Web and
            Mobile Developer. During the boot camp, I completed several projects
            which included developing e-commerce websites, job portals, and food
            recipes. I am committed to continuing to learn and grow in the field
            of technology and am ready to contribute to the development of
            innovative and solution projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
