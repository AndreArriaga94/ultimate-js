/**
 * 
 */

let array = [{
    id:1,
    name: 'Ismar',
},
{
    id:2,
    name: 'Handy',
},
{
    id:3,
    name: 'Andre',
}]

let pares = [
    [1,{id:1,name:'Ismar'}],
    [3,{id:2,name:'Handy'}],
    [2,{id:3,name:'Andre'}],
]

function toPairs(arr){

    let arrResultado = [];

    for(let i in array){
        let elemento = arr[i];
        arrResultado[i] = [elemento.id,elemento];
    }

    return arrResultado;
}

// console.log(prop);
// console.log(prop, user[prop]);


let resultado = toPairs(array)
console.log(resultado)