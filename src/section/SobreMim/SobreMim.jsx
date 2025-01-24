import  './SobreMim.scss'

export function SobreMim(){
    return(
        <section id='SobreMim' className="sectionSobreMim">

            <h1 className='text-center textoh1'>Sobre Mim</h1>

            <div className='divTexto d-flex'>

                <div className='divTxt'>
                    <h3 className='text-center'>Desenvolvedor Frontend</h3>
                    <p className='text-center'>
                    Olá! Sou Samuel Santana, um Desenvolvedor Full-Stack javascript React e nodejs, formado em Análise e Desenvolvimento de Sistemas, tenho experiência como desenvolvedor, atuando no desenvolvimento de sistemas, capacidade de negociar demandas e soluções diretamente com minha liderança e cliente. 
                    </p>
                    <p>Capacidade de resolver problemas de forma eficaz e eficiente, experiência com desenvolvimento de software front-end, possuo experiência com Desenvolvimento Front End React; Next.js, Vue.js experiência com Typescript, Experiência com ferramentas de design como Design Systens em geral, Conhecimento de UI e boas noções de UX, metodologias ágeis (Scrum e Agile), Conhecer padrões e estrutura de projetos Web. </p>
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