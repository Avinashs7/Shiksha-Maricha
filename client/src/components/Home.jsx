import React from 'react'
import img1 from '../../public/img1.jpg'
import img2 from '../../public/img2.jpg'
import img3 from '../../public/img3.jpg'
export default function Home() {
  return (
    <>
    <div className='slide'>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={img1} className="slider-img" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img2} className="slider-img" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img3} className="slider-img" alt="..."/>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
