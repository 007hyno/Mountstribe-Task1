import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
// import { Navbar, Nav } from 'react-bootstrap';

import image from '../assets/logo/mountstribe-white.svg';

import '../assets/css/navbarStyle.css';
// --------------------------
import { Container, Nav, Navbar } from 'react-bootstrap';


function NavCom() {
	const [colorChange, setColorchange] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setColorchange(false)
		window.scrollTo(0, 0)
	}, [])
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		}
		else {
			setColorchange(false);
		}
	};

	window.addEventListener('scroll', changeNavbarColor);

	return (




		<Navbar bg="dark" variant="dark" expand="lg" className={colorChange? 'navbar-css2' : 'navbar-css' }>
			<Container>
				<Navbar.Brand href="/">
					<img className={colorChange? 'logo2' : 'logo' } src={image}  alt="Logo" color='#000000' />
				</Navbar.Brand>
				{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
				<Navbar.Toggle onClick={() => setOpen(!open)} />


				<Navbar.Collapse id="basic-navbar-nav" className='navlink-cont' in={open}>
					<Nav className="me-auto">
					<Nav.Link ><Link to='/' className='nav-link '>Home</Link></Nav.Link>
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