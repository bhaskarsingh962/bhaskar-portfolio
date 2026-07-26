import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500/40"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
        <Icon className="text-3xl text-blue-400" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {service.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;