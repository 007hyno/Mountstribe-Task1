import React from 'react'
import MainLayout from '../layout/MainLayout'
function ContactPage() {
  return (
    <MainLayout>
      <div>

      <div className="text-center align-middle contact-us-banner">
	            <div className="heading">Contact Us</div>
	            <br/>
	            <div className="sub-heading"><a className="home-link" href="index.html">Home</a> / Contact Us</div>
	        </div>
          <div className="container">
	            <div className="row address-message-banner">
	                <div className="col-md-6 address-banner">
	                    Get in touch
	                    <br/><br/>
	                    <address>Mountstribe Agritech Pvt. Ltd.<br/>C/O Balam Singh, 1 Tarla Aamwaala<br/>Dehradun, Uttarakhand - 248001, India
	                    <br/>
	                        <div className="contact">
	                            <a href="mailto:info@mountstribe.com"><i className="fa fa-envelope"> info@mountstribe.com</i></a>
	                        </div>
	                    <br/>
	                    Work with us
	                    <br/>
	                        <div className="contact">
	                            <a href="mailto:ravi.bibhuty@mountstribe.com"><i className="fa fa-envelope"> ravi.bibhuty@mountstribe.com</i></a>
	                        </div>
	                    </address>
	                </div>
	                <div className="col-md-6 message-banner">
	                    Leave a message <br/><br/>
	                    <form id="contact-form" >
						  
	                      <div className="form-row">
	                        <div className="form-group col-md-6">
	                          <input type="text" className="form-control" id="full-name" placeholder="Full Name" name="name" required/>
	                        </div>
	                        <div className="form-group col-md-6">
	                          <input type="email" className="form-control" id="email" placeholder="Email Address" name="email" required/>
	                        </div>
	                      </div>
	                      <div className="form-group">
	                        <input type="phone" className="form-control" id="phone" placeholder="Phone" name="phone" required/>
	                      </div>
	                      <div className="form-group">
	                        <textarea className="form-control" id="message" rows="3" placeholder="Message" name="message" required></textarea>
	                      </div>
	                      <button type="submit" className="btn btn-primary btn-block send-button">Submit</button>
	                    </form>
	                </div>
	            </div>
	        </div>

	        <div className="map-banner container-fluid jumbotron">
		        <div className="map-clean">
		            <div className="container">
		                <div className="intro">
		                    <h2 className="text-center">Our Farm </h2>
		                    <p className="text-center">We operate one of the World's Highest Commercial Aquaponics Farm. Come, and take a look yourselves.</p>
		                </div>
		            </div>
		            <iframe allowFullScreen="" frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13766.254548722458!2d78.88652438264094!3d30.391746558114768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909b310d51475f3%3A0xcc70fd5d45d9a471!2sJakholi%20Badma%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1587656549163!5m2!1sen!2sin" width="100%" height="450"></iframe>
		        </div>
		    </div>

        </div>
      </MainLayout>
  )
}

export default ContactPage