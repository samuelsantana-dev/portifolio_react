import  './SobreMim.scss'

export function SobreMim(){
    return(
        <>
        <div id='SobreMim' className='div'>
            <div className='divTextos'>
                <h1>Sobre Mim</h1>
                <h3>Futuro Frontend Developer</h3>
                <p >
                  Olá! Sou Samuel Santana, um desenvolvedor web e de Chatbots de 19 anos, dedicado ao aprimoramento constante. Estou investindo no inglês e em habilidades de aplicativos móveis e chatboots utilizando <span className='negrito'>JavaScript</span>, <span className='negrito'>TypeScript</span> e <span className='negrito'>React</span> para criar sistemas web inovadores. Estou ansioso por novas oportunidades para criar experiências incríveis na web e contribuir para a inovação tecnológica. 
                </p>
            </div>

            <img src="https://eopablo.github.io/pablocavalcante/images/codando.svg" alt="imagem" className='imagemSobreMim'/>
            
        </div>
        </>
    )
}