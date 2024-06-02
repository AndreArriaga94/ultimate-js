let obj1 = { id:1, name:'Ismar',};
function crearCopia(obj){
    let copia = {};
    for(let prop in obj){
        copia[prop] = obj[prop];
    }

    return copia;
}

let obj2 = crearCopia(obj1);
console.log({obj1,obj2});