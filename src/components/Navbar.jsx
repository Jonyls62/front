import { Navbar, Nav,  Container } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Lis">Lis</Nav.Link>
            <Nav.Link href="/Eli">Eli</Nav.Link>
            <Nav.Link href="/Dante">Dante</Nav.Link>
            <Nav.Link href="/Jony">Jony</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
