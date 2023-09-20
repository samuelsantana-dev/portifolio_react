/* eslint-disable react/prop-types */

import './CarrosselSemBotao.scss';

export function CarrosselSemBotao(props){

const items = [
  { titulo: props.titulo1, src: props.src1, explicativo: props.explicativo1, href: props.href1 },
  { titulo: props.titulo2, src: props.src2, explicativo: props.explicativo2, href: props.href2 },
  { titulo: props.titulo3, src: props.src3, explicativo: props.explicativo3, href: props.href3 },
  { titulo: props.titulo4, src: props.src4, explicativo: props.explicativo4, href: props.href4 },
  { titulo: props.titulo5, src: props.src5, explicativo: props.explicativo5, href: props.href5 },
  { titulo: props.titulo6, src: props.src6, explicativo: props.explicativo6, href: props.href6 }
];




//Usou um if e else no codigo ? se e o se nao :
return (
    <section className='carousel_container'>
        {/* Renderiza o título da linguagem com base na propriedade NomeLinguagem */}
        <h1 className="NomeLinguagem">{props.NomeLinguagem}</h1>
            <div className='carousel'>
                {/* Mapeia cada item no array 'items' */}
                {items.map((item, index) => (
                    // Verifica se o item possui todas as propriedades necessárias
                    item.titulo && item.src && item.explicativo && item.href ? (
                        // Renderiza um item do carrossel se todas as propriedades estiverem presentes
                        <div key={index} className="carousel_item">
                            <img src={item.src}  />
                            <div className="carousel_textos">
                                <h4>{item.titulo}</h4>
                                <p>{item.explicativo}</p>
                                <a href={item.href}> PA
                                </a>
                            </div>
                        </div>
                    ) : null
                    //se nao tiver o conteudo vai retornar null -- : null
                ))}
            </div>

    </section>
)

}
 
 