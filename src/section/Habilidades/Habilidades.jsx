import '../../styles/Habilidades.sass'

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiBootstrap,
    DiTypo3,
    DiSass,
    DiGit,
    DiNpm,
    DiCelluloid,
    DiCssdeck,
    DiCss3Full,
  } from "react-icons/di";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "HTML 5" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, text: "CSS 3 " },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "JavaScript" },
    { id: "react", name: "React", icon: <DiReact />, text: "React" },
    { id: "bootstrap", name: "Bootstrap 5", icon: <DiBootstrap />, text: "Bootstrap"},
    { id: "typescript", name: "Typscript", icon: <DiTypo3 />, text: "Typscript"}, 
    { id: "sassless", name: "Sass e Less", icon: <DiSass />, text: "Sass e Less" },
    { id: "git", name: "Git e github",icon: <DiGit />, text: "Git e github" },
    { id: "npxnpm", name: "Npx e Npm", icon: <DiNpm />, text: "Npx e Npm" },
    { id: "dialogflow", name: "Dialogflow", icon: <DiCelluloid />, text: "Dialogflow" },
    { id: "tailwindui", name: "tailwindui", icon: <DiCss3Full />, text: "tailwindui" }
  ];
  

export const Habilidade = () => {
    return(
        <section class="technologies-container">
        
        <div>
          <h2>Tecnologias</h2>
        </div>
        <div class="technologies-grid">
    
          {technologies.map((tech) => (
            <div class="technology-card" id={tech.id} key={tech.id}>
              {tech.icon} 
              <div class="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.text}</p>
              </div>
            </div>
          ))}
    
        </div>
      </section>
    )

  }
