import  './SobreMim.scss'

export function SobreMim(){
    return(
        <section id='SobreMim' className="sectionSobreMim">

            <h1 className='text-center textoh1'>Sobre Mim</h1>

            <div className='divTexto d-flex'>

                <div className='divTxt'>
                    <h3 className='text-center'>Desenvolvedor Frontend</h3>
                    <p className='text-center'>
                        Olá! Sou Samuel Santana, um desenvolvedor web e de Chatbots, dedicado ao aprimoramento constante. Estou investindo no inglês e em habilidades de aplicativos móveis e chatbots utilizando <span className='negrito'>JavaScript</span>, <span className='negrito'>TypeScript</span> e <span className='negrito'>React</span> para criar sistemas web inovadores. Estou ansioso por novas oportunidades para criar experiências incríveis na web e contribuir para a inovação tecnológica.
                    </p>
                </div>

                <span className='borda'></span>

                <div className='divTxt'>
                    <h3 className='text-center'>Educação</h3>
                    <ul className='SobreMimexperienciaLista'>
                        <li>
                            <strong>Formado:</strong> 2021 - 2023
                        </li>
                        <li>
                            <strong>Análise e Desenvolvimento de Sistemas</strong> 
                        </li>
                        <li>Sou formado pela faculdade Anhanguera, onde aprendi conceitos de análise e desenvolvimento de sistemas.</li>
                    </ul>
                </div>
            </div>


            <div>
                <img src="https://eopablo.github.io/pablocavalcante/images/codando.svg" alt="imagem" className='imagemSobreMim'/>
            </div>
        </section>
        
    )
}