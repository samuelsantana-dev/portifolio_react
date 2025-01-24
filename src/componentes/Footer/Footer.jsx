import './Footer.css'
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import {linkedin, instagram, github, whatsapp} from '../Botoes/Links/Links';


export function Footer(){
    return(
        <footer className="text-white footer">
          <div>
          <h1>Desenvolvedor Front-End</h1>
          <p>Estou focado em aprimorar meu conhecimento, especialmente em JavaScript, TypeScript e React, para criar sistemas web inovadores, integrações entee API,desenvolvi habilidade de trabalho em equipe, metodologia Agile, ou seja, estimativa de pontos de história, refinamento, planejamento de sprint, retrospectiva, demonstrações de sprint, Excelentes habilidades de trabalho em equipe, organização, visão analítica e gestão do tempo.</p>

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
              <span className="text-center">© {new Date().getFullYear()} Desenvolvedor Full Stack</span>
            </div>    
          
        </footer>
    )

}
