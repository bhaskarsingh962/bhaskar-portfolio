const IconButton = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-blue-500 hover:text-white"
    >
      {children}
    </a>
  );
};

export default IconButton;