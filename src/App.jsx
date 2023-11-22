
import { NavBar } from './componentes/NavBar/NavBar'
import { Header } from './componentes/Header/Header'
import { SectionProjetos } from './section/SectionProjetos/SectionProjetos.jsx'
import {SobreMim} from './section/SobreMim/SobreMim'
import { Experiencia } from './section/Experiencia/Experiencia.jsx'
import { Habilidade } from './section/Habilidades/Habilidades'
import { Footer } from './componentes/Footer/Footer'
import './App.scss'
import { motion } from "framer-motion";
// No início do seu arquivo onde você importa outros módulos

function App() {

  return (
    <>
      <NavBar />
      <Header /> 
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SobreMim id="sobreMim" />
      </motion.div>

      <Experiencia id="oportunidades" />
      <Habilidade id="habilidade" />
      <SectionProjetos id="projetos" />
      <Footer />

    </>
  )
} 

export default App
