import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

// Importa o componente `NavBar` da biblioteca React.
export function NavBar() {
  return (
    // Começa a definição da barra de navegação usando o componente `Navbar` da biblioteca React-Bootstrap.

    // Define a cor de fundo da barra de navegação como "dark" e expandível para telas grandes (lg) com um tema escuro (variant="dark").
    <Navbar bg="dark" expand="lg" variant="dark" className='NavBar text-light fixed-top'>
      
      {/* Utiliza um componente `Container` para envolver o conteúdo da barra de navegação. */}
      <Container>

        {/* Define o logotipo ou título da barra de navegação com um link para a âncora "#home". Também aplica classes de estilo "nome" e "h1". */}
        <Navbar.Brand href="#home" className='nome '>SAMUEL SANTANA</Navbar.Brand>

        {/* Adiciona um botão de alternância (hamburguer) para telas pequenas. */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        {/* Define a seção que será exibida quando a barra de navegação for expandida.
           O `id` "navbar-nav" e o `aria-controls` do botão de alternância devem coincidir. */}

        <Navbar.Collapse id="navbar-nav">
          {/* Define uma lista de links de navegação à direita (ms-auto). */}
          <Nav className="ms-auto">
            {/* Cada link de navegação é um componente `Nav.Link` que possui um link para uma âncora correspondente. */}
            <Nav.Link href="#" className="text-light">Inicio</Nav.Link>
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

