import React from "react";
import {Carousel} from 'react-bootstrap'

function Crousel() {
  return (
  <Carousel className="carousel" controls={false}>
  <Carousel.Item controls="false">
    <div className="d-block w-100 item1">
    <div className="carousel_content">
      <h1>RELATIONSHIP MATTERS</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      </div>
   
  </Carousel.Item>
  <Carousel.Item>
    <div
      className="d-block w-100 item2"
     
    >
    <div className="carousel_content">
      <h1>RELATIONSHIP MATTERS</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div></div>

   
  </Carousel.Item>
  <Carousel.Item>
     <div
      className="d-block w-100 item3"
     
    >
    <div className="carousel_content">
      <h1>RELATIONSHIP MATTERS</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div></div>

   
  </Carousel.Item>
</Carousel>
  );
}

export default Crousel;