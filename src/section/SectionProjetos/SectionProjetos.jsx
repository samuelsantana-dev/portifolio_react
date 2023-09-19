import { CarrosselReact } from "./ReactJs/CarrosselReact"
import { CarrpsselJavascript } from "./Javascript/Javascript"
import { CarrosselKolinChatBoots } from "./KolinChatBoots/KolinChatBoots"
import './SectionProjetos.scss'


export function SectionProjetos(){
    return(
        <div  id="Projetos" className='sectionProjetos'>
            <h1 className='titulo'>  Principais Projetos</h1>   
            <CarrosselReact />
           <CarrpsselJavascript />
           <CarrosselKolinChatBoots />
        </div>
    )
}