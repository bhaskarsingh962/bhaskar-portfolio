import experienceData from "../../../data/experience";

const ExperienceHeader = () => {
  return (
    <div className="max-w-3xl">

      <p className="font-semibold text-blue-400">
        EXPERIENCE
      </p>

      <h2 className="mt-4 text-5xl font-bold text-white">
        {experienceData.title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {experienceData.subtitle}
      </p>

    </div>
  );
};

export default ExperienceHeader;