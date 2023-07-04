import Style from './NavBar.module.css'

//import SplitBasicExample from '../BotaoMenu/BotaoMenu.JSX'


export function NavBar(){
    return(
        <div className={Style.NavBar}>   
            <a href="#">Samuel Santana da Silva</a>
            <a href="#">Sobre Mim</a>
            <a href="#">Projetos</a>            
            <a href="#">Habilidades</a>            
        </div>
    )
}