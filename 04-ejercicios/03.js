/**
 * indice validar que no sea menor a cero y que el elemento exista en el array
 */

function getByIdx(arr, idx){
    
    let resultado = '';
    
    if(idx < 0 || idx>arr.length){
        resultado = 'Elemento no existe'
    } else {
        resultado = arr[idx]
    }

    return resultado;
}

let resultado = getByIdx([1,2],1)
console.log(resultado);