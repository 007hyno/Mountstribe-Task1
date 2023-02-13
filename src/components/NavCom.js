import React from 'react'
import { Link } from "react-router-dom";
// import { Navbar, Nav } from 'react-bootstrap';

import image from '../assets/logo/mountstribe-white.svg';

import '../assets/css/navbarStyle.css';
// --------------------------
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavCom() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" className='navbar-css'>
			<Container>
				<Navbar.Brand href="/">
					<img src='https://mountstribe.com/static/media/mountstribe-white.096b8dc2.svg' width="30" height="30" alt="Logo" color='#000000' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
					<Nav.Link ><Link to='/' className='nav-link '>Home</Link></Nav.Link>
						<Nav.Link ><Link to='/blog' className='nav-link '>Blog</Link></Nav.Link>
						<Nav.Link ><Link to='/about' className='nav-link '>About</Link></Nav.Link>
						<Nav.Link ><Link to='/contact' className='nav-link '>Contact</Link></Nav.Link>
						<Nav.Link ><Link to='/store' className='nav-link '>Store</Link></Nav.Link>
						<Nav.Link ><Link to='/login' className='nav-link '>Login</Link></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavCom