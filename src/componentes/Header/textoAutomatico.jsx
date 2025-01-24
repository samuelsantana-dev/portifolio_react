import  { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export function TextAutomatico() {
    let el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Front-end', 'React.js', 'Vue.js', 'Node.js', 'Full Stack'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 50,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []); 
    return <span className="text-js" ref={el}></span>
}

/**
 * O erro que você está enfrentando, Warning: validateDOMNesting(...): <h3> cannot appear as a child of <h3>., ocorre porque você está tentando renderizar um elemento <h3> dentro de outro elemento <h3>, o que não é permitido no HTML
 */
