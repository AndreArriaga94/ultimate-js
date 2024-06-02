const saludo = "Hola Mundo!";
const despedida = new String("Chao mundo:(");

console.log(saludo);
console.log(despedida);

console.log(saludo.length);
console.log(saludo.indexOf("Mu")); //-1 en caso que no encuentre el texto, empieza desde 0 el conteo de posicion
console.log(saludo.includes(" Mundo"));

let nuevoSaludo = saludo.replace("Mundo","Ismar");
console.log(saludo.replace("Mundo","Ismar")); //cambia el texto pero no modifica la variable

if(saludo.indexOf("Mu") >= 0){
    console.log("el texto existe")
}

console.log(saludo.toLocaleLowerCase());
console.log(saludo.toLocaleUpperCase());

console.log(saludo.substring(0,4)); //recibe indice de inicio y luego el indice final, pero este no incluye el caracter final
console.log(saludo.substr(2,4)); // esta deprecado

const espacios = " Hola  Mundo!  ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());