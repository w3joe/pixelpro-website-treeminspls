import React from 'react';
import HomepageShowreel from '../components/HomepageShowreel';
// Other imports...
import WhatWeOffer from '../components/WhatWeOffer'; // Assuming this component exists

const Home: React.FC = () => {
  const showreelVideos = [
    { src: '/videos/showreel1.mp4', alt: 'Showreel 1' },
    // Add more video sources as needed
  ];

  const showreelImages = [
    { src: '/images/project1.jpg', alt: 'Project 1' },
    { src: '/images/project2.jpg', alt: 'Project 2' },
    // Add more image sources as needed
  ];

  return (
    <div>
      {/*  Use either video or image showreel, not both simultaneously */}
      <HomepageShowreel type="video" videos={showreelVideos} />
      {/* <HomepageShowreel type="image" images={showreelImages} /> */}

      <WhatWeOffer /> {/* Place the showreel above the 'What we offer' section */}
      {/* Other homepage content... */}
    </div>
  );
};

export default Home;
