import React from 'react';
import HomepageShowreel from './HomepageShowreel';
// Other imports...

const Home: React.FC = () => {
  const showreelImages = [
    { src: '/portfolio-photo/Studio/pixelpro-studios-studio-photography-singapore-1.jpg', alt: 'Studio Photography' },
    { src: '/portfolio-photo/Events/pixelpro-studios-event-photography-singapore-1.jpg', alt: 'Event Photography' },
    { src: '/portfolio-photo/Graduation/pixelpro-studios-graduation-photography-singapore-01.jpg', alt: 'Graduation Photography' },
    { src: '/portfolio-photo/Food/pixelpro-studios-food-photography-singapore-1.jpg', alt: 'Food Photography' },
    { src: '/portfolio-photo/Pets/pixelpro-studios-pet-photography-singapore-2.jpg', alt: 'Pet Photography' },
  ];

  return (
    <div>
      <HomepageShowreel type="image" images={showreelImages} />
    </div>
  );
};

export default Home;
