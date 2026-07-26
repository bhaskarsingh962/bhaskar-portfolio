import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target }) => {
    setForm((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("EmailJS integration coming next.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-8"
    >
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
      />

      <input
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
      />

      <textarea
        rows="6"
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
      />

      <button
        className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;