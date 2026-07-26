import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <button
      onClick={scrollTop}
      className="rounded-full bg-blue-600 p-4 text-white transition hover:bg-blue-700"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollTopButton;