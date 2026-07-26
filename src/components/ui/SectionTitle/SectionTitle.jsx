import GradientText from "../GradientText";

const SectionTitle = ({
  badge,
  title,
  description,
}) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-widest text-blue-400">
        {badge}
      </p>

      <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
        <GradientText>{title}</GradientText>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;