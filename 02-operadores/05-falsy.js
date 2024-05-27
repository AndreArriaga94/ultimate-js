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