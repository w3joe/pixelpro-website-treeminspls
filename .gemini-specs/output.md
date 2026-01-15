Based on the project structure and requirements, I will create detailed service pages under the `app/services` directory. I will also update the `Services` component to link to these new pages.

FILE: app/services/av-systems/page.tsx
```typescript
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
```

FILE: app/services/photography/page.tsx
```typescript
"use client";

import { motion } from "framer-motion";

export default function PhotographyPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-brand-black"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white mb-6 text-center">
          Corporate Photography
        </h1>
        <div className="prose prose-invert max-w-none">
          <div className="text-brand-silver leading-relaxed space-y-8 text-justify">
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Equipment List
              </h2>
              <p>
                Our photography services utilize professional-grade equipment:
              </p>
              <ul className="list-disc pl-5">
                <li>High-resolution cameras</li>
                <li>Professional lighting equipment</li>
                <li>Various lenses for different shots</li>
                <li>Backdrops and props</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Process Description
              </h2>
              <p>
                Our photography process ensures high-quality results:
              </p>
              <ol className="list-decimal pl-5">
                <li>Pre-event consultation and planning</li>
                <li>On-site photography</li>
                <li>Post-processing and editing</li>
                <li>Delivery of high-resolution images</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Portfolio Examples
              </h2>
              <p>
                View our corporate photography portfolio:
              </p>
              <ul className="list-disc pl-5">
                <li>[Link to Portfolio Example 1]</li>
                <li>[Link to Portfolio Example 2]</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Turnaround Times
              </h2>
              <p>
                Edited photos are typically delivered within [X] business days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Customizable Packages
              </h2>
              <p>
                We offer customizable photography packages to suit your needs.
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
```

FILE: app/services/videography/page.tsx
```typescript
"use client";

import { motion } from "framer-motion";

export default function VideographyPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-32 pb-32 px-4 md:px-8 bg-brand-black"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-off-white mb-6 text-center">
          Event Videography
        </h1>
        <div className="prose prose-invert max-w-none">
          <div className="text-brand-silver leading-relaxed space-y-8 text-justify">
            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Equipment List
              </h2>
              <p>
                Our videography services utilize professional-grade equipment:
              </p>
              <ul className="list-disc pl-5">
                <li>4K cameras</li>
                <li>Gimbals and stabilizers</li>
                <li>Professional audio recording equipment</li>
                <li>Lighting equipment</li>
                <li>Drones for aerial footage</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Process Description
              </h2>
              <p>
                Our videography process ensures high-quality results:
              </p>
              <ol className="list-decimal pl-5">
                <li>Pre-event consultation and planning</li>
                <li>On-site filming</li>
                <li>Post-production editing and color correction</li>
                <li>Audio mixing and mastering</li>
                <li>Delivery of final video product</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Portfolio Examples
              </h2>
              <p>
                View our event videography portfolio:
              </p>
              <ul className="list-disc pl-5">
                <li>[Link to Portfolio Example 1]</li>
                <li>[Link to Portfolio Example 2]</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Turnaround Times
              </h2>
              <p>
                Edited videos are typically delivered within [X] business days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-brand-off-white mb-4">
                Customizable Packages
              </h2>
              <p>
                We offer customizable videography packages to suit your needs.
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
```

FILE: app/services/talent/page.tsx
```typescript
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
```

FILE: components/ServicesSection.tsx
```typescript
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
```