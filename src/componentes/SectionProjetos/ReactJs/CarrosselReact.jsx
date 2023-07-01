import Style from './CarrosselReact.module.css'
import { CarrosselSemBotao } from '../../Carrossel/CarrosselSemBotao'
/*
export function CarrosselReact(){



    return (
        <div className={Style.div}>
          <CarrosselSemBotao NomeLinguagem="Javascript, Html e Css" items={items}
           titulo="BLOG"
           explicativo="Este é um blog feito em react js"
           href="https://github.com/Samuel-Santana109/blog_react_ts"
           src="https://cdn.pixabay.com/photo/2016/08/17/04/41/template-1599665_640.png"
            />
          
        </div>
      );
      
}*/


export function CarrosselReact(){
    return(
        <div className={Style.CarrosselReact}>   

            <CarrosselSemBotao 
                NomeLinguagem="React js"

                titulo1="BLOG"
                explicativo1="Este é um blog feito em react js"
                href1="https://github.com/Samuel-Santana109/blog_react_ts"
                src1="https://cdn.pixabay.com/photo/2016/08/17/04/41/template-1599665_640.png"

                titulo2="Marcado de Tarefas"
                explicativo2="Site feito em react js"
                href2="https://github.com/Samuel-Santana109/estudos/tree/master/react/rocket_seat/ignite-time"
                src2="https://media.istockphoto.com/id/175418827/pt/foto/lista-de-verifica%C3%A7%C3%A3o.jpg?s=612x612&w=0&k=20&c=FcwS4jTFaQKhU8vkdZBNpgKyUFeZlUDA1DRf77vR2vQ="

                titulo3="Site Vendas"
                explicativo3="Site de vendas criado para uso proprio profissional"
                href3="https://github.com/Samuel-Santana109/site_vendas"
                src3="https://media.istockphoto.com/id/1342186558/pt/foto/male-businessman-typing-computer-to-sell-real-estate-and-items-brokers-and-contractors.webp?s=1024x1024&w=is&k=20&c=oZLPPmp1_Eq8SF7gXSfBwBEd2US1rXltLMF-T1pMdH4="

                titulo4="Leanding Page"
                explicativo4="Fiz participaçao nesse projeto"
                href4="https://github.com/Samuel-Santana109/leading_page"
                src4="https://cdn.pixabay.com/photo/2016/11/18/17/47/iphone-1836071_640.jpg"
            />
            
        </div>
    )
}