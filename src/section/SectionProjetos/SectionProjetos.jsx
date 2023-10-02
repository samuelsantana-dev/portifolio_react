import { CarrosselReact } from "./ReactJs/CarrosselReact"
import { CarrosselJavascript } from "./Javascript/Javascript"
import { CarrosselKolinChatBoots } from "./KolinChatBoots/KolinChatBoots"
import './SectionProjetos.scss'


export function SectionProjetos(){
    return(
        <div  id="Projetos" className='sectionProjetos '>
            <h1 className='titulo'>Principais Projetos</h1>
            
            <div >
                <CarrosselReact />
                <CarrosselJavascript />
                <CarrosselKolinChatBoots />
            </div>
        </div>
    )
}