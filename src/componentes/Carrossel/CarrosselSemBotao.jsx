/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './CarrosselSemBotao.scss';

export function CarrosselSemBotao(props){
    const carousel = useRef(null);
  
    const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
  
    const handleRightClick = (e) => {
      e.preventDefault();
  
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    const items = [
        { titulo: props.titulo1, src: props.src1, explicativo: props.explicativo1, href: props.href1 },
        { titulo: props.titulo2, src: props.src2, explicativo: props.explicativo2, href: props.href2 },
        { titulo: props.titulo3, src: props.src3, explicativo: props.explicativo3, href: props.href3 },
        { titulo: props.titulo4, src: props.src4, explicativo: props.explicativo4, href: props.href4 },
        { titulo: props.titulo5, src: props.src5, explicativo: props.explicativo5, href: props.href5 },
        { titulo: props.titulo6, src: props.src6, explicativo: props.explicativo6, href: props.href6 },
        { titulo: props.titulo7, src: props.src7, explicativo: props.explicativo7, href: props.href7 }
      ];
  
      return (
        <div className="container">
          <h2>{props.NomeLinguagem}</h2>
          <div className="carousel" ref={carousel}>

          {items.map((item, index) => {
            
      return item.titulo && item.explicativo && item.href && item.src ? (
            <div className="item" key={index}>
                <div className="image">
                    <img src={item.src} alt="Imagem" className='img'/>
                </div>
                <div className="info">
                    <span className="titulo">{item.titulo}</span>
                    <span className="explicativo">{item.explicativo}</span>
                    <a  className="link" href={item.href} target='blank'> Clique aqui </a>
                </div>
            </div>
        ) : null
  })}
        </div>
          <div className="buttons">
            <button className='button' onClick={handleLeftClick}>
            <FaArrowLeft />
            <br />
            </button>
            <button  className='button' onClick={handleRightClick}>

              <FaArrowRight/>
            </button>
          </div>
      </div>
    )
}