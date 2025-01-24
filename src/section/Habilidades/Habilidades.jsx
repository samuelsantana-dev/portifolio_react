import './Habilidades.scss'
import {
    DiHtml5,
    DiJsBadge,
    DiReact,
    DiBootstrap,
    DiTypo3,
    DiGit,
    DiNpm,
    DiCelluloid,
    DiMysql
  } from "react-icons/di";
  
  const technologies = [
    { id: "html", name: "HTML5 e CSS3", icon: <DiHtml5 />, text: "Linguagem de Marcação e Estilização para Desenvolvimento de Páginas Web" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Linguagem de Programação para Desenvolvimento Web Interativo" },
    { id: "react", name: "React.js", icon: <DiReact />, text: "Biblioteca JavaScript para Construção de Interfaces de Usuário" },
    { id: "bootstrap", name: "Bibliotecas CSS", icon: <DiBootstrap />, text: "Sass e Less, Tailwind, Bootstrap" },
    { id: "typescript", name: "TypeScript", icon: <DiTypo3 />, text: "Superset do JavaScript com Tipagem Estática" },
    { id: "Vue.js", name: "Vue.js", icon: <DiCelluloid />, text: "Framework JavaScript para Desenvolvimento de Interfaces de Usuário" },
    { id: "git", name: "Git e GitHub",icon: <DiGit />, text: "Sistema de Controle de Versão e Plataforma de Colaboração para Código" },
    { id: "npxnpm", name: "Npx e Npm", icon: <DiNpm />, text: "Gerenciadores de Pacotes para Projetos JavaScript" },
    { id: "reactNative", name: "React Native", icon: <DiReact />, text: "Framework para Desenvolvimento de Aplicativos Móveis Multiplataforma" },
     { id: "banco de dados", name: "Banco de dados", icon: <DiMysql />, text: "Bancos relacionais (MySQL, PostgreSQL) e não relacionais (MongoDB)."},
     { id: "nodejs", name: "Node.js", icon: <DiCelluloid />,   text: "Framework JavaScript assíncrona e orientada a eventos"      },
];

  

export const Habilidade = () => {
    return(
        <section className="sectionHabilidade">
        
          <div id="Tecnologias">
            <h1>Tecnologias Utilizadas</h1>
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
