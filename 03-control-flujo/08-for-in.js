// cuales son los numeros pares

// for in (let variableItareble in objeto)  {

// } 

let user = {
    id: 1,
    name: 'Ismar Arriaga',
    edad: '29',
};

for (let prop in user)  {
    console.log(prop);
    console.log(prop, user[prop]);
    // nombrePropiedad valorPropiedad
}

console.log('Fuera del for');

let animales = ['gato','perro','pez']

for (let indice in animales)  {
    console.log(indice, animales[indice]);
    // indice valorIndice
}