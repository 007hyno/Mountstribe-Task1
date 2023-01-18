import React from 'react';
// import { Carousel } from 'react-bootstrap';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
  import '../assets/css/carousel.css'

import Carousel from 'react-bootstrap/Carousel';


export default () => {
  return (

    <Carousel>
      <Carousel.Item>
        <img
          className=" img-fluid d-block w-100 carousel-img-css"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='carousel-title carousel-text'>WE SERVE MICROGREENS</h3>
          <h2 className='carousel-desc carousel-text'>Highly Nutritious</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid d-block w-100 carousel-img-css"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className='carousel-title carousel-text'>WE SERVE SALADS</h1>
          <h2 className='carousel-desc carousel-text'>Beyond Organics</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid d-block w-100 carousel-img-css"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='carousel-title carousel-text'>WE SERVE FISHES</h1>
          <h2 className='carousel-desc carousel-text'>AntiBiotics Free</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img-css"
          src={img4}
          alt="fourth slide"
        />

        <Carousel.Caption>
          <h1 className='carousel-title carousel-text'>WE SERVE HEALTH</h1>
          <h2 className='carousel-desc carousel-text'>Mountstribe</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



    // // <div className='container-fluid' >
    // //   <div className="row">

    // //   </div>
    // //   <div className="row">
    // //     <div className="col-12">
    // //       <Carousel>
    // //         <Carousel.Item >
    // //           <div className='carousel-inner'>
    // //           <img
    // //             className="banner carousel-img d-block w-100"
    // //               src={img1}
    // //             alt="1 slide"
    // //           />
    // //           <Carousel.Caption>  
    // //             <h3 className='back-g h1'>WE SERVE MICROGREENS</h3>
    // //             <p className='back-g h2'>Highly Nutritious</p>
    // //           </Carousel.Caption>
    // //           </div>
    // //         </Carousel.Item >

    // //         <Carousel.Item>
    // //           <img
    // //             className="banner carousel-img d-block w-100"
    // //             src={img2}
    // //             alt="2 slide"
    // //           />
    // //           <Carousel.Caption>
    // //             <h1>WE SERVE SALADS</h1>
    // //             <h2>Beyond Organics</h2>
    // //           </Carousel.Caption>
    // //         </Carousel.Item>

    // //         <Carousel.Item>
    // //           <img
    // //             className="banner carousel-img d-block w-100"
    // //             src={img3}
    // //             alt="3 slide"
    // //           />
    // //           <Carousel.Caption>
    // //             <h1>WE SERVE FISHES</h1>
    // //             <h2>AntiBiotics Free</h2>
    // //           </Carousel.Caption>
    // //         </Carousel.Item>

    // //         <Carousel.Item>
    // //           <img
    // //             className="banner carousel-img d-block w-100"
    // //             src={img4}
    // //             alt="4 slide"
    // //           />
    // //           <Carousel.Caption>
    // //             <h1>WE SERVE HEALTH</h1>
    // //             <h2>Mountstribe</h2>
    // //           </Carousel.Caption>
    // //         </Carousel.Item>

    // //       </Carousel>
    // //     </div>
    // //   </div>
    // // </div>
  );
};