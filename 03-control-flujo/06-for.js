// cuales son los numeros pares

// for (inicializacion; comparacion; expresion-terminar-iteracion)  {

// } 

let i = 0;

for (i = 0; i < 10; i++)  {
    if ( i%2 == 0 ) {
        console.log('Numero par', i);
    }
    console.log(i);
    i++;
}

console.log('Fuera del for');