import React from 'react';
import Image from 'next/image';
import styles from './PhotographyPortfolio.module.css'; // Create this CSS module

interface PhotographyPortfolioProps {
  images: { src: string; alt: string; href: string }[];
}

// PhotographyPortfolio Component
const PhotographyPortfolio: React.FC<PhotographyPortfolioProps> = ({ images }) => {
  return (
    <section className={styles.portfolioSection}>
      <h2>Our Photography Portfolio</h2>
      <div className={styles.portfolioGrid}>
        {images.map((image, index) => (
          <a key={index} href={image.href} className={styles.portfolioItem}>
            <Image
              src={image.src}
              alt={image.alt}
              width={500} // Adjust as needed
              height={300} // Adjust as needed
              layout="responsive"
              objectFit="cover"
              className={styles.portfolioImage}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default PhotographyPortfolio;
