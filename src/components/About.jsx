import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#00abf0] min-h-screen flex justify-center items-center rounded-3xl"
    >
      <div className="container m-auto flex items-center sm:flex-col p-4 gap-6">
        <img
          src={require("../assets/profile/pic3.jpeg")}
          alt="profile"
          className="w-96 rounded-2xl mx-auto"
        />
        <div className="text-[#081b29] rounded-lg">
          <p className="text-4xl font-semibold mb-4 border-b-2 border-[#081b29]">
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
