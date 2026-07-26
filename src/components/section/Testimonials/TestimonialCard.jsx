import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
    >
      <FaQuoteLeft className="text-3xl text-blue-400" />

      <p className="mt-6 leading-8 text-slate-300">
        "{testimonial.review}"
      </p>

      <div className="mt-8">
        <h3 className="font-semibold text-white">
          {testimonial.name}
        </h3>

        <p className="text-slate-400">
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;