FILE: app/services/videography/page.tsx
```typescript
"use client";

import { motion } from "framer-motion";

export default function VideographyPage() {
  const videoSource = "/photos/event-video-reel.mp4"; // Replace with your actual video path

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-brand-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        {/* Video Reel */}
        <div className="mb-16">
          <video
            src={videoSource}
            controls // Add controls for play/pause and volume
            muted // Mute by default for autoplay
            loop // Loop the video
            autoPlay // Autoplay the video
            className="w-full rounded-xl shadow-lg" // Basic styling
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-brand-silver leading-relaxed space-y-8 text-justify">
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Event Videography Services
              </h2>
              <p>
                Capture the essence of your event with our professional videography services. We specialize in creating
                high-quality highlight reels and full-event recordings that tell your story.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Why Choose PixelPro Videography?
              </h2>
              <p>
                Our experienced videographers use state-of-the-art equipment to ensure stunning visuals and crystal-clear
                audio. We work closely with you to understand your vision and deliver a final product that exceeds your
                expectations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Our Approach
              </h2>
              <p>
                From pre-event planning to post-production editing, we handle every aspect of your videography needs.
                We pride ourselves on our attention to detail and commitment to capturing every important moment.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
}
```

FILE: public/photos/event-video-reel.mp4
```
(This file is a placeholder.  You would place your actual video file here.)
```
