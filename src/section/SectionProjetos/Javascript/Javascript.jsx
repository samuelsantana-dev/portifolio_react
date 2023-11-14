
import { CarrosselSemBotao } from '../../../componentes/Carrossel/CarrosselSemBotao'
import img from 'https://cdn.pixabay.com/photo/2016/09/13/11/08/browser-1666995_640.png'

export function CarrosselJavascript(){
    return(
        <>   

            <CarrosselSemBotao 
                NomeLinguagem="Javascript, Html e Css"

                titulo1="Calculo Imc"
                explicativo1="Site calculo imc"
                href1="https://github.com/Samuel-Santana109/projeto-imc/tree/master/"
                src1="https://cdn.pixabay.com/photo/2015/05/25/05/27/network-782707_1280.png"

                titulo2="ToDoList"
                explicativo2="Um toDoList feito em javascript"
                href2="https://github.com/Samuel-Santana109/toDoList/"
                src2="https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_640.png"

                titulo3="Leading page coca cola"
                explicativo3="Site coca cola apenas para pc"
                href3="https://github.com/Samuel-Santana109/primeVideo/tree/master"
                src3={img}

                titulo4="Projeto Cordel"
                explicativo4="Site parallax"
                href4="https://github.com/Samuel-Santana109/projeto-cordell"
                src4="https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png"

                titulo5="Rede Social"
                explicativo5="Site de Eventos"
                href5="https://samuel-santana109.github.io/Rede-Social/"
                src5="https://cdn.pixabay.com/photo/2012/04/13/20/24/laptop-33521_640.png"

                
          
            />
            
        </>
    )
}