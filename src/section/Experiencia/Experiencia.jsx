import  './Experiencia.scss';
import { FormaçaoEexperiencia } from './formaçaoEexperiencia/formaçaoEexperiencia'

export function Experiencia(){
    return(
        <section id="Oportunidades" className="sectionExperiencia">
            <div>
            <div>
                <h3 className='text-center'>Experiência</h3>
                <p className='text-center'>
                Desenvolvo sites utilizando ReactJS, Tailwind, Bootstrap, TypeScript, JavaScript e CSS, com versionamento no Git. Adapto soluções para cada projeto, trabalhando de forma orientada ou de maneira independente, Conhecimento em utilizar APIs em formato REST e GraphQL, Experiência com algumas das tecnologias de controle de estado Redux, Zustand, Jotai ou Context api, Experiência com algumas das tecnologias de controle de estado Redux, Zustand, Jotai ou Context api, HTML, CSS,Javascript/Typescript GIT e práticas de CI/CD, Metodologia ágeis, Conhecimento em Integração com API`s, Capacidade de resolver problemas de forma eficaz e eficiente.
                </p>
            </div>
            
                <hr />

                <div>
                       <FormaçaoEexperiencia />
                </div>

            </div>

            <div>
                    <img src="https://eopablo.github.io/pablocavalcante/images/programming.svg" alt="Imagem de alguem estudando" className='imagem' />
            </div>
            
      </section>
    )
}
