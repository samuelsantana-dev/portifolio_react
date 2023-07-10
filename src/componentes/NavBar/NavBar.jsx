import Style from './NavBar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//import SplitBasicExample from '../BotaoMenu/BotaoMenu.JSX'


export function NavBar(){
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">Samuel Santana da Silva</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Sobre Mim</Nav.Link>
            <Nav.Link href="#features">Projetos</Nav.Link>
            <Nav.Link href="#pricing">Habilidades</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    )
}