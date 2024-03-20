
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import axios from 'axios'
import 'react-multi-carousel/lib/styles.css';
import { Button } from 'react-bootstrap';


export default function Courses(props) {
  const [showAllCards, setShowAllCards] = useState(false);
  const [cards,setCards]=useState([]);
  useEffect(()=>{
    const getCards=async()=>{
      await axios.get('http://localhost:8000/course/getAllCourses')
      .then((data)=>{setCards(data.data);})
      .catch((err)=>console.log(err))
    }
    getCards();
  },[])
  const responsive = {
    superLargeDesktop: { 
      breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const visibleCards = showAllCards ? cards : cards.slice(0, 6);

  return (
    <>
    <div className="container text-center">
      {showAllCards ? (
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col">
              <Link to={`/course/${card.id}`} style={{textDecoration:"none"}}>
                <div className="card shadow" style={{ width: '18rem' }}>
                  <img src={card.thumbnail} className="card-img-top" alt="Card Image" />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <h6 className="card-title">{card.stream}</h6>
                    <p className="card-text">{card.description.length > 50 ? card.description.substring(0, 50) + '...' : card.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <Carousel responsive={responsive} showDots={false}>
          {visibleCards.map((card, index) => (
            <div key={index} className="col">
              <Link to={`/course/${card.id}`} style={{textDecoration:"none"}}>
                <div className="card shadow" style={{ width: '18rem' }}>
                  <img src={card.thumbnail} className="card-img-top" alt="Card Image" />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <h6 className="card-title">{card.stream}</h6>
                    <p className="card-text">{card.description.length > 50 ? card.description.substring(0, 50) + '...' : card.description}</p>
                  </div>
                </div>
              </Link>
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
    {props.role==='tutor'&&
    <div style={{textAlign:'center'}}>
      <Link to='/add/course' ><Button>Add course</Button></Link>
    </div>
    }
    </>
  );
}
