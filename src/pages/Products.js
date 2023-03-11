import React, { useState, useEffect } from 'react'
import MainLayout from '../layout/MainLayout.js'
import { Link,useParams } from "react-router-dom";
import '../assets/css/product.css'


export default function Products() {
  const [Title,setTitle] = useState() 
  const [Desc,setDesc] = useState() 
  const [Note,setNote] = useState() 
  const [Img,setImg] = useState() 

  const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/api/product/${id}`)
    .then(response => response.json())
    .then(data => {
      setTitle(data.data[0].title)
      setDesc(data.data[0].desc)
      setNote(data.data[0].note)
      setImg(data.data[0].img)
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='mt-4 pt-2'>
        <MainLayout >
        <div className="container-fluid text-center mt-product" >
                <h1>{Title}</h1>
                <h3>{Desc}</h3>
                <p>From <i class="fa fa-inr" aria-hidden="true" /> {Note}</p>
                <img className="img-fluid mx-auto d-block" src={Img} alt={Title} />
                <div className='buyNow mt-4'> <p className='buyNowBtn btn'><Link to="/store" >Buy Now</Link></p></div>
              <br />
            </div>
          </MainLayout>
    </div>
  )
}
