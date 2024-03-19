import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  const backgroundImage = '../../public/home.jpg';
  return (
    <>
    <div style={{ position: 'relative', height: '800px', width: '100%',}}>
        <div
          style={{ position: 'absolute', top: 0, left: 0, height: '80%', width: '100%', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1,}}
        />
        <div
          className="slide-left"
          style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'left', fontSize: '30px', paddingLeft: '20px', paddingTop: '200px',
          }}
        >
          <h1>
            <span style={{ fontSize: '80px', height:'100%', fontFamily: 'AcademyEngravedLetPlain'}}>Shiksha marichi</span> 
          </h1>
          <p style={{ fontFamily: 'serif'}} >
            I am proud to be <br/> a <span style={{ fontSize:'notoserif',color:'brown',fontSize:'50px'}}>student</span> who is part of <br/> Shiksha marichi.
          </p>
          <Link to="/courses">
            <button type="button" className="btn btn-outline-primary">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </>
    )
}
