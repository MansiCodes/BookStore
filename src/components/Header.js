import React from 'react';
import { FaCartPlus, FaStore, FaUser, FaSearch } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/findMyBook.png';  
import 'bootstrap/dist/css/bootstrap.min.css';  

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="FindMyBook Logo"
            style={{ height: '30px' }} 
          />
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="mx-auto">
            <div className="d-flex align-items-center">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search..."
                style={{ maxWidth: '400px' }} 
              />
              <button className="btn btn-outline-secondary" type="button">
                <FaSearch />
              </button>
            </div>
          </Nav>

         
          <Nav>
            <Nav.Link href="#cart" className="d-flex align-items-center">
              <FaCartPlus className="me-1" size={20} />
              
            </Nav.Link>
            <Nav.Link href="#store" className="d-flex align-items-center">
              <FaStore className="me-1" size={20} />
             
            </Nav.Link>
            <Nav.Link href="#profile" className="d-fle align-items-center">
              <FaUser className="me-1" size={20} />
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;





