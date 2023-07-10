import Style from './Habilidades.module.css'

export function Habilidade(){
    return(
        <>
         <div className={Style.div}>
            <h2>Habilidades</h2>
            <ul  className={Style.ul}>
                <li>Javascript</li>
                <li>React Js</li>
                <li>Git e github</li>
                <li>Bootstrap 5</li>
                <li>Html 5</li>
                <li>Css 3</li>
                <li>Npx e Npm</li>
                <li>Dialogflow</li>
                <li>Typscript</li>
                <li>Sass e Less</li>
                <li>tailwindui</li>

            </ul>
         </div>
        
        </>
    )
}