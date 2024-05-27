function suma(a) {
    console.log(arguments)
    return a  + 2;
}

let resultado = suma(5,2,3,4,5,6);
console.log(resultado); 
console.log(typeof suma);