import React from "react";
import logo from "../images/logo.png"
import { Navbar, Nav } from 'react-bootstrap';

function Navigation(){
return(
   
  <Navbar expand="lg" className="nav">
  <Navbar.Brand href="#"><img src = {logo} alt="logo" /></Navbar.Brand>
   <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
</Navbar>

);
}

export default Navigation;