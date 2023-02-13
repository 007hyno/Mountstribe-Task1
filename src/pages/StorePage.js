import React from 'react'
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout.js'

import store1 from '../assets/images/store1.png'
import store2 from '../assets/images/store2.png'
import store3 from '../assets/images/store3.png'

import '../assets/css/store-style.css'

function StorePage() {
  return (
    <MainLayout>
      <div>


        <div className="jumbotron jumbotron-fluid mt-header ">
          <div className="container">
            <p className="text-center top-text">Shop now at the Mounstribe Store online. Get free, no-contact delivery.</p>
          </div>
        </div>
        <div className="container-fluid text-center mt-product">
          <Link to="/store/microgreens-blush" className="mt-product-link">
            <h1>MicroGreens Blush</h1>
            <h3>Nutrient dense food.</h3>
            <p>From <i className="fa fa-inr" aria-hidden="true">75*</i> per day before recycle</p>
            <button type="button" className="btn btn-link btn-lg">Buy Now &gt;</button>
            <img className="img-fluid mx-auto d-block" src={store1} alt="Microgreens Blush" />
          </Link>
        </div>
        <br />
        <div className="container-fluid text-center mt-product" style={{ backgroundColor: "#000" }}>
          <Link to="/store/microgreens-lite" className="mt-product-link">
            <h1 style={{ color: "#fff" }}>MicroGreens Lite</h1>
            <h3 style={{ color: "#e9f0fc" }}>Blast of happiness.</h3>
            <p style={{ color: "#e9fcf5" }}>From <i className="fa fa-inr" aria-hidden="true">35*</i> per day before recycle</p>
            <button type="button" className="btn btn-link btn-lg">Buy Now &gt;</button>
            <img className="img-fluid mx-auto d-block" src={store2} alt="Microgreens Lite" />
          </Link>
        </div>
        <br />
        <div className="container-fluid text-center mt-product">
          <Link to="/store/organic-wheatgrass" className="mt-product-link">
            <h1>Organic WheatGrass</h1>
            <h3>Superfood for you.</h3>
            <p>From <i className="fa fa-inr" aria-hidden="true">25*</i> per day before recycle</p>
            <button type="button" className="btn btn-link btn-lg">Buy Now &gt;</button>
            <img className="img-fluid mx-auto d-block" src={store3} alt="Organic WheatGrass" />
          </Link>
        </div>
        <div className="container-fluid mt-mrp">
          <div className="container">
            <p>
              *Listed pricing is Maximum Retail Price (inclusive of all taxes).<br />
              *Free Delivery<br />
              *Weekly Subscriptions
            </p>
          </div>
        </div>
      </div>


    </MainLayout >
  )
}

export default StorePage