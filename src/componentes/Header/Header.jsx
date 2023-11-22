import './Header.scss'
import { TextAutomatico } from './textoAutomatico';

import { Image,Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import {linkedin, instagram, github, whatsapp} from '../Botoes/Links/Links';
import  Imagem  from '../../../src/assets/fotosPessoais.png'

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
                        <p className="tituloTres"> Olá, meu nome é  </p>
                        <h2 className="tituloUm">Samuel Santana</h2>
                        <h3 className="tituloTres"> Desenvolvedor: {<TextAutomatico />}</h3>
                        <p className='paragrafo'>
                            Sou formado em analise e desenvolvimento de sistemas e sou desenvolvedor Front-end
                        </p>
                        <p className='paragrafo'>
                            Ao lado direito no canto inferior contem informaçoes que voce tera informçoes sobre minha carreira e habilidade, com um chatboot feito por mim
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
                            Download Curriculo
                        </a>
                    </span>
                </div>
          
        </header>
    )
}