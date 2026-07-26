const ProjectTech = ({ technologies }) => {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm text-blue-300"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default ProjectTech;