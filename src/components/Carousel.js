import React from 'react';
// import { Carousel } from 'react-bootstrap';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
  import '../assets/css/carousel.css'

  import { Link, redirect } from "react-router-dom";


import {Carousel} from 'react-bootstrap';


export default () => {
  const handleClick=()=> {
    redirect()
  }
  return (

    <Carousel >
      <Carousel.Item>
        <img
          className=" img-fluid d-block w-100 carousel-img-css"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='carousel-title carousel-text'><span  className='title1'> WE SERVE</span>  <span className='title2 fadeIn'> MICROGREENS</span></h3>
          <h2 className='carousel-desc carousel-text'><span className='desc1'>Highly Nutritious</span></h2>
          <div className='btnCont'> <p className='contactBtn'><Link to="/store"> Contact Us</Link></p></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid d-block w-100 carousel-img-css"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className='carousel-title carousel-text'><span className='title1'> WE SERVE</span> <span className='title2 fadeIn'> SALADS</span></h1>
          <h2 className='carousel-desc carousel-text'><span className='desc1'>Beyond Organics</span></h2>
          <div className='btnCont'><Link to="/store"><p className='contactBtn'> Contact Us</p></Link></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid d-block w-100 carousel-img-css"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='carousel-title carousel-text'><span className='title1'> WE SERVE </span> <span className='title2 fadeIn'> FISHES</span></h1>
          <h2 className='carousel-desc carousel-text'><span className='desc1'>AntiBiotics Free</span></h2>
          <div className='btnCont'><p className='contactBtn'><Link to="/store"> Contact Us</Link></p></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img-css"
          src={img4}
          alt="fourth slide"
        />

        <Carousel.Caption>
          <h1 className='carousel-title carousel-text'><span className='title1'> WE SERVE </span> <span className='title2 fadeIn'> HEALTH</span></h1>
          <h2 className='carousel-desc carousel-text'><span className='desc1'>Mountstribe</span></h2>
          <div className='btnCont'><p className='contactBtn'><Link to="/store"> Contact Us</Link></p></div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    //////////////////////////////////////////////////////////
  //   <Carousel>
  //   <Carousel.Item>
  //     <img
  //       className="d-block banner imgcar animated slideInRight"
  //       src={img1}
  //       alt="First slide"
  //     />
  //     <Carousel.Caption>
  //       <h3>First slide label</h3>
  //       < className='btnCont'div><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</</div>p>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img
  //       className="d-block imgcar w-100"
  //       src={img1}
  //       alt="Second slide"
  //     />

  //     <Carousel.Caption>
  //       <h3>Second slide label</h3>
  //       <div>< className='btnCont'p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p</div>>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img
  //       className="d-block imgcar w-100"
  //       src={img1}
  //       alt="Third slide"
  //     />

  //     <Carousel.Caption>
  //       <h3>Third slide label</h3>
  //       <div>< className='btnCont'p>
  //         Praesent commodo cursus magna, vel scelerisque nisl consectetur</div>.
  //       </p>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  // </Carousel>

  );
};