"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    name: "AV Systems",
    description: "Professional audio-visual solutions for events of all sizes.",
    link: "/services/av-systems",
  },
  {
    name: "Corporate Photography",
    description: "High-quality photography services for corporate events.",
    link: "/services/photography",
  },
  {
    name: "Event Videography",
    description: "Capture your event with professional videography services.",
    link: "/services/videography",
  },
  {
    name: "Event Talent",
    description: "Provide talent for your event.",
    link: "/services/talent",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-off-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-brand-silver">
            Explore our range of services to make your event a success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-brand-black rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-off-white mb-2">
                  {service.name}
                </h3>
                <p className="text-brand-silver">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-block mt-4 px-4 py-2 bg-brand-primary text-brand-black font-semibold rounded-md hover:bg-brand-secondary transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
