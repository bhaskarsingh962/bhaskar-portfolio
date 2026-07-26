const SectionTitle = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;