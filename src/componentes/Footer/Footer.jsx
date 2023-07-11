import './Footer.css'

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';


export function Footer(){
    return(
        <footer class=" text-white footer">
            <Container>
                <Row>
            <Col>
              <h5>Desenvolvedor</h5>
              <p>Hoje sou desenvolvedor Front-end mas pretendo me tornar um full stack web e futuramente entrar para o mundo mobile</p>
            </Col>
          <Col>
            <h5>Contato</h5>
            <p>Email: samuelsantanadasilva8@gmail.com</p>
            <p>Telefone: (61) 9 9107-6831</p>
             <a href='https://www.linkedin.com/in/samuelss10/' target='blank' class='a'> Linkedin <FaLinkedin />  </a> 
            <a href='https://www.instagram.com/samuelss77/' target='blank' class='a'> Instagram <FaInstagram /> </a>   
             <a href='https://github.com/Samuel-Santana109' target='blank' class='a'> GitHub <FaGithub />  </a>  
            
          </Col>
        </Row>
        <hr />
        <p className="text-center">© {new Date().getFullYear()} Desenvolvedor Front-End Junior</p>
        <p className="text-center">© {new Date().getFullYear()} Desenvolvedor de Planilhas </p>
        <p className="text-center">© {new Date().getFullYear()} Desenvolvedor de ChatBoots</p>
            </Container>
        </footer>
    )

}
