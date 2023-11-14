import  './SobreMim.scss'

export function SobreMim(){
    return(
        <section className="sectionHabilidade">
            <div id='SobreMim' className='divPai'>
            <h1>Sobre Mim</h1>
                <div className='divTextos'>
                   
                    <div>
                        <h3>Frontend Developer</h3>
                        <p>
                        Olá! Sou Samuel Santana, um desenvolvedor web e de Chatbots de 19 anos, dedicado ao aprimoramento constante. Estou investindo no inglês e em habilidades de aplicativos móveis e chatboots utilizando <span className='negrito'>JavaScript</span>, <span className='negrito'>TypeScript</span> e <span className='negrito'>React</span> para criar sistemas web inovadores. Estou ansioso por novas oportunidades para criar experiências incríveis na web e contribuir para a inovação tecnológica.
                        </p>
                    </div>

                    <div>
                        <h3>Experiencia</h3>
                        <p>
                        Minha trajetória profissional inclui uma experiência como estagiário na DNA System, atuando como desenvolvedor, além de outro estágio no Banco BRB. Também dediquei parte do meu tempo como desenvolvedor voluntário, contribuindo para a área de chatbots e sites. Atualmente, estou focado exclusivamente em meu trabalho como desenvolvedor freelancer, iniciando meu próprio negócio na página  
                         <a 
                         href="https://www.instagram.com/techworld" 
                         className='text-decoration-none fw-bold text-primary'>
                         Tech World
                        </a>
                        , cujo link pode ser encontrado logo abaixo ou na palavra tech world.
                        </p>
                    </div>
                </div>

                <div>
                    <img src="https://eopablo.github.io/pablocavalcante/images/codando.svg" alt="imagem" className='imagemSobreMim'/>
                </div>
                
            </div>
        </section>
        
    )
}