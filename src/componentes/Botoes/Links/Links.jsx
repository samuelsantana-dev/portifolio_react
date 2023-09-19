import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export function Links(){
    return(

<>
                <div>    
                    <a href="https://www.linkedin.com/in/samuelss10/" target="_blank" className='links' rel="noreferrer">
                                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/samuelss77/" target="_blank" className='links' rel="noreferrer">
                                    <FaInstagram />
                    </a>
                    <a href="https://github.com/Samuel-Santana109" target="_blank" className='links' rel="noreferrer">
                                    <FaGithub />
                    </a>
                    <a href="#" target="_blank" className='links' rel="noreferrer">
                                    <FaWhatsapp />
                    </a>
                </div>

                <span>
                    <a href="CurriculoS.pdf" className="button" rel="noreferrer" download>
                        Download Curriculo
                    </a>
                  
                </span>

</>
      
   
    )
}