/**
 * Autor: Daniel Gustavo De La Cruz
 * Github: Dan-raccoon-69
 */

// EVENTOS DEL MOUSE

/**
 * click
 * dblclick
 * mouseenter
 * mouseleave
 * contextmenu
 * mousedown
 * mouseup
 * mousemove
 */

// click ************************

// seleccionando el titulo por ID
let titulo = document.getElementById("titulo");
// title.addEventListener('nombre_evento',función);
//función es una función externa, puedes usar funciones anonimas, declarativas, funciones flecha
function holaMundo() {
    alert('Hola Mundo 1');
}
// esta sintaxis es mucho más limpia, es más recomendada
titulo.addEventListener('click', holaMundo);

// o puedes llamar a la función de está forma
// titulo.addEventListener('click', () => {
//     alert(`Hola Mundo 2`);
// });

let button = document.querySelector('button').addEventListener('click',holaMundo);

// accediendo a sus valores, cuando hay un click, mostrara en un alert el contenido de el elemento seleccionado

// e es el OBJETO EVENTO ******************************

button = document.querySelector('button').addEventListener('click', (e) => {
    alert(e.target.textContent);
});

// dblclick ************************
// cuando hagas doble click se ejecutara la función.


// mouseenter ************************
// mouseenter == hover en CSS, cuando coloques el mouse sobre el elemento se ejecutara la función

titulo.addEventListener('mouseenter', () => {
    titulo.style.background = 'yellow';
});

// mouseleave ************************
// mouseleave == quitar hover en CSS, cuando el mouse ya no se encuentre sobre el elemento se ejecutara la función, la función se ejecutara siempre y cuando exista un evento de tipo 'mouseenter'

titulo.addEventListener('mouseleave', () => {
    titulo.style.background = 'white';
});

// contextmenu ************************
// contextmenu == click derecho, muestra el menu contextual

// creando nuestro propio menu contextual

const createMenu = (e) => {
    const menu = document.createElement('div');
    menu.id = 'menu-contextual'
    menu.textContent = 'Menu contextual';
    menu.style.padding = '1rem';
    menu.style.margin = '1rem';
    menu.style.background = '#f2f22f';
    menu.style.fontFamily = 'Arial';
    menu.style.borderRadius = '0.5rem';
    menu.style.position = 'fixed';
    menu.style.top = `${e.pageY}px`;
    menu.style.left = `${e.pageX}px`;

    // elimina el menu anterior (para que solo aparezca una vez)
    const previo = document.getElementById('menu-contextual');
    if(previo) document.body.removeChild(previo);
    const menuContextual = document.body.appendChild(menu);
    return menuContextual;
}

document.addEventListener('contextmenu', (e) => {
    // llamando a nuestro menu contextual
    createMenu(e);
    // haciendo que el menu contextual por defecto no se muestre
    e.preventDefault();
});

document.addEventListener('click', (e) => {
    // haciendo que el menu contextual no se muestre
    document.body.removeChild(createMenu(e));
});


// mousedown ************************
// mousedown: cuando dejas presiondo el click por mucho tiempo

// mouseup ************************
// mouseup: cuando dejas de presionar el click.

// ejemplo cuando un usuario arastra algo, mousedown cuando lo presiono y mouseup cuando lo solto

// mousemove ************************
// mousemove: cuando el mouse se mueve sobre un elemento.



// EVENTOS DE TECLADO

/**
 * Keydown
 * Keyup
 * Keypress
 */

// Keydown ************************
// cuando presionas una tecla



const input = document.getElementById('input_text');

input.addEventListener('keydown',(e) => {
    /* cuando nos encontramos en 'keydown' y sobre el objeto e (evento)
        nos brinda información, algunas de ellas es sobre que teclas tocamos,
        si tocamos ctrl, alt.  */
    console.log(e);
    // tecla que presionamos
    console.log(e.key);
    // retorna un true o false si apretamos ctrl
    console.log(e.ctrlKey);
    // retorna un true o false si apretamos alt
    console.log(e.altKey);
});

// cada vez que presionemos una tecla nos la mostrara en un alert

// addEventListener('keydown', (e) => {
//     alert(e.key);
// });


document.addEventListener('keydown', (e) => {
    if(e.key == "a" && e.ctrlKey == true){
        console.log(e.ctrlKey);
        console.log(e.Key);
        e.preventDefault();
        alert('Presionaste Ctrl + a');
    }
});


// bola

const bola = document.querySelector('.bola');
console.log(bola);
let x = 0, y = 0;

const mover = (e) => {
    switch(e.key){
        case 'ArrowUp':
        y = y - 10;
        break;
        case 'ArrowDown':
        y = y + 10;
        break;
        case 'ArrowLeft':
        x = x - 10;
        break;
        case 'ArrowRight':
        x = x + 10;
        break;
    }
    bola.style.transform = `translate(${x}px,${y}px)`;
}

addEventListener('keydown', (e) => mover(e));


// Keyup ************************
// cuando sueltas una tecla

addEventListener('keyup', (e) => {
    console.log(e.key);
});

// Keypress ************************
// cuando tienes presionada una tecla y no la sueltas



// EVENTOS DE FORMULARIO

/**
 * Submit
 * Change
 * Focus
 * Blur
 * Reset
 */

// Submit ************************
// se ejecuta cuando el formulario se envia

// Change ************************
// Se ejecuta cuando un campo del formulario cambia de valor

// Focus ************************
// Se ejecuta cuando haces click en un input

// Blur ************************
// Se ejecuta cuando ya NO te encuentras en un input (focus)

// Reset ************************
// Se ejecuta cuando quieres Resetear el formulario



// EVENTOS MULTIMEDIA

/**
 * Play
 * Pause
 */

const video = document.getElementById('video');
const bPlay = document.querySelector('.play');
const bPause = document.querySelector('.pause');

bPlay.addEventListener('click', () => {
    video.play();
});
bPause.addEventListener('click', () => {
    video.pause();
});


// EVENTOS DEL DOM

/**
 * DOMContentloaded
 */

// DOMContentloaded (el más rapido, cuando el navegador leyó el HTML y lo proceso)
// Se ejecuta cuando todo el DOM haya cargado,recursos externos, imagenes, etc quiza aun no se hayan cargado, lo que nos interesa es el contenido del DOM. 

// Su usó es de mucha ayuda, cuando tu estas llamando elementos en el DOM antes de que existan.


// EVENTOS DEL NAVEGADOR

/**
 * load
 * scroll
 * resize
 */

// load (cuando cargan todos los recursos)
// parecido a DOMContentloaded, ocurre cuando carga toda la pagina.


// Scroll
// nos da el valor del scroll
// addEventListener('scroll', () => console.log(scrollX,scrollY));
