import React from "react";
import { FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiBootstrap, SiExpress, SiLaravel, SiMysql, SiNextdotjs, SiPhp, SiPostgresql, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { title: "ReactJS", subTitle: "Framework", icon: <FaReact /> },
        { title: "NextJS", subTitle: "Framework", icon: <SiNextdotjs /> },
        { title: "React Native", subTitle: "Mobile Framework", icon: <FaReact /> },
        { title: "CSS", subTitle: "User Interface", icon: <IoLogoCss3 /> },
        { title: "TailwindCSS", subTitle: "User Interface", icon: <SiTailwindcss /> },
        { title: "Bootstrap", subTitle: "UI Framework", icon: <SiBootstrap /> },
        { title: "Javascript", subTitle: "Interaction", icon: <IoLogoJavascript /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { title: "NodeJS", subTitle: "Web Server", icon: <FaNodeJs /> },
        { title: "ExpressJS", subTitle: "Node Framework", icon: <SiExpress /> },
        { title: "PostgreSQL", subTitle: "Database", icon: <SiPostgresql /> },
        { title: "PHP", subTitle: "Backend Language", icon: <SiPhp /> },
        { title: "Laravel", subTitle: "PHP Framework", icon: <SiLaravel /> },
        { title: "MySQL", subTitle: "Database", icon: <SiMysql /> },
      ],
    },
    {
      category: "UI/UX",
      skills: [
        { title: "Figma", subTitle: "Design Tool", icon: <FaFigma /> },
      ],
    },
  ];

  return (
    <section id="skills" className="container mx-auto py-16">
      <p className="text-4xl font-semibold mb-6 text-center">My skills</p>
      <div className="grid  gap-8 px-4">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-gray-700 text-white">
            <p className="text-2xl font-semibold mb-4">{category.category}</p>
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
              {category.skills.map((skill, index) => (
                <div key={index} className="flex items-center p-4 bg-[#222] rounded-lg gap-4 border border-gray-600">
                  {skill.icon}
                  <div>
                    <p className="font-medium">{skill.title}</p>
                    <p className="text-sm text-gray-400">{skill.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;