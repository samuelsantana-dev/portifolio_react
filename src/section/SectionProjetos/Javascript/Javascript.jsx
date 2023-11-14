
import { CarrosselSemBotao } from '../../../componentes/Carrossel/CarrosselSemBotao'
import img from '../../../assets/carrosselJs/academia.jpg'
import img2 from '../../../assets/carrosselJs/todoList.jpg'
import img3 from '../../../assets/carrosselJs/cocaCola.jpg'
import img4 from '../../../assets/carrosselJs/cafe.jpg'
import img5 from '../../../assets/carrosselJs/redeSocial.jpg'


export function CarrosselJavascript(){
    return(
        <>   

            <CarrosselSemBotao 
                NomeLinguagem="Javascript, Html e Css"

                titulo1="Calculo Imc"
                explicativo1="Site calculo imc"
                href1="https://github.com/Samuel-Santana109/projeto-imc/tree/master/"
                src1={img}

                titulo2="ToDoList"
                explicativo2="Um toDoList feito em javascript"
                href2="https://github.com/Samuel-Santana109/toDoList/"
                src2={img2}

                titulo3="Leading page coca cola"
                explicativo3="Site coca cola apenas para pc"
                href3="https://github.com/Samuel-Santana109/primeVideo/tree/master"
                src3={img3}

                titulo4="Projeto Cordel"
                explicativo4="Site parallax"
                href4="https://github.com/Samuel-Santana109/projeto-cordell"
                src4={img4}

                titulo5="Rede Social"
                explicativo5="Site de Eventos"
                href5="https://samuel-santana109.github.io/Rede-Social/"
                src5={img5}

                
          
            />
            
        </>
    )
}