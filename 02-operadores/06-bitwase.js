// bit: 0 1
// Byte: 8 bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 1
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6

// OR | coloca 1 donde va 1 en el bit
console.log(1 | 3); // 00000011
console.log(1 | 5); // 00000101
console.log(3 | 5); // 00000111
// AND & coloca 1 donde ambos bit tienen 1
console.log(1 & 3); // 00000001
console.log(1 & 5); // 00000000
console.log(3 & 5); // 00000001