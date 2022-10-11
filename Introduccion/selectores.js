/**
 * Autor: Daniel Gustavo De La Cruz
 * GitHub: Dan-raccoon-69
 */

// MIS APUNTES SOBRE EL DOM (INTRODUCCION)

/*
DOM: document object model, Modelo de Objetos del Documento, es el proceso por el cual nuestras etiquetas HTML son transformadas a objetos que son entendibles para el navegador para poder mostrarnos el resultado, prácticamente una transformación del código HTML a objetos que son entendibles por el navegador.

Es una API definida para representar e interactuar con cualquier documento HTML o XML. El DOM es un modelo de documento que se carga en el navegador web y que representa el documento como un árbol de nodos, en donde cada nodo representa una parte del documento (puede tratarse de un elemento, una cadena de texto o un comentario).

Permite ejecutar código en el navegador para acceder e interactuar con cualquier nodo del documento. Estos nodos pueden crearse, moverse o modificarse.

El DOM surgió a partir de la implementación de JavaScript en los navegadores. A esta primera versión también se la conoce como DOM 0 o "Legacy DOM". Hoy en día el grupo WHATWG es el encargado de actualizar el estándar de DOM. 
 */


// SELECCIONAR NODOS

// document.getElementById(id);
const title = document.getElementById('title');
title.style.background = 'yellow';
console.log(title);
// cuando necesites un elemento en particular, la mejor manera es utilizar ID, es unica y rapida.


// document.querySelector(selectorCss)
// cuando usamos querySelector y querySelectorAll siempre debemos usar selectores de css, pseudoclases, etc.
const title2 = document.querySelector('#title');
console.log(title2);
// querySelectorAll me selecciona todos los items
const listas = document.querySelectorAll('ul li');
console.log(listas);
//mostrando un elemento en especifico de la lista
console.log(listas[1]);
// otra manera de obtener la lista con sus elementos
const list = document.querySelector('ul');
const ul = list.querySelectorAll('li');
console.log(ul);
// creando un arreglo con los items de la lista
const arrayList = Array.from(document.querySelectorAll('li'));
console.log(arrayList);
// asignandoles estilos a cada elemento
arrayList.forEach(el => {
    el.style.background = 'steelblue';
    el.style.fontFamily = 'arial';
    el.style.margin = '10px';
});


// OBTENIENDO ATRIBUTOS 
// getAttribute(atributo);
const titulo_h2 = document.getElementById('title_h2_id'),
    idTitle_h2 = titulo_h2.getAttribute('id'),
    classTitle_h2 = titulo_h2.getAttribute('class');
    console.log(idTitle_h2);
    console.log(classTitle_h2);
    
// ESTABLECIENDO ATRIBUTOS
// setAttribute(atributo,valor) o elemento.atributo = valor;
titulo_h2.setAttribute('class','nueva_clase');
titulo_h2.className = 'nuevaclase2';
console.log(titulo_h2);

// AGREGANDO CLASES, QUITANDO CLASES, VERIFICANDO QUE EXISTA LA CLASE
// agregando 2 clases: elemento.classList.add(nameClass, nameClass);
// quitando 1 clase: elemento.classList.remove(nameClass);
// verificando: elemento.contains(nameClass);
titulo_h2.classList.add('nuevaclase3', 'nuevaclase4');
// eliminando la clase 'nuevaclase4'
titulo_h2.classList.remove('nuevaclase4');
console.log(titulo_h2);
// verificando si existe x clase
console.log(titulo_h2.classList.contains('nuevaclase3')); //true
console.log(titulo_h2.classList.contains('nuevaclase4')); //false
// imprimiendo su id
console.log(titulo_h2.id);
// imprimiendo el contenido de la etiqueta
console.log(titulo_h2.textContent);

/*
DIFERENCIAS ENTRE:
•	textContent: “escarba” y retorna todo el texto que se encuentra sobre los elementos HTML que se encuentren por debajo del elemento seleccionado. // EL DOM es muy interesante.
•	innerHTML: te retorna en un String el texto y el HTML que se encuentre por debajo del elemento seleccionado. 
    // EL <span>DOM</span> es muy <em>interesante</em>.
•	outerHTML: te retorna en un String la etiqueta  y sus atributos, el texto y el HTML del elemento seleccionado. 
    // <h1 id="title" style="background: yellow;">EL <span>DOM</span> es muy <em>interesante</em>.</h1>
*/
const title_h1 = document.querySelector('#title');
console.log(title_h1.textContent);
console.log(title_h1.innerHTML);
console.log(title_h1.outerHTML);
title_h1.textContent = 'El DOM ES MUY PODEROSO Y FENOMENAL';
title_h1.innerHTML = 'El DOM ES MUY PODEROSO Y <em><u>FENOMENAL</u></em>'


// CREAR ELEMENTOS Y AGREGARLOS EN EL DOCUMENTO
const parrafo = document.createElement('p');
// agregando contenido a p
parrafo.textContent = 'Daniel Gustavo';
// agregando una clase a p
parrafo.classList.add('nombre');
// agregandolo abajo al final del body
// document.body.appendChild(parrafo);

const miNombre = document.querySelector('.miNombre');
if(miNombre){
    miNombre.appendChild(parrafo);
}



// EVENTOS ************

