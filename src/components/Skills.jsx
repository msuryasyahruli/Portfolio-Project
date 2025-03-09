import React from "react";
import { FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiPostgresql, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const listSkill = [
    {
      title: "Figma",
      subTitle: "Design Tool",
      icon: <FaFigma />,
    },
    {
      title: "CSS",
      subTitle: "User Interface",
      icon: <IoLogoCss3 />,
    },
    {
      title: "Javascript",
      subTitle: "interaction",
      icon: <IoLogoJavascript />,
    },
    {
      title: "NodeJS",
      subTitle: "Web Server",
      icon: <FaNodeJs />,
    },
    {
      title: "ExpressJS",
      subTitle: "Node Framework",
      icon: <SiExpress />,
    },
    {
      title: "PostgreSQL",
      subTitle: "Database",
      icon: <SiPostgresql />,
    },
    {
      title: "ReactJS",
      subTitle: "Framework",
      icon: <FaReact />,
    },
    {
      title: "TailwindCSS",
      subTitle: "User Interface",
      icon: <SiTailwindcss />,
    },
  ];

  return (
    <section id="skills" className="container mx-auto py-16">
      <p className="text-4xl font-semibold mb-6 text-center">Skills</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {listSkill.map((data, idx) => (
          <div key={idx} className="flex items-center p-4 bg-[#1a1a1a] rounded-lg text-white shadow-lg gap-4 border border-gray-700">
            {data.icon}
            <div>
              <p className="font-medium">{data.title}</p>
              <p className="text-sm text-gray-400">{data.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
