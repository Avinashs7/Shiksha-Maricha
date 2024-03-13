import React from 'react';
import './Home.css';

// Card component
const Card = () => (
  <div className="card" style={{ width: '18rem', margin: '10px' }}>
    <img src="img2.jpg" className="card-img-top" alt="Card Image" />
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
);

const Home = () => {
  // Use a standard image instead of a sliding image
  const backgroundImage = 'img9.jpg';

  return (
    <div>
      <div
        style={{
          position: 'relative',
          height: '800px',
          width: '100%',
        }}
      >
        {/* Use a standard image instead of a sliding image */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '80%',
            width: '100%',
           
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          }}
        />
        <div
          className="slide-left"
          style={{
            position: 'relative',
            zIndex: 1,
            color: 'white',
            textAlign: 'left',
            fontSize: '30px',
            
            paddingLeft: '20px',
            paddingTop: '200px',
          }}
        >
          <h1>
            <span style={{ fontSize: '80px', height:'100%', fontFamily: 'AcademyEngravedLetPlain'}}>Shiksha marichi</span> 
          </h1>
          <p style={{ fontFamily: 'serif'}} >
            I am proud to be <br/> a <span style={{ fontSize:'notoserif',color:'brown',fontSize:'50px'}}>student</span> who is part of <br/>our Shiksha marichi.
          </p>
          <a href="Courses">
            <button type="button" className="btn btn-outline-primary">
              Get started
            </button>
          </a>
        </div>
      </div>

      <div className="card-wrapper" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
