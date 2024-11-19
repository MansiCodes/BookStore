import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from '../assets/img.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import './ImageSlider.css'



function ImageSlider() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'50vh'}}
        className="d-block w-100"
        src={img}
        alt="First slide"
      />
      <Carousel.Caption>       
        <h3>Welcome to out booksite</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'50vh'}}
        className="d-block w-100"src={img1}alt="Second slide"/>
      <Carousel.Caption>
        
        <h3>This is the Bookstore where you get your desired books</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'50vh'}}className="d-block w-100"src={img2} alt="Third slide"/>
      <Carousel.Caption>
        
        <h3>
          Newest to oldest everything is here 
        </h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default ImageSlider;
