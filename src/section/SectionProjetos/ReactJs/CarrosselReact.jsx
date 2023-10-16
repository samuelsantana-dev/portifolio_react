import { CarrosselSemBotao } from '../../../componentes/Carrossel/CarrosselSemBotao'
//import ImagemCountdown from '../../../assets/countdownEDITADA.png'
import ImagemReact from '../../../assets/react.svg'
//import LeadingPage from '../../../assets/teste.png'




export function CarrosselReact(){
    return(

            <CarrosselSemBotao 
                NomeLinguagem="React js"

                titulo1="BLOG"
                explicativo1="Este é um blog feito em react js"
                href1="https://github.com/Samuel-Santana109/blog_react_ts"
                src1="https://cdn.pixabay.com/photo/2018/08/23/10/52/code-3625646_1280.jpg"

                titulo2="Marcado de Tarefas"
                explicativo2="Site feito em react js"
                href2="https://github.com/Samuel-Santana109/estudos/tree/master/react/rocket_seat/ignite-time"
                src2="https://media.istockphoto.com/id/1347677777/pt/foto/closeup-of-computer-programming-typing-on-laptop.webp?b=1&s=612x612&w=0&k=20&c=kOpomddBvDVN-8etpnqpN4DCaKUnKj811QY2pAkzITg="

                titulo3="Site Vendas"
                explicativo3="Site de vendas criado para uso proprio profissional"
                href3="https://github.com/Samuel-Santana109/site_vendas"
                src3="https://cdn.pixabay.com/photo/2016/08/17/04/41/template-1599665_640.png"

                titulo4="Leanding Page"
                explicativo4="Fiz participaçao nesse projeto"
                href4="https://github.com/Samuel-Santana109/leading_page"
                src4="https://cdn.pixabay.com/photo/2023/02/07/18/56/rocket-7774875_640.png"

                titulo5="Femusg"
                explicativo5="Site feito para a prefeitura"
                href5="https://github.com/Samuel-Santana109/Fesmusg"
                src5="https://cdn.pixabay.com/photo/2016/08/20/06/44/e-commerce-1606962_1280.png"

                titulo6="Countdown"
                explicativo6="Site em countdown"
                href6="https://github.com/Samuel-Santana109/countdown/tree/master"
                src6={ImagemReact}

                titulo7="Estudos"
                explicativo7="Meus estudos em React Js"
                href7="https://github.com/Samuel-Santana109/estudos/tree/master/react"
                src7={ImagemReact}
                />
            
            
    )
}