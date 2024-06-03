function paraAbsoluto(arr) {
    let abs = arr.map(a =>  Math.abs(a)); 
    return abs;
}

const ns = [-2,-3,5,-15]

const absolutos = paraAbsoluto(ns);

console.log(absolutos);