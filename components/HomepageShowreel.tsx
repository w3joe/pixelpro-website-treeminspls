"use client"

import React, { useState, useEffect } from 'react';
import styles from './HomepageShowreel.module.css'; // Create this CSS module
import Link from 'next/link';


interface ShowreelProps {
  videos?: { src: string; alt: string }[]; // Optional video showreel
  images?: { src: string; alt: string }[]; // Optional image gallery
  type: 'video' | 'image'; // Type of showreel
}

const HomepageShowreel: React.FC<ShowreelProps> = ({ videos, images, type }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto-advance the carousel every 5 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      if (type === 'image' && images) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [images, type]);

  if (type === 'video' && videos && videos.length > 0) {
    return (
      <div className={styles.showreelContainer}>
        <video className={styles.showreelVideo} src={videos[0].src} alt={videos[0].alt} autoPlay loop muted controls />
        <div className={styles.overlay}>
          <Link href="/portfolio" className={styles.ctaButton}>
            Watch Full Portfolio
          </Link>
        </div>
      </div>
    );
  }

  if (type === 'image' && images && images.length > 0) {
    return (
      <div className={styles.showreelContainer}>
        <img
          className={styles.showreelImage}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
        />
        <div className={styles.overlay}>
          <Link href="/portfolio" className={styles.ctaButton}>
            View Our Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.showreelContainer}>
      {/* Fallback content if no videos or images are provided */}
      <p>Showreel coming soon!</p>
      <Link href="/portfolio" className={styles.ctaButton}>
        View Our Portfolio
      </Link>
    </div>
  );
};

export default HomepageShowreel;
