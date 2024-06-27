import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      className="relative p-8 rounded-lg bg-opacity-10 backdrop-blur-sm overflow-hidden border-2 border-t-slate-900/50 border-l-slate-900/50 border-b-slate-300/10 border-r-slate-300/10"
      style={{
        background:
          "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <form className="flex flex-wrap">
        <div className="w-1/2 pr-2 mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 bg-slate-500 bg-opacity-10 border-2 border-t-slate-900/50 border-l-slate-900/30 border-b-slate-300/10 border-r-slate-300/30 rounded text-white placeholder-white placeholder-opacity-50 shadow-inner"
          />
        </div>
        <div className="w-1/2 pl-2 mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 bg-slate-500 bg-opacity-10 border-2 border-t-slate-900/50 border-l-slate-900/30 border-b-slate-300/10 border-r-slate-300/30 rounded text-white placeholder-white placeholder-opacity-50 shadow-inner"
          />
        </div>
        <div className="w-full mb-4">
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full p-2 bg-slate-500 bg-opacity-10 border-2 border-t-slate-900/50 border-l-slate-900/30 border-b-slate-300/10 border-r-slate-300/30 rounded text-white placeholder-white placeholder-opacity-50 shadow-inner"
          />
        </div>
        <div className="w-full mb-4">
          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full p-2 bg-slate-500 bg-opacity-10 border-2 border-t-slate-900/50 border-l-slate-900/30 border-b-slate-300/10 border-r-slate-300/30 rounded text-white placeholder-white placeholder-opacity-50 shadow-inner"
          ></textarea>
        </div>
        <div className="w-full flex justify-end">
          <motion.button
            className="px-6 py-2 bg-violet-800 text-white rounded-lg"
            whileHover={{
              backgroundColor: "#1E1D4C",
            }}
            transition={{ duration: 0.3 }}
          >
            Send
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
