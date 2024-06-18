// HTMLElement
let htmlElement = document.getElementById('cuerpo');
console.log(Object.getPrototypeOf(htmlElement));

// HTMLColecction -> no es array
let elementosRed = document.getElementsByClassName('red');
console.log(elementosRed);

//NodeList
let elementosPara = document.getElementsByName('paragraph');
console.log(elementosPara);

//HTMLColecction
let parrafos = document.getElementsByTagName('p');

//HTMLElement # por id . por css
let el = document.querySelector('#cuerpo');

//NodeList # por id . por css sin nada todas las etiquetas
let els = document.querySelectorAll('p');

let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive, pstatic);

let nuevoP = document.createElement('p');
document.body.append(nuevoP);

//HTMLCollection refleja 5 elementos NodeList refleja 4
console.log(plive, pstatic);