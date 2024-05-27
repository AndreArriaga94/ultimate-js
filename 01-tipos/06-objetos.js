// Personajes de TV
let nombre = 'Tanjiro';
let anime = 'KnY';
let edad = 16;

// let personaje = {};

let personaje = {
    nombre: nombre,
    anime: anime,
    edad: edad,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['nombre']);

personaje.edad = 13;
personaje['edad'] = 16;

delete personaje.edad;