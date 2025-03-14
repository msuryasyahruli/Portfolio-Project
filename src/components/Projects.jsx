import React, { useState } from "react";
import {
  FiGithub,
  FiLink,
  FiMaximize2,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import projects from "./TheProjects";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payload, setPayload] = useState({});

  const handleModal = (data) => {
    setIsModalOpen(true);
    setPayload(data);
  };

  return (
    <section id="projects" className="container mx-auto py-16 px-4">
      <p className="text-4xl font-semibold mb-12 text-center">My projects</p>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
        {projects.map((data, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-lg group aspect-square"
          >
            <img
              src={data?.image}
              alt="project"
              className="transition-transform group-hover:scale-110 duration-200 object-cover h-full"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 to-transparent hover:from-black/85 hover:to-black/15">
              <div className="p-3 w-full">
                <p className="text-xl font-bold mb-2">{data?.title}</p>
                <div className="flex gap-2">
                  <Link
                    to={data?.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-1 rounded-md border border-[#081b29] hover:bg-[#081b29] backdrop-blur-sm">
                      <FiGithub />
                    </button>
                  </Link>
                  <Link
                    to={data?.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-1 rounded-md border border-[#081b29] hover:bg-[#081b29] backdrop-blur-sm">
                      <FiLink />
                    </button>
                  </Link>
                  <button
                    className="p-1 ml-auto rounded-md border border-[#081b29] hover:bg-[#081b29] backdrop-blur-sm"
                    onClick={() => handleModal(data)}
                  >
                    <FiMaximize2 />
                  </button>
                </div>
              </div>
              <div className="absolute top-3 right-3 text-[#919191]">
                {data.type === "website" ? <FiMonitor /> : <FiSmartphone />}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={payload?.title}
      >
        {payload?.decription}
      </Modal>
    </section>
  );
};

export default Projects;
