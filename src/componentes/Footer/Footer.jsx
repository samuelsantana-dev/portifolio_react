import Style from './Footer.module.css'

export function Footer(){
    return(
        <footer className={Style.footer}>

            <p>Desenvolvedor Web --
              <a href="https://www.instagram.com/01_tech_world/"  target="_blank"> 
              tech World
                <i class="bi bi-instagram"> </i>
              </a>
            </p>

            <p>
                Desenvolvedor de ChatBoot
              <a href="https://www.instagram.com/herosboot/" target="_blank">
                HeroosBoot</a> 
                <i class="bi bi-chat-square"></i>
            </p>
        
  </footer>
    )

}
