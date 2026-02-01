"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const eventShowreelURL = "https://www.youtube.com/embed/your_showreel_id?rel=0"; // Replace with your showreel URL

const caseStudies = [
  {
    title: "Christmas Festival Highlight",
    description: "A vibrant recap of the annual Christmas festival, capturing the joy and festive atmosphere.",
    thumbnail: "/photos/christmas_festival.jpg", // Replace with actual thumbnail path
    link: "/portfolio/christmas-festival",
  },
  {
    title: "Corporate Gala Dinner",
    description: "A sophisticated showcase of a corporate gala dinner, highlighting key moments and guest interactions.",
    thumbnail: "/photos/corporate_gala.jpg", // Replace with actual thumbnail path
    link: "/portfolio/corporate-gala",
  },
  {
    title: "Tech Conference Keynotes",
    description: "Engaging coverage of keynote speeches and presentations from a leading tech conference.",
    thumbnail: "/photos/tech_conference.jpg", // Replace with actual thumbnail path
    link: "/portfolio/tech-conference",
  },
  {
    title: "Summer Music Festival",
    description: "High-energy aftermovie capturing the best moments from the summer music festival.",
    thumbnail: "/photos/music_festival.jpg", // Replace with actual thumbnail path
    link: "/portfolio/music-festival",
  },
];

export default function EventVideographyPortfolio() {
  return (
    <section className="py-16 bg-brand-black">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-off-white mb-8 text-center">
          Our Event Videography Portfolio
        </h2>

        {/* Showreel Video */}
        <div className="relative aspect-w-16 aspect-h-9 mb-12">
          <iframe
            src={eventShowreelURL}
            title="Event Videography Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={study.link} className="block">
                <img
                  src={study.thumbnail}
                  alt={study.title}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-4 bg-brand-silver/10">
                  <h3 className="text-lg font-semibold text-brand-off-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-brand-silver text-sm">{study.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <motion.div
            whileTap={{ y: 4, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/portfolio"
              className="inline-block mt-4 px-8 py-4 bg-brand-off-white text-brand-black font-semibold rounded-xl hover:bg-white transition-colors duration-300 tracking-wide uppercase text-sm cursor-pointer"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
