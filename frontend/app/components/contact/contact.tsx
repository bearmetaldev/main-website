"use client";

import { motion } from "framer-motion";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import BackgroundGrid from "./background-grid";

export default function Contact() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center snap-start overflow-hidden bg-slate-950 pt-8 md:pt-0"
      id="contact"
    >
      <BackgroundGrid />
      <div className="container mx-auto px-4 z-10">
        <motion.h1
          className="text-white mb-20 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h1>
        <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-32 align-middle">
          <div className="w-full lg:w-2/5 mb-1 lg:mb-0 flex justify-center px-4">
            <ContactInfo />
          </div>
          <div className="w-full lg:w-3/5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
