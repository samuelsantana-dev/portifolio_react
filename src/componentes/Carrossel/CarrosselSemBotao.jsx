/* eslint-disable react/prop-types */
import './CarrosselSemBotao.scss';
import Carousel from 'react-bootstrap/Carousel';

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
        <>
                <h2>{props.NomeLinguagem}</h2>

                <Carousel className=' w-70'>
                    {items.map((item, index) => (
                        // Verifica se o item possui todas as propriedades necessárias
                        item.titulo && item.src && item.explicativo && item.href ? (
                            <Carousel.Item key={index} className=""> 
                                <a href={item.link}>
                                    <img
                                        className="d-block w-20"
                                        src={item.src}
                                        alt={item.alt}
                                    > 
                                    
                                    </img>
                                </a>
                                <Carousel.Caption>
                                    <h3>{item.titulo}</h3>
                                    <p>{item.explicativo}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ) : null
                    ))}
                </Carousel> 
        </>
    )
}
 
 