import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout.js'

import '../assets/css/store-style.css'


function StorePage() {
  const [microgreens, setMicrogreens] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(`${apiUrl}store`);
  useEffect(() => {
    fetch(`${apiUrl}store`)
      .then(response => response.json())
      .then(data => setMicrogreens(data.data))
      .catch(error => console.log(error));


  }, []);

  return (
    <MainLayout>
      <div>
        <div className="jumbotron jumbotron-fluid mt-header ">
          <div className="container">
            <p className="text-center top-text">Shop now at the Mounstribe Store online. Get free, no-contact delivery.</p>
          </div>
        </div>

        <div>
          {microgreens.map(microgreen => (

            <div className="container-fluid text-center mt-product" style={{
              backgroundColor: microgreen.id % 2 === 0 ? "#000" : "#fff"
            }}>
              <Link to = {`/store/${microgreen.title}`} className="mt-product-link">
                <h1 style={{
                  color: microgreen.id % 2 === 0 ? "#fff" : "#000"
                }}>{microgreen.title}</h1>
                <h3 style={{
                  color: microgreen.id % 2 === 0 ? "#fff" : "#000"
                }}>{microgreen.desc}</h3>
                <p style={{
                  color: "#18b478"
                }}>From <i class="fa fa-inr" aria-hidden="true" /> {microgreen.note}</p>
                <button type="button" className="btn btn-link btn-lg">Buy Now &gt;</button>
                <img className="img-fluid mx-auto d-block" src={microgreen.img} alt={microgreen.title} />
              </Link>
              <br />
            </div>
          ))}
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