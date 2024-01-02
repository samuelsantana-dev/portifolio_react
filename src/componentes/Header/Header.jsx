import './Header.scss'
import { TextAutomatico } from './textoAutomatico';
import { Image,Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import {linkedin, instagram, github, whatsapp} from '../Botoes/Links/Links';
import  Imagem  from '../../../src/assets/FotoPessoalLinkedin.png'

export function Header(){
    return(
        <header className="header">  

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
                    Sou formado em Análise e Desenvolvimento de Sistemas e atuo como desenvolvedor Front-end.
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
                        <a href="curriculoSamuel2023.pdf" className="button" rel="noreferrer" download>
                            Baixar Currículo.
                        </a>
                    </span>
                </div>
          
        </header>
    )
}