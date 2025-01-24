import './Header.scss'
import { TextAutomatico } from './textoAutomatico';
import { Image,Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import {linkedin, instagram, github, whatsapp} from '../Botoes/Links/Links';
import  Imagem  from '../../../src/assets/foto-perfil.jpg'

export function Header(){
    return(
        <header 
        className="header d-flex justify-content-center align-items-center"
        style={{ 
          backgroundColor: '$corDeFundoAzul',
          color: '$corParagrafos',
          minHeight: '100vh',
          padding: '1rem'
        }}>  

             <div className='divImagem'>
                 <Col className="p-3" xs={10} md={12}>
                    <Image src={Imagem} className='img'  alt='imagem de perfil' />
                 </Col>
             </div>

         
                <div className="divTitulos">
                    <div>
                    <p className="tituloTres">Olá, meu nome é</p>
                    <h2 className="tituloUm">Samuel Santana</h2>
                    <h3 className="tituloTres">Desenvolvedor: <br />{<TextAutomatico />}</h3>
                    <p className='paragrafo'>
                    Sou formado em Análise e Desenvolvimento de Sistemas e atuo como desenvolvedor Full Stack react e node.
                    </p>
                    <p className='paragrafo'>
                    No canto inferior direito, você encontrará informações sobre minha carreira e habilidades, incluindo um chatbot desenvolvido por mim.
                    </p>

                    </div>       

                    <div>    
                        <a {...linkedin}>
                        <FaLinkedin />
                        </a>
                        <a {...instagram}>
                        <FaInstagram />
                        </a>
                        <a {...github} >
                        <FaGithub />
                        </a>
                        <a {...whatsapp} >
                        <FaWhatsapp />
                        </a>
                    </div>

                    <span>
                        <a href="desenvolvedor-full-stack.pdf" className="button" rel="noreferrer" download>
                            Baixar Currículo.
                        </a>
                    </span>
                </div>
          
        </header>
    )
}