import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/footer-style.css';

function Footer() {
	return (
		<footer className="footer w-100">
			<div className="container bottom_border">

				<div className="row pt-3">
	              <div className="col-12">
	                <h6 className="headin5_amrc col_white_amrc pt2">A Beyond Organics Company | <span className="start-up">#Start-upIndia</span> | #BeyondOrganics</h6>
	                <p className="mb2 footerLinks">
	                  <span className="col_white_amrc pt2">All Subscriptions: </span> <Link to='/store'>Microgreens Blush</Link> | <Link to='/store'>Microgreens Lite</Link> | <Link to='/store'>Organic Wheatgrass</Link>
	                </p>
	              </div>
	            </div>
				<div className="row">
					<div className=" col-sm-4 col-md col-sm-4  col-12 col">
						<h5 className="headin5_amrc col_white_amrc  rp mt-4">Find us</h5>
						<p className="mb-1"> Mountstribe is a startup nestled in the Himalayas. We want to change the landscape of Indian Agricultural industry by producing and providing Highly Nutritious & Chemical-Free 'Organic' food.</p>
						<p><i className="fa fa-location-arrow mt-2"></i> &nbsp; C/O Balam Singh, 1 Tarla Amwaala, Dehradun, Uttarakhand - 248001 </p>
						<p><i className="fa fa fa-envelope mt-2"></i> info@mountstribe.com  </p>
					</div>
					<div className=" col-sm-4 col-md  col-6 col">
						<h5 className="headin5_amrc col_white_amrc pt2 mt-3">Quick links</h5>
						<ul className="footer_ul_amrc">
							<li><Link to='/' className=''>Home</Link></li>
							<li><Link to='/store' className=''>Store</Link></li>
							<li><Link to='/about' className=''>About Us</Link></li>
							<li><Link to='/contact' className=''>Contact Us</Link></li>

						</ul>
					</div>
					<div className=" col-sm-4 col-md  col-6 col">
						<h5 className="headin5_amrc col_white_amrc pt2 mt-3">Resources</h5>
						<ul className="footer_ul_amrc">
							<li><Link to='/terms-and-conditions' className=''>Terms & Conditions</Link></li>
							<li><Link to='/privacy-policy' className=''>Privacy Policy</Link></li>
							<li><Link to='/policies' className=''>Cancellation, Return and Refunds</Link></li>
							<li><a href='/sitemap.xml' className='' target="_blank">Sitemap</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container social_footer_parent">
				<p className="text-center mt-2">Copyright 2019-21 | Made with love by <Link to="/" className='text-primary'>Mountstribe</Link></p>

				<ul className="social_footer_ul">
					<li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
					<li><a href="#"><i className="fa fa-twitter"></i></a></li>
					<li><a href="https://www.linkedin.com/company/mountstribe-agritech"><i className="fa fa-linkedin"></i></a></li>
					<li><a href="https://www.instagram.com/mountstribe"><i className="fa fa-instagram"></i></a></li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer   