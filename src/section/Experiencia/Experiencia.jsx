import  './Experiencia.scss';
import Accordion from 'react-bootstrap/Accordion';

export function Experiencia(){

    const experiencias = [
        {
            titulo: 'Desenvolvedor Full-Stack',
            empresa: 'Tech World',
            periodo: 'Janeiro 2022 - Janeiro 2023',
            descricao: `Desenvolvimento de sites utilizando ReactJS, Tailwind, Bootstrap, TypeScript, JavaScript e CSS, com versionamento no Git. 
            Experiência com Zustand, Zod, Chakra UI v2, React Router DOM, Recoil, Redux, Jotai, e Context API. Uso de Zod para validação de dados e React Hooks. 
            Conhecimento em Engenharia de Software, Clean Code e SQL (Select, Insert, Update, Delete, Relacionamentos). Desenvolvimento de aplicativos iOS com React Native.`
        },
        {
          titulo: 'Desenvolvedor Full-Stack',
          empresa: 'Lusa Tecnologias',
          periodo: 'Julho 2024 - Dezembro 2024',
          descricao: `Experiência com Desenvolvimento Front End usando React e Next.js. Domínio de TypeScript e Programação Orientada a Objetos (Classe, Encapsulamento). 
          Colaboração em equipe para identificar problemas e propor soluções tecnológicas eficientes. Uso de Chart.js, Firebase, metodologias ágeis (Scrum e Agile), 
          implementação de autenticação com Auth.js, KISS, Swagger, Ionic, Controle de Versionamento, Relay, e ExtJS.`
        },
        {
          titulo: 'Desenvolvedor Full-Stack',
          empresa: 'Freelancer',
          periodo: 'Janeiro 2023 - Janeiro 2024',
          descricao: `Experiência com tecnologias de controle de estado como Redux, Zustand, Jotai e Context API. Trabalho com Langchain, engenharia de prompts, RAG e práticas de CI/CD. 
          Uso de metodologias ágeis para garantir a qualidade e a performance das aplicações por meio de boas práticas de codificação e testes.`
        },
        {
          titulo: 'Desenvolvedor Full-Stack',
          empresa: 'Pipe Tech',
          periodo: 'Janeiro 2024 - Dezembro 2024',
          descricao: `Participação no desenvolvimento de projetos web em equipe utilizando TypeScript, ReactJS, Material UI e bibliotecas modernas de JavaScript. 
          Desenvolvimento de aplicações em Node.js com MySQL, PostgreSQL e MongoDB, utilizando Gitflow e TailwindCSS. 
          Experiência com ShadCN UI, Controle de versão com Git, Clean Architecture e ORM/Micro ORM. Conhecimento em ExtJS.`
        }
      ];
      


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
                    {experiencias.map((experiencias, index) => (
                        <Accordion key={index} defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{experiencias.empresa}</Accordion.Header>
                                <Accordion.Body>
                                <strong>{experiencias.titulo}</strong> <br />
                                <strong>Periodo:</strong> {experiencias.periodo} <br />
                                {experiencias.descricao}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    ))}
                </div>

            </div>

            <div>
                    <img src="https://eopablo.github.io/pablocavalcante/images/programming.svg" alt="Imagem de alguem estudando" className='imagem' />
            </div>
            
      </section>
    )
}
