import './Footer.css'

import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';


export function Footer(){
    return(
        <footer className="text-white footer">
          <div>
            <h1>Desenvolvedor</h1>
            <h4>Hoje sou desenvolvedor Front-end mas pretendo me tornar um full stack web e futuramente entrar para o mundo mobile</h4>
          </div>
        
          <div>    
                <h5>Email: samuelsantanadasilva8@gmail.com</h5>
                <h5>Telefone: (61) 9 9107-6831</h5>
                  <a href="https://www.linkedin.com/in/samuelss10/" target="_blank" className='links' rel="noreferrer">
                                      <FaLinkedin />
                  </a>
                  <a href="https://www.instagram.com/samuelss77/" target="_blank" className='links' rel="noreferrer">
                                  <FaInstagram />
                  </a>
                  <a href="https://github.com/Samuel-Santana109" target="_blank" className='links' rel="noreferrer">
                                  <FaGithub />
                  </a>
                  <a href="#" target="_blank" className='links' rel="noreferrer">
                                  <FaWhatsapp />
                  </a>
          </div>  

              <hr />
              <h5 className="text-center">© {new Date().getFullYear()} Desenvolvedor Front-End Junior</h5>
              <h5 className="text-center">© {new Date().getFullYear()} Desenvolvedor de Planilhas </h5>
              <h5 className="text-center">© {new Date().getFullYear()} Desenvolvedor de ChatBoots</h5>
          
        </footer>
    )

}
