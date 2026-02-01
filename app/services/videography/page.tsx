"use client";

import { motion } from "framer-motion";
import BottomNavbar from "@/components/BottomNavbar";
import EventVideographyPortfolio from "@/components/EventVideographyPortfolio"; // Import the new component

export default function VideographyPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-b from-brand-black/90 from-70% to-brand-silver/10"
    >
      {/* Hero Section (Existing) - Add your hero section content here */}
      <div className="bg-transparent">
        <div className="pt-32 pb-32 px-4 md:px-8">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white mb-6 text-center">
            Event Videography
          </h1>
          <p className="text-lg md:text-xl text-brand-off-white/80 mb-12 max-w-2xl mx-auto font-sans font-light text-center">
            Capture the essence of your event with our professional videography services.
          </p>
        </div>
        {/* Event Videography Portfolio Section */}
        <EventVideographyPortfolio />
      </div>
      <BottomNavbar />
    </motion.main>
  );
}
