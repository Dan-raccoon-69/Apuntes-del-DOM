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

