import { NavBar } from './componentes/NavBar/NavBar'
import { Header } from './componentes/Header/Header'
import { SectionProjetos } from './section/SectionProjetos/SectionProjetos.jsx'
import {SobreMim} from './section/SobreMim/SobreMim'
import { Oportunidades } from './section/Oportunidades/Oportunidades'
import { Habilidade } from './section/Habilidades/Habilidades'
import { Footer } from './componentes/Footer/Footer'
import './App.scss'

function App() {

  return (
    <div className='divApp'>
      <NavBar  />
      <Header />
      <SobreMim /> 
      <Oportunidades />
      <Habilidade />
      <SectionProjetos />
      <Footer />
    </div>
  )
}

export default App
