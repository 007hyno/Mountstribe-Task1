import React from 'react'
import { Link } from "react-router-dom";
// import { Navbar, Nav } from 'react-bootstrap';
import '../assets/css/navbarStyle.css';
import image from '../assets/logo/mountstribe-white.svg';


function NavCom() {
	return (
		<div>
			<div className="navigation-wrap start-header start-style">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<nav className="navbar navbar-expand-md">
								<Link className="navbar-brand" to="/" target="_blank"><img src={image} alt="Mountstribe" /></Link>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>
								<div className="collapse navbar-collapse" id="navbarSupportedContent">
									<ul className="navbar-nav ml-auto py-4 py-md-0">

										<li className="nav-item mx-4 pl-4 pl-md-0 ml-0 ml-md-4 active">
											<Link className="nav-link" to="/"><span className="animated fadeIn" style={{ animationDelay: '0.30s' }}>Home</span></Link>
										</li>

										<li className="nav-item mx-4 pl-4 pl-md-0 ml-0 ml-md-4">
											<Link className="nav-link" to="/about"><span className="animated fadeIn" style={{ animationDelay: '0.35s' }}>About Us</span></Link>
										</li>

										<li className="nav-item mx-4 pl-4 pl-md-0 ml-0 ml-md-4">
											<Link className="nav-link" to="/store"><span className="animated fadeIn" style={{ animationDelay: '0.39s' }}>Store</span></Link>
										</li>

										<li className="nav-item mx-4 pl-4 pl-md-0 ml-0 ml-md-4">
											<Link className="nav-link" to="/blog"><span className="animated fadeIn" style={{ animationDelay: '0.43s' }}>Blogs</span></Link>
										</li>

										<li className="nav-item mx-4 pl-4 pl-md-0 ml-0 ml-md-4">
											<Link className="nav-link" to="/contact"><span className="animated fadeIn" style={{ animationDelay: '0.46s' }}>Contact</span></Link>
										</li>

										<li className="nav-item mx-4 pl-4 pl-md-0 ml-0 ml-md-4">
											<Link className="nav-link" to="/sign-in"><span className="animated fadeIn" style={{ animationDelay: '0.50s' }}>Account</span></Link>
										</li>

									</ul>

								</div>
							</nav>

						</div>
					</div>
				</div>
			</div>


			{/* <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src='https://mountstribe.com/static/media/mountstribe-white.096b8dc2.svg' width="30" height="30" alt="Logo" color='#000000' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='/blog' className='nav-link'>Blog</Link>
          <Link to='/about' className='nav-link'>About</Link>
          <Link to='/contact' className='nav-link'>Contact</Link>
          <Link to='/store' className='nav-link'>Store</Link>
          <Link to='/l  ogin' className='nav-link'>Login</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}



		</div >
	)
}

export default NavCom