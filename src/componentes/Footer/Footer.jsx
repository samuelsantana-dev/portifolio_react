import './Footer.css'

import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import link from '../Botoes/Links/Links';


export function Footer(){
    return(
        <footer className="text-white footer">
          <div>
            <h1>Desenvolvedor</h1>
            <p>Hoje sou desenvolvedor Front-end mas pretendo me tornar um full stack web e futuramente entrar para o mundo mobile</p>
          </div>
        
          <div>    
                    <a 
                    href="https://www.linkedin.com/in/samuelss10/" 
                    {...link}>
                    <FaLinkedin />
                    </a>

                    <a 
                    href="https://www.instagram.com/tech_world128/" 
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
    
              <hr />
              <p className="text-center">© {new Date().getFullYear()} Desenvolvedor Front-End Junior</p>
              <p className="text-center">© {new Date().getFullYear()} Desenvolvedor de Planilhas </p>
              <p className="text-center">© {new Date().getFullYear()} Desenvolvedor de ChatBoots</p>
          
        </footer>
    )

}
