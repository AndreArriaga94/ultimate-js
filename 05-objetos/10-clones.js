const punto = {
    x: 10,
    y: 15,
}
// Object.assign(punto, {z:20});
// asinga x = 1 porque toma el valor del objeto mas a la derecha
let clonePunto = Object.assign({},punto, {z:20, x:1});
let referencia = Object.assign(punto, {z:20, x:1});

let copiaPunto = Object.assign({},punto);
let copia3 = { ...punto};

//muy viejo
let copia4 = {};
for (let llave in punto){
    copia4[llave] = punto[llave];
}
