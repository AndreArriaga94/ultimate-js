const usuarios = [
    {edad:17,nombre:'Ismar',plan:'premium'},
    {edad:13,nombre:'Handy',plan:'premium'},
    {edad:32,nombre:'Andre',plan:'free'},
];

const users = [
    {age:22,name:'Tatiana',membership:'premium'},
    {age:27,name:'Handre',membership:'premium'},
    {age:29,name:'Tatmar',membership:'free'},
];

/*
unificar las estructuras de usuarios y user
fusionar los array
ordenar por edad
crear plantilla HTML
<li>Nombre: name, Edad: age</li>
imprimir la lista
*/

const listaUsers = usuarios
            .map (u =>({
                
                age: u.edad,
                name: u.nombre,
                membership: u.plan,
            }) );

const listaUnificada = listaUsers.concat(users);
const todos = [...listaUsers,users];

// console.log(listaUnificada);

const listaFinal = listaUnificada
            .sort((a,b) => {
                if(a.age < b.age) return -1;
                if(a.age > b.age) return 1;
                return 0;
            })
            .map (u => `<li> Nombre: ${u.name}, Edad: ${u.age}</li>`);

const html = `<ul>${listaFinal.join('')}</ul>`;
console.log(html);