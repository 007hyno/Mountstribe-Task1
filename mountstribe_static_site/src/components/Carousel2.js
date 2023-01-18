import React from 'react'
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import '../assets/css/carousel.css'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';


function Carousel2() {
  return (
    
    // <MDBCarousel showIndicators showControls fade>
    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={1}
    //     src={img1}
    //     alt='...'
    //   >
    //    <h1>WE SERVE MICROGREENS</h1>
    //             <h2>Highly Nutritious</h2>
    //   </MDBCarouselItem>

    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={2}
    //     src={img2}
    //     alt='...'
    //   >
    //      <h1>WE SERVE SALADS</h1>
    //             <h2>Beyond Organics</h2>
    //   </MDBCarouselItem>

    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={3}
    //     src={img3}
    //     alt='...'
    //   >
    //     <h1>WE SERVE FISHES</h1>
    //             <h2>AntiBiotics Free</h2>
    //   </MDBCarouselItem>

    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={4}
    //     src={img4}
    //     alt='...'
    //   >
    //     <h1>WE SERVE HEALTH</h1>
    //             <h2>Mountstribe</h2>
    //   </MDBCarouselItem>
    // </MDBCarousel>


<MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-90  d-block'
        itemId={1}
        src={img1}
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={img2}
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  )
}

export default Carousel2