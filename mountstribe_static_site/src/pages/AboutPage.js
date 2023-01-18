import React from 'react'
import MainLayout from '../layout/MainLayout'

import '../assets/css/about-style.css'


import priya from '../assets/images/priya.jpg'
import ravi from '../assets/images/ravi.jpg'
import kartikeya from '../assets/images/kartikeya.jpg'

function AboutPage() {
  return (
        <MainLayout>
    <div className='main-cont'>
    
    
    <div className="text-center align-middle about-us-banner">
		            <div className="heading">About Us</div>
		            <br/>
		            <div className="sub-heading"><a className="home-link" href="index.html">Home</a> / About Us</div>
		        </div>
				<div className='story-cont'>
		            <div className=" contact-story">
		                <div className="row">
		                    <div className="col">
		                        <h3 className='title'>Our Story</h3>
		                    </div>
		                </div>
		                <div className="row">
		                    <div className="col-md-6">
		                        <p>
									With every passing day, mankind is becoming a larger family to feed and our limited resources are getting overburdened with the increasing pressure on both farmers and farming. This simply manifests the fact that conventional farming methods have become obsolete.
		                        </p>
		                        <p>
									With the vision to transform this scenario for the better, we dared to start Mountstribe AgriTech, an initiative that redefines the process of farming, benefiting farmers, consumers, and mother nature at the same time.
		                        </p>
		                    </div>
		                    <div className="col-md-6">
		                        <p>
								At MountsTribe, we aim to benefit not just mankind but also the environment which is the heart of the beings of all life on this planet. Our sustainable farming technology is worthy of replacing 10000-year-old Agricultural Practices and grow substantially more food, using a fraction of water used in soil farming.
		                        </p>
		                    </div>
		                </div>
		        
						</div>
						</div>
		        <div className="learn-innovate spacing">
		          <div className="container contact-story">
		            <div className="row">
		                <div className="col">
		                    <h3 className='title'>Innovative Aquaponics</h3>
		                </div>
		            </div>
		            <div className="row">
		                <div className="col-md-6">
		                    <p>
								"Aquaponics", is what we are. Mountstribe is dedicated to the preservation of water in agriculture and the production of Better than Organic foods with no chemicals used. Our farming methodologies are tested to recycle up to 95% of water and grow high-quality produce. We uniformly focus on learning and innovating.
		                    </p>
		                    <p>
								Together with the farmers, we are working hard to become a leading producer of leafy greens, fruits, fishes for the market. We are determined to write a new chapter in the future of sustainable farming.
		                    </p>
		                </div>
		                <div className="col-md-6">
		                    <p>
								We have jumped the curve to improve the overall efficiency of the system. Our IoT-enabled technology results in lesser energy consumption, plus much higher yields of products. The entire system is semi-automated so that the people of rural areas, where we are aiming to be situated can be easily trained with working on it within short amounts of time.
		                    </p>
		                </div>
		            </div>
		          </div>
		        </div>
		        <div className="container spacing">
		            <div className="our-story contact-story">
		                <div className="row">
		                    <div className="col">
		                        <h3 className='text-center title'>The Team</h3>
		                    </div>
		                </div>
						<div className="row team-cards">
							<div className="col-lg-4">
								<div className="card">
									<img className="card-img-top" src={ravi} alt="Executive Head"/>
									<div className="card-body">
										<h5 className="card-title">Ravi Vibhuty</h5>
										<h6 className="card-subtitle mb-2 text-muted">Executive Head</h6>
										<p className="card-text">Ravi has done Master's in Computer Applications. With his idea and initial research, he laid the foundation of Mountstribe.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="card">
									<img className="card-img-top" src={priya} alt="Financial Head"/>
									<div className="card-body">
										<h5 className="card-title">Priya Rawat</h5>
										<h6 className="card-subtitle mb-2 text-muted">Financial Head</h6>
										<p className="card-text">Priya took a Master's degree in Economics. She has worked on a few projects regarding the demographics of the Kumaon region.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="card">
									<img className="card-img-top" src={kartikeya} alt="Technology Head"/>
									<div className="card-body">
										<h5 className="card-title">Kartikeya Kapparwan</h5>
										<h6 className="card-subtitle mb-2 text-muted">Technology Head</h6>
										<p className="card-text">After earning Master's in Computers, Kartikeya joined Mountstribe to work on the initial projects. He is also responsible for the technical operations.</p>
									</div>
								</div>
							</div>
						</div>
		            </div>
		        </div>
		        <div className="row join-tribe text-center text-white">
		            <h3 className="join-tribe-heading title">Join the Tribe</h3>
		            <p className="text-center desc">A community of enthusiastic, and innovative people who are determined to bring a change in society. Be a part of our revolutionary team and follow us for updates, on our social media handles.</p>
	                <ul className="text-center flex">
		                <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
		                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
		                <li><a href="https://www.linkedin.com/company/mountstribe-agritech"><i className="fa fa-linkedin"></i></a></li>
		                <li><a href="https://www.instagram.com/mountstribe"><i className="fa fa-instagram"></i></a></li>
		            </ul>
		        </div>


      </div>
    </MainLayout>

  )
}

export default AboutPage