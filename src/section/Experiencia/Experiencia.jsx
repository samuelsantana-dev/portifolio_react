import  './Experiencia.scss'

export function Experiencia(){
    return(
        <section id="Oportunidades" className="sectionExperiencia">
            <div>
                <h3 className='text-center'>Experiencia</h3>
                <p className='text-center'>
                Minha trajetória profissional inclui uma experiência como estagiário na DNA System, atuando como desenvolvedor, além de outro estágio no Banco BRB. Também dediquei parte do meu tempo como desenvolvedor voluntário, contribuindo para a área de chatbots e sites. Atualmente, estou focado exclusivamente em meu trabalho como desenvolvedor freelancer, iniciando meu próprio negócio na página  
                    <a 
                    href="https://www.instagram.com/techworld" 
                    className='text-decoration-none fw-bold text-primary'>
                    Tech World
                </a>
                , cujo link pode ser encontrado logo abaixo ou na palavra tech world.
                </p>
            </div>

            <div>
                    <img src="https://eopablo.github.io/pablocavalcante/images/programming.svg" alt="Imagem de alguem estudando" className='imagem' />
            </div>
            
      </section>
    )
}
