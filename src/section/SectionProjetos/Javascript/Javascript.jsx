
import { CarrosselSemBotao } from '../../../componentes/Carrossel/CarrosselSemBotao'
import img4 from '../../../assets/carrosselJs/cafe.jpg'

export function CarrosselJavascript(){
    return(
        <>   
            <CarrosselSemBotao 
                NomeLinguagem="JavaScript, HTML e CSS"

                titulo1="Blog_design"
                explicativo1="Design de blog em bootstrap"
                href1="https://samuel-santana109.github.io/Blog_design/"
                src1="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600"

                titulo2="checkout_design"
                explicativo2="Design de checkout em bootstrap"
                href2="https://samuel-santana109.github.io/checkout_design/"
                src2="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"

                titulo3="Album_design"
                explicativo3="Design de Albúm em bootstrap"
                href3=" https://samuel-santana109.github.io/album_design/"
                src3="https://images.pexels.com/photos/895228/pexels-photo-895228.jpeg?auto=compress&cs=tinysrgb&w=800"

                titulo4="Projeto Cordel"
                explicativo4="Site com efeito parallax."
                href4="https://github.com/Samuel-Santana109/projeto-cordell"
                src4={img4}

                titulo5="Rede Social"
                explicativo5="Site das minhas redes sociais"
                href5="https://samuel-santana109.github.io/Rede-Social/"
                src5="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
        </>
    )
}
