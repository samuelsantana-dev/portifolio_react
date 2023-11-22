import  './SobreMim.scss'

export function SobreMim(){
    return(
        <section id='SobreMim' className="sectionSobreMim">
            <div  className='sobreMimdivPai'>
            <h1 className='text-center'>Sobre Mim</h1>
                <div className='divTextos'>
                   
                    <div>
                        <h3>Frontend Developer</h3>
                        <p>
                        Olá! Sou Samuel Santana, um desenvolvedor web e de Chatbots, dedicado ao aprimoramento constante. Estou investindo no inglês e em habilidades de aplicativos móveis e chatboots utilizando <span className='negrito'>JavaScript</span>, <span className='negrito'>TypeScript</span> e <span className='negrito'>React</span> para criar sistemas web inovadores. Estou ansioso por novas oportunidades para criar experiências incríveis na web e contribuir para a inovação tecnológica.
                        </p>
                    </div>

                    <div>
                     
                    </div>
                </div>

                <div>
                    <img src="https://eopablo.github.io/pablocavalcante/images/codando.svg" alt="imagem" className='imagemSobreMim'/>
                </div>
                
            </div>
        </section>
        
    )
}