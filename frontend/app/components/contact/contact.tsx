"use client";

import { motion } from "framer-motion";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import BackgroundGrid from "./background-grid";

export default function Contact() {
  return (
    <section className="relative min-h-screen flex items-center justify-center snap-start overflow-hidden bg-slate-950 pb-40">
      <BackgroundGrid />
      <div className="container mx-auto px-4 z-10">
        <motion.h1
          className=" text-white mb-20 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h1>
        <div className="flex flex-wrap items-start justify-between mx-40">
          <ContactInfo />
          <div className="w-full lg:w-3/5 mt-8 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
