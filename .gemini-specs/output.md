Based on the project structure, coding patterns, and requirements, here's the implementation for the enhanced event videography portfolio section:

FILE: app/services/videography/page.tsx
```typescript
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
```

FILE: components/EventVideographyPortfolio.tsx
```typescript
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
```

**Explanation:**

1.  **`app/services/videography/page.tsx`**:
    *   Imports the new `EventVideographyPortfolio` component.
    *   Renders the component below the existing hero section.
    *   Maintains the existing page structure and styling.

2.  **`components/EventVideographyPortfolio.tsx`**:
    *   Creates a new component for the portfolio section.
    *   Includes a placeholder for the event showreel video (replace `eventShowreelURL` with the actual URL).  I've used a YouTube embed format.
    *   Defines an array of `caseStudies` with placeholder data (replace with actual data and image paths).
    *   Renders a grid of clickable case study cards, each with a thumbnail, title, and description.
    *   Includes a "View All Projects" button that links to the main portfolio page.
    *   Uses `framer-motion` for subtle hover effects on the case study cards and button.
    *   Uses Tailwind CSS classes for styling, consistent with the existing codebase.
    *   Uses `next/link` for client-side navigation.
    *   The `aspect-w-16 aspect-h-9` classes ensure the video player maintains a 16:9 aspect ratio.

**To complete the implementation:**

*   Replace the placeholder URLs and image paths with your actual content.
*   Create the `/portfolio` page (if it doesn't already exist) and implement the comprehensive portfolio display with filtering options.
*   Add the necessary image files to the `public/photos` directory (or another appropriate location).
*   Consider adding error handling for the video player (e.g., displaying a fallback image if the video fails to load).
*   Test the component thoroughly on different devices and screen sizes.
