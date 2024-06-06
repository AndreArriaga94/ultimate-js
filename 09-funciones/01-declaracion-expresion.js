// Declaracion de funciones: Function Declaration
console.log(suma); //imprime contenido de funcion

// named function
function suma() {
    console.log('sumando...');
}

// anonymous function
// function () {
//     console.log('Hola');
// }

const resta = function (){ // anonymous function expression
    console.log('restando');
}

const multiplica = function multi(){ // named function expression
    console.log('multiplicando');
}

const divide = () => { // fat arrow function siempre es anonima
    console.log('dividiendo');
}