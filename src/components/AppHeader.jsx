import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/logo.png'; 

function AppHeader() {
  return (
    <Navbar sticky="top" bg="light" variant="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="30" 
            className="d-inline-block align-top"
            alt="Logo INDOEKA"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#layanan">Layanan</Nav.Link>
            <Nav.Link href="#galeri">Galeri</Nav.Link> {/* <-- TAMBAHKAN INI */}
            <Nav.Link href="#visimisi">Visi & Misi</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button href="#contact" variant="primary" className="ms-lg-2">Hubungi Kami</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;