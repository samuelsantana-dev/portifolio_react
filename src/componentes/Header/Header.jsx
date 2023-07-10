import Style from './Header.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


export function Header(){
    return(
        <div className={Style.Header}>   
            <img 
            src='https://media.licdn.com/dms/image/D4D03AQGoej9hdaXlvA/profile-displayphoto-shrink_200_200/0/1683566632722?e=1693440000&v=beta&t=23zHoVX28e8UEOlPla-hFucQPhBiXR_xcPd94zGngBU' 
            alt='imagem de perfil' 
            className={Style.img}
            />

             <ul className={Style.Titulos}>
              <h3> Samuel Santana da Silva </h3>
              <li class="text-light"> Desenvolvedor front-end Junior </li>
              <li class="text-light"> Desenvolvedor de ChatBoots </li>
              <li class="text-light"> Desenvolvedor de Planilhas </li>
             </ul>       

              <button className={Style.Button}>
                      Contatos
              </button>   

            <div className={Style.Links}>
                <a href="https://www.linkedin.com/in/samuelss10/" target="_blank">
                    <FaLinkedin/>
                </a>
                <a href="https://www.instagram.com/samuelss77/" target="_blank">
                      <FaInstagram/>
                </a>
                <a href="https://github.com/Samuel-Santana109" target="_blank">
                    <FaGithub/>
                </a>
            </div>
        </div>
    )
}