import Style from './Header.module.css'

import { BotaoAnimado } from '../Botoes/BotaoAnimado/BotaoAnimado'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import  Imagem  from '../../../src/assets/fotoAtualPessoal.png'


export function Header(){
    return(
        <div className={Style.Header}>   
            <img 
            src={Imagem}
            alt='imagem de perfil' 
            className={Style.img}
            />

             <ul className={Style.Titulos}>
              <h3> Samuel Santana da Silva </h3>
              <li className="text-light"> Desenvolvedor front-end Junior </li>
              <li className="text-light"> Desenvolvedor de ChatBoots </li>
              <li className="text-light"> Desenvolvedor de Planilhas </li>
             </ul>       

            <BotaoAnimado />

            <div className={Style.Links}>
                <a href="https://www.linkedin.com/in/samuelss10/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/samuelss77/" target="_blank" rel="noreferrer">
                      <FaInstagram />
                </a>
                <a href="https://github.com/Samuel-Santana109" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}