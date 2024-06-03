const usuarios = [
    {edad:17, nombre: 'Ismar'},
    {edad:13, nombre: 'Handy'},
    {edad:32, nombre: 'Andre'},
    {edad:25, nombre: 'Tatiana'},
];

const lista = usuarios
            .filter(u =>u.edad > 17)
            .map (u => `<li>${u.nombre}</li>`);

console.log(lista);
const html = `<ol>${lista.join('')}</ol>`;
console.log(html);

const mapped = usuarios.map(u => {
    return{
        ...u, mayor: u.edad > 17,
    }
});

const mapped2 = usuarios.map(u => {
    ({
        ...u, mayor: u.edad > 17,
    })
});