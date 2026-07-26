const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",

  outline:
    "border border-slate-700 bg-transparent text-white hover:bg-slate-800",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`rounded-lg px-6 py-3 font-medium transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;