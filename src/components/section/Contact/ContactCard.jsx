import { motion } from "framer-motion";

const ContactCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.a
      whileHover={{ y: -5 }}
      href={item.href}
      className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500/30"
    >
      <div className="rounded-xl bg-blue-500/10 p-4">
        <Icon className="text-2xl text-blue-400" />
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {item.title}
        </h3>

        <p className="text-slate-400">
          {item.value}
        </p>
      </div>
    </motion.a>
  );
};

export default ContactCard;