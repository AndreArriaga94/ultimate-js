const numeros = [1,2,3,4];

const suma = numeros.reduce((acc,el)=> { // se ejecuta por cada elemento del array
    return acc + el;
},0); //valor del acumulador


const anidado = [[1,2],3,[4,5]];

const plano = anidado
            .reduce((acc, el) => acc.concat(el),[]);

console.log(plano);

const usuarios = [
    {edad:17, nombre: 'Ismar'},
    {edad:13, nombre: 'Handy'},
    {edad:32, nombre: 'Andre'},
    {edad:25, nombre: 'Tatiana'},
];

const indexado = usuarios.reduce((acc,el)=>({
    ...acc,
    [el.nombre]:el,
}),{})

indexado['Handy'];

console.log(indexado);