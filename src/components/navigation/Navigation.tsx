import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="primary" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Pokedex
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/pokemon">
              Pokemon
            </Nav.Link>
            <Nav.Link as={Link} to="/temtem">
              TemTem
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
