import Style from './Javascript.module.css'
import { CarrosselSemBotao } from '../../../componentes/Carrossel/CarrosselSemBotao'

export function CarrpsselJavascript(){
    return(
        <div className={Style.Javascript}>   

            <CarrosselSemBotao 
                NomeLinguagem="Javascript, Html e Css"

                titulo1="Calculo Imc"
                explicativo1="Um pequeno site para mostrar meus conhecimentos em Javascript"
                href1="https://github.com/Samuel-Santana109/projeto-imc/tree/master/"
                src1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjl7fnu066MpxTUHqJiPITBNzaTBuzPJpSOg&usqp=CAU"

                titulo2="ToDoList"
                explicativo2="Um toDoList para mostrar conmhecimentos em javascript"
                href2="https://github.com/Samuel-Santana109/projeto-toDo-List/tree/master"
                src2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVe4gMCR1w8HvOLU2ibivRuUnJ_qtQCem3g&usqp=CAU"

                titulo3="Prime Video"
                explicativo3="Foi um site criado para testar meus conhecimentos ele é uma replica da pagina inicial do site do prime video"
                href3="https://github.com/Samuel-Santana109/primeVideo/tree/master"
                src3="https://i0.wp.com/tracklist.com.br/wp-content/uploads/2022/05/prime-video-precos.png?fit=758%2C426&ssl=1"

                titulo4="Projeto Cordel"
                explicativo4="Projeto foi criado quando estava iniciando meus estudos em html 5 e css 3 foi um site feito em parallax"
                href4="https://github.com/Samuel-Santana109/projeto-cordell"
                src4="https://static.significados.com.br/foto/cordel-0-cke.jpg"

                titulo5="Arena Conference"
                explicativo5="Projeto foi criado quando estava iniciando meus estudos em html 5 e css 3 foi um site feito em parallax"
                href5="https://github.com/Samuel-Santana109/arena_conference/tree/master"
                src5="https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_640.jpg"

                
                titulo6="Estudos"
                explicativo6="Aqui estao todos os meus estudos com essas 3 tecnologias"
                href6="https://github.com/Samuel-Santana109/estudos"
                src6="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400"
            />
            
        </div>
    )
}