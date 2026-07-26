const Card = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-8
        transition-all
        duration-300
        hover:border-blue-500/40
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;