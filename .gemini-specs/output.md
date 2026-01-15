FILE: app/services/page.tsx
```typescript
"use client";

import Services from "@/components/ServicesSection";
import BottomNavbar from "@/components/BottomNavbar";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-b from-brand-black/90 from-70% to-brand-silver/10"
    >
      {/* Hero Section with H1 */}
      <section className="pt-32 pb-16 px-4 md:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-off-white mb-6 tracking-tight">
          Explore Our Services
        </h1>
        <p className="text-lg md:text-xl text-brand-off-white/80 mb-12 max-w-2xl mx-auto font-sans font-light">
          PixelPro offers a range of services to bring your creative visions to life.
        </p>
      </section>

      <div className="bg-transparent">
        <Services />
      </div>
      <BottomNavbar />
    </motion.main>
  );
}
```