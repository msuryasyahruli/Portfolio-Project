import React from "react";
import { motion } from "framer-motion";
import { FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import {
  SiBootstrap,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    blurb: "Web and mobile interfaces",
    skills: [
      { title: "React", subTitle: "UI library", Icon: FaReact, color: "#61DAFB" },
      { title: "Next.js", subTitle: "React framework", Icon: SiNextdotjs, color: "#ffffff" },
      { title: "React Native", subTitle: "Mobile apps", Icon: FaReact, color: "#61DAFB" },
      { title: "JavaScript", subTitle: "Language", Icon: IoLogoJavascript, color: "#F7DF1E" },
      { title: "CSS", subTitle: "Styling", Icon: IoLogoCss3, color: "#264DE4" },
      { title: "Tailwind CSS", subTitle: "Utility CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { title: "Bootstrap", subTitle: "UI kit", Icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    category: "Backend",
    blurb: "APIs, servers, and data",
    skills: [
      { title: "Node.js", subTitle: "Runtime", Icon: FaNodeJs, color: "#339933" },
      { title: "Express", subTitle: "Node framework", Icon: SiExpress, color: "#ffffff" },
      { title: "PHP", subTitle: "Language", Icon: SiPhp, color: "#777BB4" },
      { title: "Laravel", subTitle: "PHP framework", Icon: SiLaravel, color: "#FF2D20" },
      { title: "PostgreSQL", subTitle: "Database", Icon: SiPostgresql, color: "#4169E1" },
      { title: "MySQL", subTitle: "Database", Icon: SiMysql, color: "#00758F" },
    ],
  },
  {
    category: "Design",
    blurb: "Interface and prototype work",
    skills: [
      { title: "Figma", subTitle: "UI / UX", Icon: FaFigma, color: "#F24E1E" },
    ],
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="text-center mb-12">
        <p className="eyebrow">Toolkit</p>
        <p className="section-title">My skills</p>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto">
          Stack I use to ship fullstack web and mobile products — from UI to API
          and database.
        </p>
        <div className="section-rule mx-auto" />
      </div>

      <div className="flex flex-col gap-6">
        {skillCategories.map((group) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="glass-panel p-6 rounded-2xl"
          >
            <div className="mb-5">
              <p className="text-2xl font-semibold">{group.category}</p>
              <p className="text-sm text-gray-400 mt-1">{group.blurb}</p>
            </div>

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3"
            >
              {group.skills.map(({ title, subTitle, Icon, color }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className="group flex items-center gap-4 p-4 bg-black/10 rounded-xl border border-white/10 hover:border-[#00abf0] hover:bg-[#00abf0]/10 transition-colors"
                >
                  <div
                    className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center text-2xl bg-[#081b29] border border-gray-700 group-hover:border-[#00abf0]/60"
                    style={{ color }}
                    aria-hidden="true"
                  >
                    <Icon />
                  </div>
                  <div>
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-gray-400">{subTitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
