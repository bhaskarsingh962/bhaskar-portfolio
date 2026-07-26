const Heading = ({
  title,
  subtitle,
  center = false,
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;