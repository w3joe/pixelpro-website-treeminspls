"use client";

import { motion } from "framer-motion";

export default function TalentPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-brand-black"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white mb-6 text-center">
          Event Talent
        </h1>
        <div className="prose prose-invert max-w-none">
          <div className="text-brand-silver leading-relaxed space-y-8 text-justify">
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Talent Categories
              </h2>
              <p>
                We provide a wide range of event talent:
              </p>
              <ul className="list-disc pl-5">
                <li>Emcees</li>
                <li>DJs</li>
                <li>Live Bands</li>
                <li>Magicians</li>
                <li>Speakers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Selection Process
              </h2>
              <p>
                Our talent selection process ensures quality and professionalism:
              </p>
              <ol className="list-decimal pl-5">
                <li>Talent scouting and vetting</li>
                <li>Auditions and interviews</li>
                <li>Background checks</li>
                <li>Performance reviews</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Talent Profiles
              </h2>
              <p>
                View our talent profiles:
              </p>
              <ul className="list-disc pl-5">
                <li>[Link to Talent Profile 1]</li>
                <li>[Link to Talent Profile 2]</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Booking Information
              </h2>
              <p>
                Contact us to book talent for your event.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Customizable Packages
              </h2>
              <p>
                We offer customizable talent packages to suit your needs.
              </p>
              <ul className="list-disc pl-5">
                <li>Basic Package</li>
                <li>Standard Package</li>
                <li>Premium Package</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Request a Custom Quote
              </h2>
              <p>
                Contact us to discuss your event and receive a personalized quote.
              </p>
              <a
                href="https://cal.com/pixelpro/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-8 py-4 bg-brand-off-white text-brand-black font-semibold rounded-xl hover:bg-white transition-colors duration-300 tracking-wide uppercase text-sm cursor-pointer"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
