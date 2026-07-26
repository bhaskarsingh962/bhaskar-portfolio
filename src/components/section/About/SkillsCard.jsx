import aboutData from "../../../data/about";

const SkillsCard = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-semibold text-white">
        Tech Stack
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {aboutData.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;