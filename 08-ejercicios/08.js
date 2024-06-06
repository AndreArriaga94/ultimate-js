const usuarios = [
    {edad:17,nombre:'Ismar',plan:'premium'},
    {edad:13,nombre:'Handy',plan:'premium'},
    {edad:32,nombre:'Andre',plan:'free'},
    {edad:25,nombre:'Tatiana',plan:'gold'},
];

/*
Obtener los usuarios pago
Ordenar de mayor a menor edad
Devolver el nombre del usuarioCrear una plantilla html
imprimirla en consola
<ul>
<li>Ismar</li>
<li>Handy</li>
</ul>
*/

const lista = usuarios
            .filter(u =>u.plan !== 'free')
            .sort((a,b) => {
                if(a.edad < b.edad) return 1;
                if(a.edad > b.edad) return -1;
                return 0;
            })
            .map (u => `<li>${u.nombre}</li>`);

const html = `<ul>${lista.join('')}</ul>`;
console.log(html);