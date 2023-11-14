import './Header.scss'
import { TextAutomatico } from './textoAutomatico';
import { motion } from "framer-motion";
import { Image,Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import link from '../Botoes/Links/Links';

import  Imagem  from '../../../src/assets/fotosPessoais.png'

export function Header(){
    return(
        <header className="header">  
            
          

             <div className='divImagem'>
                 <Col className="m-auto" xs={10} md={12}>
                    <Image src={Imagem} className='img'  alt='imagem de perfil'  />
                 </Col>
             </div>

            

            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5 }} // Estilo inicial: opacidade zero e escala a 0.5 (menor)
                animate={{ opacity: 5, scale: 1 }} // Estilo final: opacidade 1 (totalmente visível) e escala 1 (tamanho normal)
                transition={{
                duration: 0.8, // Duração da animação: 0.8 segundos
                delay: 1.4,    // Atraso antes de iniciar a animação: 0.5 segundos
                ease: [0, 0.71, 0.5, 1.01] // Curva de easing personalizada para a animação
                }}
             >
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
                        {...link}>
                        <FaLinkedin />
                        </a>
                        <a 
                        href="https://www.instagram.com/samuelss77/" 
                        {...link}>
                        <FaInstagram />
                        </a>
                        <a 
                        href="https://github.com/Samuel-Santana109" 
                    {...link}>
                        <FaGithub />
                        </a>
                        <a 
                        href="https://wa.me/556191076831" 
                        {...link}>
                        <FaWhatsapp />
                        </a>
                    </div>

                    <span>
                        <a href="CurriculoS.pdf" className="button" rel="noreferrer" download>
                            Download Curriculo
                        </a>
                    </span>
                </div>
            </motion.div>

        </header>
      
    )
}