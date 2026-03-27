"use client";

import BottomNavbar from "@/components/BottomNavbar";
import { motion } from "framer-motion";
import VideographyPortfolioExamples from "@/components/VideographyPortfolioExamples"; // Import the new component

export default function VideographyPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-b from-brand-black/90 from-70% to-brand-silver/10"
    >
      <div className="bg-transparent">
        {/* Existing Content - Replace with actual content from the original file if needed */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-display font-bold text-brand-off-white mb-4">
              Videography Services
            </h1>
            <p className="text-brand-silver leading-relaxed">
              We offer professional videography services for corporate events.
            </p>
            {/* Add more sections here as needed, e.g., "Editing Process" */}
          </div>
        </section>

        {/* Integrate the VideographyPortfolioExamples component */}
        <VideographyPortfolioExamples />
      </div>
      <BottomNavbar />
    </motion.main>
  );
}
