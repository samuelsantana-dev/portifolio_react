import './Footer.css'
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import {linkedin, instagram, github, whatsapp} from '../Botoes/Links/Links';


export function Footer(){
    return(
        <footer className="text-white footer">
          <div>
          <h1>Desenvolvedor Front-End</h1>
          <p>Atualmente atuo como desenvolvedor Front-end, mas meu objetivo é me tornar um desenvolvedor full stack web e, futuramente, ingressar no mundo mobile.</p>

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
            <hr />
            <div>
              <span className="text-center">© {new Date().getFullYear()} Desenvolvedor Front-End </span>
              <span className="text-center">© {new Date().getFullYear()} Desenvolvedor de ChatBots</span>
            </div>    
          
        </footer>
    )

}
