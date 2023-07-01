import Style from './CarrosselSemBotao.module.css';

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
              <div key={index} className={Style.carousel_item}>
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
export function CarrosselSemBotao(props){


    return(
        <div>
                <div className={Style.carousel_container}>
                  <h1>{props.NomeLinguagem}</h1>

                    <div className={Style.carousel}>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo1}</h4>
                            <p>{props.explicativo1}</p>
                            <a href={props.href1} target='_blank'>
                            <img src={props.src1} alt={props.alt1} className={Style.img} />
                            </a>
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo2}</h4>
                            <p>{props.explicativo2}</p> 
                             <a href={props.href2} target='_blank'>
                                <img src={props.src2} alt={props.alt2} className={Style.img}/>
                            </a>
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo3}</h4>
                            <p>{props.explicativo3}</p> 
                             <a href={props.href3} target='_blank'>
                                <img src={props.src3} alt={props.alt3} className={Style.img}/>
                            </a>
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo4}</h4>
                            <p>{props.explicativo4}</p> 
                             <a href={props.href4} target='_blank'>
                                <img src={props.src4} alt={props.alt4} className={Style.img}/>
                            </a>
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo5}</h4>
                            <p>{props.explicativo5}</p> 
                             <a href={props.href5} target='_blank'>
                                <img src={props.src5} alt={props.alt5} className={Style.img}/>
                            </a>
                        </div>

                        <div className={Style.carousel_item}>
                            <h4>{props.titulo6}</h4>
                            <p>{props.explicativo6}</p> 
                             <a href={props.href6} target='_blank'>
                                <img src={props.src6} alt={props.alt6} className={Style.img}/>
                            </a>
                        </div>

                    </div>    
                </div>
        </div>
    )
}

