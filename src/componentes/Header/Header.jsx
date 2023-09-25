import './Header.scss'
import { TextAutomatico } from './textoAutomatico';

//import { BotaoAnimado } from '../Botoes/BotaoAnimado/BotaoAnimado'
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

import  Imagem  from '../../../src/assets/fotoAtualPessoal.png'

export function Header(){
    return(
        <header className="header">  
            
             <div>
                <img  
                src={Imagem}  
                alt='imagem de perfil' 
                className="img"
                /> 
             </div>

            
            <div className="divTitulos">

                <div>
                    <p className="tituloTres"> Olá, meu nome é  </p>
                    <h2 className="tituloUm">Samuel Santana</h2>
                    <h3 className="tituloTres"> Desenvolvedor: {<TextAutomatico />}</h3>
                    <p className='paragrafo'>
                        Estou no 4º Semestre de analise e desenvolvimento de sistemas e também estudo sobre Front-end, focado no desenvolvimento Web
                    </p>
                    <p className='paragrafo'>
                        Ao lado direito no canto inferior contem informaçoes que voce pode descobrir sobre mim, com um chatboot feito por mim
                    </p>
                </div>       

                <div>    
                    <a 
                    href="https://www.linkedin.com/in/samuelss10/" 
                    target="_blank" 
                    className='links' rel="noreferrer">
                    <FaLinkedin />
                    </a>

                    <a 
                    href="https://www.instagram.com/samuelss77/" 
                    target="_blank" 
                    className='links' 
                    rel="noreferrer">
                    <FaInstagram />
                    </a>

                    <a 
                    href="https://github.com/Samuel-Santana109" 
                    target="_blank" 
                    className='links' 
                    rel="noreferrer">
                    <FaGithub />
                    </a>

                    <a 
                    href="#" 
                    target="_blank" 
                    className='links' 
                    rel="noreferrer">
                    <FaWhatsapp />
                    </a>
                </div>

                <span>
                    <a href="CurriculoS.pdf" className="button" rel="noreferrer" download>
                        Download Curriculo
                    </a>
                </span>


            </div>

        </header>
    )
}