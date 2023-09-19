import './Habilidades.scss'

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiBootstrap,
    DiTypo3,
    DiSass,
    DiGit,
    DiNpm,
    DiCelluloid,
    DiCss3Full,
  } from "react-icons/di";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "Linguagem de Marcação para Estruturação de Conteúdo Web" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Linguagem de Estilização para Design de Páginas Web" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Linguagem de Programação para Desenvolvimento Web Interativo" },
    { id: "react", name: "React", icon: <DiReact />, text: "Biblioteca JavaScript para Construção de Interfaces de Usuário" },
    { id: "bootstrap", name: "Bootstrap 5", icon: <DiBootstrap />, text: "Framework CSS para Desenvolvimento Web Responsivo" },
    { id: "typescript", name: "TypeScript", icon: <DiTypo3 />, text: "Superset do JavaScript com Tipagem Estática" },
    { id: "sassless", name: "Sass e Less", icon: <DiSass />, text: "Pré-processadores CSS para Estilização Avançada" },
    { id: "git", name: "Git e GitHub",icon: <DiGit />, text: "Sistema de Controle de Versão e Plataforma de Colaboração de Código" },
    { id: "npxnpm", name: "Npx e Npm", icon: <DiNpm />, text: "Gerenciadores de Pacotes para Projetos JavaScript" },
    { id: "dialogflow", name: "Dialogflow", icon: <DiCelluloid />, text: "Plataforma de Desenvolvimento de Chatbots e Assistentes Virtuais" },
    { id: "tailwindui", name: "Tailwind CSS", icon: <DiCss3Full />, text: "Framework CSS Utilizado para o Desenvolvimento Web" }
];

  

export const Habilidade = () => {
    return(
        <section className="sectionHabilidade">
        
          <div id="Tecnologias">
            <h1>Tecnologias Ultilizadas</h1>
          </div>

          <div className="divPai">
            {technologies.map((tech) => (
              <div className="tecnologia_individual" id={tech.id} key={tech.id}>
                  <span className='icone'>{tech.icon}</span>
                  <h3>{tech.name}</h3>
                  <p>{tech.text}</p>
              </div>
            ))}
      
          </div>
      </section>
    )

  }
