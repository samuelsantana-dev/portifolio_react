import { NavBar } from './componentes/NavBar/NavBar'
import { Header } from './componentes/Header/Header'
import { SectionProjetos } from './componentes/SectionProjetos/SectionProjetos.jsx'
import {SobreMim} from './componentes/SobreMim/SobreMim'
import { Oportunidades } from './componentes/Oportunidades/Oportunidades'
import { Habilidade } from './componentes/Habilidades/Habilidades'
import { Footer } from './componentes/Footer/Footer'

import './App.css'

function App() {

  return (
    <>
      <NavBar  />
      <Header />
      <SectionProjetos />
      <hr></hr>
      <SobreMim />
      <hr></hr>
      <Oportunidades />
      <hr></hr>
      <Habilidade />
      <Footer />
    </>
  )
}

export default App
