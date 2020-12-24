import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '../img/logo.png';


export default function Header() {
    return (
        <div className="sticky-top" style={{background: '#000'}}>
                    <Navbar expand="lg" className="justify-content-center text-white" variant="dark">
                        <Navbar.Brand className="pt-0">
                            <Link className="nav-link pt-0" to="/home">
                                <img src={logo} style={{height:"50px"}} alt="logo"></img>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-center mt-lg-0 mt-5" id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Item>
                                    <Link className="nav-link" to="/home">
                                     Hem
                                    </Link>
                                </Nav.Item>
                                <NavDropdown title="Meny" id="basic-nav-dropdown">
                                    <Link className="dropdown-item" to="/menu">Pizzor</Link>
                                    <Link className="dropdown-item" to="/menu/1">Kebab/Kyckling pizzor</Link>
                                    <Link className="dropdown-item" to="/menu/2">Oxfilé/Falafel</Link>
                                    <Link className="dropdown-item" to="/menu/3">Shawarma</Link>
                                    <Link className="dropdown-item" to="/menu/4">Hamburgare/Sallad</Link>
                                </NavDropdown>
                                <Nav.Item className="mr-5">
                                <Link className="nav-link" to="/kontakt">
                                    Kontakt
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="btn btn-success btn-xlg call-now-btn" href="tel:0310000000">
                                    <FontAwesomeIcon icon={faPhoneAlt} /> Beställ nu!
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            
        </div>
    )
}
