"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Define a type for the case study items
interface CaseStudy {
  title: string;
  thumbnail: string; // URL to the thumbnail image
  link: string; // URL to the case study page or video
}

const caseStudies: CaseStudy[] = [
  {
    title: "Annual Corporate Gala",
    thumbnail: "/photos/corporate_gala_thumbnail.jpg", // Replace with actual path
    link: "https://example.com/case-studies/corporate-gala", // Replace with actual link
  },
  {
    title: "Product Launch Event",
    thumbnail: "/photos/product_launch_thumbnail.jpg", // Replace with actual path
    link: "https://example.com/case-studies/product-launch", // Replace with actual link
  },
  {
    title: "Industry Conference Highlights",
    thumbnail: "/photos/conference_highlights_thumbnail.jpg", // Replace with actual path
    link: "https://example.com/case-studies/conference-highlights", // Replace with actual link
  },
];

const EventVideographyPortfolio = () => {
  return (
    <section className="py-16 bg-brand-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-brand-off-white mb-8 text-center">
          Our Event Videography Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={study.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={study.thumbnail}
                  alt={study.title}
                  width={600} // Adjust as needed
                  height={400} // Adjust as needed
                  className="object-cover w-full h-64"
                />
                <div className="absolute bottom-0 left-0 w-full bg-brand-black/70 text-brand-off-white p-4">
                  <h3 className="text-lg font-semibold">{study.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventVideographyPortfolio;
