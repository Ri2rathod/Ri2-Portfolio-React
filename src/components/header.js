import React  ,{ useState }from 'react'
import Hamburger from './hamburger';
import logo from '../assets/images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

 
export default function Header() {
    
    const [space, setSpace] = useState(0)
    
    return (
        <Navbar expand="lg" fixed="top" className="header-blur header-gradiant-color" style={{
            backgroundColor: 'white',
            borderRadius:40,
            marginInline:'1em',
            marginTop:16,
            paddingBottom:space
        }} 
        onToggle={(e)=>{
              e? setSpace(20):setSpace(0)
        } }
        >
            <Container >
                <Navbar.Brand to="./index" className=""> <img src={logo} alt="logo" className="img-fluid logo_img" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" >
                    <Hamburger />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav " className=" flex-grow-0" > 
                    <Nav className="mr-auto ">

                        <NavLink exact to="./" activeClassName="active" className="mx-md-3 nav-link mx-2 ">
                            <span className='text-dark'>Home</span>
                        </NavLink>
                        <NavLink exact to="./Services" activeClassName="active" className="mx-md-3 nav-link mx-2 ">
                            <span className='text-dark'>  Services </span>
                        </NavLink>
                        <NavLink exact to="./About_Us" activeClassName="active" className="mx-md-3 nav-link mx-2 ">
                            <span className='text-dark'>About Us</span>
                        </NavLink>
                        <NavLink exact to="./Blogs" activeClassName="active" className="mx-md-3 nav-link mx-2 ">
                            <span className='text-dark'>Blogs</span>
                        </NavLink>
                        <NavLink exact to="./Works" activeClassName="active" className="mx-md-3 nav-btn nav-link mx-2  bg-danger rounded-pill btn px-3">
                            <span className='text-white'>Work</span>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

