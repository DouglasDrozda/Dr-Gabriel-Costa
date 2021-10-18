import React from 'react';
import '../styles/Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logoDrGabriel from '../images/logoDrGabriel.png'
import whatsapp from '../images/whatsapp.png'


class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <Navbar variant="light" expand="lg">
          <Container>
            <div className="header-title">
              <Navbar.Brand href="#home"><img src={logoDrGabriel} alt="Logotipo DrGabriel" width="250px" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#sobre">Sobre</Nav.Link>
                <Nav.Link href="#contato">Contato</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="teste">
          <a href="https://wa.me/5513997284883" target="_blank" rel="noreferrer" className="contact-whats-container">
            <img src={whatsapp} alt="" width="42px" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
