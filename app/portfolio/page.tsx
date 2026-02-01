"use client";

import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-brand-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white mb-6">
            Portfolio
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-brand-silver leading-relaxed space-y-8 text-justify">
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">Videography</h2>
              <p>
                Check out some of our videography work!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
