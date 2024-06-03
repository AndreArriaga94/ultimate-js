const letras = ['a','b',1,'c','d',1];

console.log(letras.indexOf('c'));
console.log(letras.indexOf(1)); //comienzo al final
console.log(letras.lastIndexOf(1)); //del final hacia atras

console.log(letras.indexOf(1) !== -1);
console.log(letras.includes('d'));
console.log(letras.indexOf(1,3)); 