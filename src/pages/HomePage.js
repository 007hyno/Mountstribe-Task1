import React from 'react'
import MainLayout from '../layout/MainLayout.js'
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel.js'
import Carousel2 from '../components/Carousel2.js'
// import { Carousel } from 'react-bootstrap';
// import '../assets/css/homeStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/home-style.css'




import farm1 from '../assets/images/farm.png'
import farm2 from '../assets/images/farm2.png'
import prem1 from '../assets/images/prem1.png'
import prem2 from '../assets/images/prem2.png'
import prem3 from '../assets/images/prem3.png'
import prem4 from '../assets/images/prem4.png'

import mt from '../assets/images/mt-underline.png'
import t1 from '../assets/images/t1.png'
import t2 from '../assets/images/t2.png'
import t3 from '../assets/images/t3.png'
import t4 from '../assets/images/t4.png'
import jakholi from '../assets/images/jakholi.jpg'


function HomePage() {
  return (
    <MainLayout>
      <div className='home-container '>

        <Carousel />


        <div className="jumbotron-fluid jumbo">
          <div className="container">
            <div className="row text-center"><h2 className="jumbo-title col">Mountstribe</h2></div>
            <div className="row text-center"><div className="col">
              <img className="img-fluid" src={mt} />
            </div></div>
            <div className="row text-center"><p className="col lead">At Mountstribe, we want to revolutionize food production in India by bringing the Highest Quality, Fresh &amp; Chemical-Free produce to your table. Each produce is grown with Non-GMO Seeds &amp; is Pesticide and Insecticide Free with a perfect blend of nutrition for your health.</p></div>
          </div>
        </div>


        <div className="jumbotron-fluid farm-to-fork text-center">
          <div className="container-fluid">
            <div className="row text-center"><h2 className="col">Farm to Fork</h2></div>
            <div className="row text-center"><p className="col lead">Mountstribe believes in being transparent to the end customer. We grow the produce at our farms, with recycled water and absolutely no soil at the Himalayas. So, what you eat is Better than Soil-based 'Organic' Produce.</p></div>
          </div>
          <div className="d-none d-md-block"><img className="img-fluid" src={farm1} /></div>
          <div className="d-md-none"><img className="img-fluid" src={farm2} /></div>
        </div>


        <div className="products-banner">
          <div className="container">
            <div className="row">
              <div className="col products-heading text-center">
                <span>Our Premium Range</span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <img className="img-fluid" src={mt} />
              </div>
            </div>
            <div className="row jumbotron-fluid">
              <div className="col-sm-12 col-md-3 text-center product-box">
                <img className="img-fluid product-icon" src={prem1} />
                <div className="text-center product-category-name"><Link className="nav-link text-secondary " to="/store">Fresh Water Fish</Link></div>
              </div>
              <div className="col-sm-12 col-md-3 text-center product-box">
                <img className="img-fluid product-icon" src={prem2} />
                <div className="text-center product-category-name"><Link className="nav-link text-secondary " to="/store">Leafy Greens</Link></div>
              </div>
              <div className="col-sm-12 col-md-3 text-center product-box">
                <img className="img-fluid product-icon" src={prem3} />
                <div className="text-center product-category-name"><Link className="nav-link text-secondary " to="/store">MicroGreens</Link></div>
              </div>
              <div className="col-sm-12 col-md-3 text-center product-box">
                <img className="img-fluid product-icon" src={prem4} />
                <div className="text-center text-secondary product-category-name"><Link className="nav-link text-secondary" to="/store">Herbs</Link></div>
              </div>
            </div>
          </div>
        </div>



        <div className="why-us-banner container">
          <div className="row">
            <div className="col why-us-heading text-center">
              <span>But Why Mountstribe?</span>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <img className="img-fluid" src={mt} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-3 text-center why-us-box">
              <img className="img-fluid why-us-icon" src={t1} />
              <div className="text-center why-us-title">Highly Nutritious</div>
              <div className="text-center why-us-text">Better nutrient preservation than Soil Based 'Organic'.</div>
            </div>
            <div className="col-sm-12 col-md-3 text-center why-us-box">
              <img className="img-fluid why-us-icon" src={t2} />
              <div className="text-center why-us-title">Grown on Water</div>
              <div className="text-center why-us-text">Grown on water without soil, high in the Himalayas.</div>
            </div>
            <div className="col-sm-12 col-md-3 text-center why-us-box">
              <img className="img-fluid why-us-icon" src={t3} />
              <div className="text-center why-us-title">No Harmful Chemicals</div>
              <div className="text-center why-us-text">We grow in our farms without any insecticides or pesticides.</div>
            </div>
            <div className="col-sm-12 col-md-3 text-center why-us-box">
              <img className="img-fluid why-us-icon" src={t4} />
              <div className="text-center why-us-title">Care for Nature</div>
              <div className="text-center why-us-text">Smart farming & recycled water ensures resource optimization.</div>
            </div>
          </div>
        </div>

        <div className="visit-us-banner">
          <div className="container">
            <div className="row">
              <div className="col visit-us-heading text-center">
                <span>Our Farm</span>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                {/* <img className="img-fluid" src={jakholi} /> */}
              </div>
            </div>
            <div className="row">
              <div className="col text-center visit-us-text">
                Grown at the majestic hills of Jakholi, Rudraprayag, Uttarakhand.<br /><br />
                One of the World's Highest Commercial Aquaponics Farms.
              </div>
            </div>
          </div>
        </div>


      </div>
    </MainLayout>
  )
}

export default HomePage