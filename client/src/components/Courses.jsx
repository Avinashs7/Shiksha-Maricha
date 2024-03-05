// Courses.js

import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Courses() {
  const [showAllCards, setShowAllCards] = useState(false);

  const cards = [
    { imgSrc: 'img1.jpg', title: 'Card 1', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: 'img2.jpg', title: 'Card 2', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content' },
    { imgSrc: 'img3.jpg', title: 'Card 3', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content' },
    { imgSrc: 'img4.jpg', title: 'Card 4', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content' },
    { imgSrc: 'img1.jpg', title: 'Card 1', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content' },
    { imgSrc: 'img1.jpg', title: 'Card 1', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { imgSrc: 'img2.jpg', title: 'Card 2', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content' },
    { imgSrc: 'img3.jpg', title: 'Card 3', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content' },
    { imgSrc: 'img4.jpg', title: 'Card 4', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content' },
    { imgSrc: 'img4.jpg', title: 'Card 4', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content' },
    { imgSrc: 'img1.jpg', title: 'Card 1', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content' },
    { imgSrc: 'img1.jpg', title: 'Card 1', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content' },
  ];

  const responsive = {
    superLargeDesktop: { 
      breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const visibleCards = showAllCards ? cards : cards.slice(0, 6);

  return (
    <div className="container text-center">
      <h1>LEARN NEW THINGS</h1>
      {showAllCards ? (
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col">
              <div className="card shadow" style={{ width: '16rem' }}>
                <img src={card.imgSrc} className="card-img-top" alt="Card Image" />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <a href='coursesdetails' className="btn btn-primary">
                    Go somewhere</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Carousel responsive={responsive} showDots={false}>
          {visibleCards.map((card, index) => (
            <div key={index} className="col">
              <div className="card shadow" style={{ width: '16rem' }}>
                <img src={card.imgSrc} className="card-img-top" alt="Card Image" />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <a href='coursesdetails' className="btn btn-primary">
                            Go somewhere</a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      )}

      <div className="text-end mt-3">
        {!showAllCards && (
          <a href="#" className="btn btn-link btn-sm" onClick={() => setShowAllCards(true)}>
            Show All
          </a>
        )}
        {showAllCards && (
          <a href="#" className="btn btn-link btn-sm" onClick={() => setShowAllCards(false)}>
            Show Less
          </a>
        )}
      </div>
    </div>
  );
}
