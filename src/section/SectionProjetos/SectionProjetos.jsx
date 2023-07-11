import { CarrosselReact } from "./ReactJs/CarrosselReact"
import { CarrpsselJavascript } from "./Javascript/Javascript"
import { CarrosselKolinChatBoots } from "./KolinChatBoots/KolinChatBoots"
import Style from './SectionProjetos.module.css'


export function SectionProjetos(){
    return(
        <div className={Style.Section}>
            <h1 className={Style.titulo}>  Principais Projetos</h1>   
            <CarrosselReact />
           <CarrpsselJavascript />
           <CarrosselKolinChatBoots />
        </div>
    )
}