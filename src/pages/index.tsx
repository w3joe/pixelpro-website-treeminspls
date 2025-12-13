import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TrustedBy from '../components/TrustedBy';
import PhotographyPortfolio from '../components/PhotographyPortfolio'; // Import the new component
import Footer from '../components/Footer';

import styles from '../styles/Home.module.css';

export default function Home() {
  // Example image data - replace with your actual image URLs and alt texts
  const portfolioImages = [
    { src: '/images/portfolio/image1.jpg', alt: 'Commercial Photography 1', href: '/portfolio/1' },
    { src: '/images/portfolio/image2.jpg', alt: 'Commercial Photography 2', href: '/portfolio/2' },
    { src: '/images/portfolio/image3.jpg', alt: 'Commercial Photography 3', href: '/portfolio/3' },
    { src: '/images/portfolio/image4.jpg', alt: 'Commercial Photography 4', href: '/portfolio/4' },
    { src: '/images/portfolio/image5.jpg', alt: 'Commercial Photography 5', href: '/portfolio/5' },
    { src: '/images/portfolio/image6.jpg', alt: 'Commercial Photography 6', href: '/portfolio/6' },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>PixelPro Studios - Professional Photography</title>
        <meta name="description" content="High-quality commercial photography services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Services />
        <TrustedBy />

        {/* Add the PhotographyPortfolio component here */}
        <PhotographyPortfolio images={portfolioImages} />

        <Footer />
      </main>
    </div>
  );
}
