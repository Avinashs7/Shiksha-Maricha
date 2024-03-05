import React, { useState, useEffect } from 'react';

export default function Home() {
  const images = ['img8.jpg', 'img4.jpg', 'img3.jpg', 'img2.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change the image every 3000 milliseconds (3 seconds)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div
      style={{
        position: 'relative',
        height: '800px',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '80%',
          width: '100%',
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          color: 'white', // Set the text color
          textAlign: 'left', // Change text alignment to left
          fontFamily: 'YourChosenFont', // Set the desired font
          paddingLeft: '20px', // Adjust as needed for horizontal positioning
          paddingTop: '200px', // Adjust as needed for vertical positioning
        }}
      >
        <h1>Learning Today,</h1>
        <h1>Leading Tomorrow</h1>
        <a href="Courses">
          <button className="get-started-btn">Get Started</button>
        </a>
      </div>
    </div>
  );
}
