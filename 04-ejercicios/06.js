/**
 * 
 */

let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(arr){
    let cantPositivos = 0;

    for(let i of arr){
        cantPositivos = i > 0 ? cantPositivos++ : cantPositivos;
    }

    return cantPositivos;
}

let resultado = cuantosPositivos(array);
console.log(resultado);