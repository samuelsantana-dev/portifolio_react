import  { useEffect, useRef } from 'react';
//Essencialmente, useRef é como uma “caixa” que pode conter um valor mutável em sua propriedade . current . Você pode estar familiarizado com os refs principalmente como uma forma de acessar o DOM. Se você passar um objeto ref para React com <div ref = {myRef} /> , React definirá sua propriedade .
import Typed from 'typed.js';

export function TextAutomatico() {
    // Cria uma referência para o elemento HTML onde o texto será digitado
    let el = useRef(null);

    useEffect(() => {
        // Cria uma nova instância da biblioteca Typed.js no elemento referenciado por 'el'
        const typed = new Typed(el.current, {
            // Define um array de strings que serão digitadas no elemento
            strings: ['front-end Junior', 'Web Development', 'ChatBoots'],

            // Define a velocidade de digitação em milissegundos por caractere
            typeSpeed: 100,
            
            // Define a velocidade de retrocesso (apagar) em milissegundos por caractere
            backSpeed: 50,
            
            // Define o atraso após completar a digitação antes de iniciar o retrocesso
            backDelay: 50,
            
            // Define se o processo de digitação e retrocesso deve ser repetido em um loop infinito
            loop: true
        });

        // Função de retorno executada quando o componente é desmontado
        // Garante que a instância Typed.js seja destruída para evitar vazamentos de memória
        return () => {
            typed.destroy(); // Destroi a instância Typed.js
        };
    }, []); // O array vazio indica que este efeito deve ser executado apenas uma vez (ao montar o componente)

    // Renderiza um elemento <h3> com a classe 'text-js' e utiliza a referência 'el' para associá-lo ao Typed.js
    return <span className="text-js" ref={el}></span>
}

/**
 * O erro que você está enfrentando, Warning: validateDOMNesting(...): <h3> cannot appear as a child of <h3>., ocorre porque você está tentando renderizar um elemento <h3> dentro de outro elemento <h3>, o que não é permitido no HTML
 */
