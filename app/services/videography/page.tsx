"use client";

import EventVideographyPortfolio from "@/components/EventVideographyPortfolio";
import { motion } from "framer-motion";

export default function VideographyPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-brand-black"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white mb-6 text-center">
          Event Videography
        </h1>
        <p className="text-brand-silver leading-relaxed space-y-8 text-justify">
          We specialize in capturing the essence of your events through high-quality videography. From corporate conferences to private celebrations, our experienced team ensures that every moment is preserved with creativity and professionalism.
        </p>
      </div>

      {/* Event Videography Portfolio Section */}
      <EventVideographyPortfolio />
    </motion.main>
  );
}
