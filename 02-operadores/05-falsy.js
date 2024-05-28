// short-circuit

console.log([] || {}) // [] el primero de true
console.log([] && {}) // {} el ultimo de true

/**
 * Falso
 * false
 * 0
 * ''
 * null
 * undefined
 * NaN
 */

let nombre = ''
let username = nombre || 'Anonimo';
// 'anonimo'

let nombre2 = ' IAA '
let username2 = nombre2 || 'Anonimo';
// 'IAA'

function fn1(){
    console.log('funcion 1');
    return true;
}

function fn2(){
    console.log('funcion 2');
    return true;
}

let x = fn1() && fn2();
// funcion 1
// funcion 2

function fn3(){
    console.log('funcion 3');
    return false;
}

function fn4(){
    console.log('funcion 4');
    return true;
}

let y = fn3() && fn4();
// funcion 3