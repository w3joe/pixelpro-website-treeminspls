"use client";

import { motion } from "framer-motion";

export default function AvSystemsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-brand-black"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white mb-6 text-center">
          AV Systems for Events
        </h1>
        <div className="prose prose-invert max-w-none">
          <div className="text-brand-silver leading-relaxed space-y-8 text-justify">
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Equipment List
              </h2>
              <p>
                Our AV systems include state-of-the-art equipment to ensure your event runs smoothly:
              </p>
              <ul className="list-disc pl-5">
                <li>High-definition projectors</li>
                <li>Professional sound systems</li>
                <li>Wireless microphones</li>
                <li>Lighting solutions</li>
                <li>Video switchers and mixers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Process Description
              </h2>
              <p>
                We follow a meticulous process to deliver exceptional AV services:
              </p>
              <ol className="list-decimal pl-5">
                <li>Consultation to understand your event needs</li>
                <li>System design and equipment selection</li>
                <li>On-site setup and testing</li>
                <li>Technical support during the event</li>
                <li>Teardown and removal</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Case Studies
              </h2>
              <p>
                Check out our successful AV system implementations for corporate events:
              </p>
              <ul className="list-disc pl-5">
                <li>[Link to Case Study 1]</li>
                <li>[Link to Case Study 2]</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Turnaround Times
              </h2>
              <p>
                Typical turnaround times vary based on the complexity of the event. Contact us for a custom quote.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Customizable Packages
              </h2>
              <p>
                We offer customizable AV packages to suit your specific requirements.
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
