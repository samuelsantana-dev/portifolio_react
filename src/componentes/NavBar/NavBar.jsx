import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" variant="light">Samuel Santana da Silva</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#SobreMim" className="text-light">Sobre Mim</Nav.Link>
            <Nav.Link href="#Projetos" className="text-light">Projetos</Nav.Link>
            <Nav.Link href="#Oportunidades" className="text-light">Oportunidades</Nav.Link>
            <Nav.Link href="#Tecnologias" className="text-light">Tecnologias</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

