import  './Oportunidades.scss'

import { motion } from 'framer-motion'

export function Oportunidades(){
    return(
        <section className="sectionHabilidade">

            <div id="Oportunidades" className="divOportunidades" >
               
                
                <motion.div
                    className="box"
                    animate={{
                        scale: [1, 0.8, 1], // Animação da escala (tamanho) ao longo do tempo
                        rotate: [0, 0, 0, 0, 0], // Animação da rotação ao longo do tempo
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"] // Animação do raio da borda ao longo do tempo
                    }}

                    transition={{
                        duration: 2, // Duração total da animação: 2 segundos
                        ease: "easeInOut", // Curva de easing para a animação (suavização)
                        times: [0, 0.2, 0.5, 0.8, 1], // Pontos de tempo para cada etapa da animação
                        repeat: Infinity, // Repetir a animação infinitamente
                        repeatDelay: 1 // Atraso entre repetições: 1 segundo
                    }}
                >
                     <div>
                        <h2>DISPONIVEL PARA OPORTUNIDADES</h2>
                        <h5>Gmail - samuelsantanadasilva8@gmail.com</h5>
                        <h5>Telefone - whatsapp (61) 9 9107-6831</h5>
                        <a
                            className="text-light"
                            href="https://www.linkedin.com/in/samuelss10/"
                            target="_blank"
                            rel="noreferrer"
                        >    
                        </a>
                    </div>
                        
                    
                    </motion.div>

                    <div>
                            <img src="https://eopablo.github.io/pablocavalcante/images/programming.svg" alt="Imagem de alguem estudando" className='imagem'/>
                    </div>
            </div>
      </section>
      
    
    )
}
