import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnnaqzlq"); // Replace with your form ID

  if (state.succeeded) {
    return (
      <p>
        Thanks for your message! We will make sure to get back to you shortly.
      </p>
    );
  }

  return (
    <motion.div
      className="relative p-8 rounded-lg bg-opacity-10 lg:w-full backdrop-blur-sm overflow-hidden border-2 border-t-slate-900/50 border-l-slate-900/50 border-b-slate-300/10 border-r-slate-300/10"
      style={{
        background:
          "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap"
        role="form"
        aria-label="Contact form"
      >
        <div className="w-1/2 pr-2 mb-4">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Name"
            aria-label="Name"
            className="w-full p-2 bg-slate-500 bg-opacity-10 border-2 border-t-slate-900/50 border-l-slate-900/30 border-b-slate-300/10 border-r-slate-300/30 rounded-lg text-white placeholder-white placeholder-opacity-50 shadow-[inset_-8px_-8px_14px_rgba(0,0,0,0.1)]"
            required
          />
        </div>
        <div className="w-1/2 pl-2 mb-4">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Email address"
            aria-label="Email address"
            className="w-full p-2 bg-slate-500 bg-opacity-10 border-2 border-t-slate-900/50 border-l-slate-900/30 border-b-slate-300/10 border-r-slate-300/30 rounded-lg text-white placeholder-white placeholder-opacity-50 shadow-inner"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="w-full mb-4">
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone number"
            aria-label="Phone number"
            className="w-full p-2 bg-slate-500 bg-opacity-10 border-2 border-t-slate-900/50 border-l-slate-900/30 border-b-slate-300/10 border-r-slate-300/30 rounded-lg text-white placeholder-white placeholder-opacity-50 shadow-inner"
          />
        </div>
        <div className="w-full mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            aria-label="Your message"
            rows={4}
            className="w-full p-2 bg-slate-500 bg-opacity-10 border-2 border-t-slate-900/50 border-l-slate-900/30 border-b-slate-300/10 border-r-slate-300/30 rounded-lg text-white placeholder-white placeholder-opacity-50 shadow-inner"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="w-full flex justify-end">
          <motion.button
            type="submit"
            disabled={state.submitting}
            className="px-6 py-2 bg-violet-800 text-white rounded-lg"
            whileHover={{
              backgroundColor: "#1E1D4C",
            }}
            transition={{ duration: 0.3 }}
            aria-label="Send message"
          >
            Send
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
