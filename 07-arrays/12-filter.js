const usuarios = [
    {edad:17, nombre: 'Ismar'},
    {edad:13, nombre: 'Handy'},
    {edad:32, nombre: 'Andre'},
    {edad:25, nombre: 'Tatiana'},
];

const mayores = usuarios.filter( u => u.edad > 17);
// const menores = usuarios.reject( u => u.edad > 17); en otros lenguajes
const menores = usuarios.filter( u => u.edad < 18); 
console.log(mayores);
console.log(menores);