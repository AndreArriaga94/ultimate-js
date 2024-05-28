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

let pairs = [
    [1,{name:'Ismar'}],
    [3,{name:'Handy'}],
    [2,{name:'Andre'}],
]

function toCollection(arr){

    let arrResultado = [];

    for(let i in array){
        let elemento = arr[i];
        arrResultado[i] = elemento[1];
        arrResultado[i].id = elemento[0];
    }

    return arrResultado;
}

// console.log(prop);
// console.log(prop, user[prop]);


let resultado = toCollection(id)
console.log(resultado)