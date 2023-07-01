import Style from './NavBar.module.css'

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