import './CarrosselSemBotao.css';

export function CarrosselSemBotao(props){

  
const items = [
  { titulo: props.titulo1, src: props.src1, explicativo: props.explicativo1, href: props.href1 },
  { titulo: props.titulo2, src: props.src2, explicativo: props.explicativo2, href: props.href2 },
  { titulo: props.titulo3, src: props.src3, explicativo: props.explicativo3, href: props.href3 },
  { titulo: props.titulo4, src: props.src4, explicativo: props.explicativo4, href: props.href4 },
  { titulo: props.titulo5, src: props.src5, explicativo: props.explicativo5, href: props.href5 },
  { titulo: props.titulo6, src: props.src6, explicativo: props.explicativo6, href: props.href6 }
];

    return(
      <>       
          <h1 class="NomeLinguagem">{props.NomeLinguagem}</h1>
          <div class="carousel_container">
              <div class='carousel'>

                  {items.map((item, index) => (
                      <div key={index} class="carousel_item">
                          <h4>{item.titulo}</h4>
                          <p>{item.explicativo}</p>
                          <a href={item.href}>
                              <img src={item.src} alt={item.alt} class="img" />
                          </a>
                      </div>
                  ))}

              </div>

          </div>
      </> 
    )
}


/*
export function CarrosselSemBotao(props) {

  const items =  [{
    titulo:"string",
    explicativo:"string",
    href:"string",
    src:"string"
  }]

    return (
      <div>
        <div className={Style.carousel_container}>
          <h1>{props.NomeLinguagem}</h1>
  
          <div className={Style.carousel}>

            {items.map((item, index) => (
              <div key={index} className={Style.carousel_item} key={items.item}>
                <h4>{props.titulo}</h4>
                <p>{props.explicativo}</p>
                <a href={props.href}>
                  <img src={props.src} alt={props.titulo} className={Style.img} />
                </a>

              </div>
            ))}

          </div>
        </div>
      </div>
    );
  }


*/