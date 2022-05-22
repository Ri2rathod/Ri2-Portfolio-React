import React from 'react'
import Hamburger from './hamburger';
import logo from '../assets/images/svg/logo.svg';
import {  Container, Nav ,Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function header() {
    return (
               <Navbar  expand="lg" fixed="top" className="header-blur" style={{'backdropFilter':"blur(10px)"}}> 
                    <Container >
                        <Navbar.Brand to="./index" className=""> <img src={logo} alt="logo" className="img-fluid logo_img"/> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
                            <Hamburger />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav " className=" flex-grow-0">
                        <Nav className="mr-auto ">
                            
                            <NavLink exact  to="./" activeClassName="active" className="mx-md-3 nav-link mx-2 text-primary">
                                <span>Home</span>
                            </NavLink>
                            <NavLink exact to="./Services" activeClassName="active"  className="mx-md-3 nav-link mx-2 text-primary">
                                <span> Services </span>
                            </NavLink>
                            <NavLink exact to="./About_Us" activeClassName="active"  className="mx-md-3 nav-link mx-2 text-primary">
                                <span>About Us</span> 
                            </NavLink>
                            <NavLink exact to="./Blogs" activeClassName="active"  className="mx-md-3 nav-link mx-2 text-primary"> 
                                <span>Blogs</span> 
                            </NavLink>
                            <NavLink exact to="./Works" activeClassName="active"  className="mx-md-3 nav-btn nav-link mx-2 text-primary bg-danger rounded btn px-3">
                                <span>Work</span>
                            </NavLink>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
    )
}

export default header
