import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import ProjectTech from "./ProjectTech";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
    >
      {/* <div className="h-56 bg-slate-800 flex items-center justify-center">
        <span className="text-slate-500">
          Project Screenshot
        </span>
      </div> */}

      <div className="p-8">

        <span className="text-sm text-blue-400">
          {project.category}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        <ProjectTech
          technologies={project.technologies}
        />

        <div className="mt-8 flex gap-6">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-white"
          >
            <FaGithub />

            Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-400"
          >
            <FaExternalLinkAlt />

            Live Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;