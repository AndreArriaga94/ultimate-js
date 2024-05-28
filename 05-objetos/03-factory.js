// let user = {
//     id: 1,
//     email: 'arriaga109407@gmail.com',
//     name: 'Ismar',
//     activo: true,
//     recuperarClave: function () {
//         console.log('recuperando clave');
//     },
// };

// let user1 = {
//     id: 2,
//     email: 'arriaga1094@hotmail.com',
//     name: 'Andre',
//     activo: false,
//     recuperarClave: function () {
//         console.log('recuperando clave');
//     },
// };

function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave');
        },
    }
}

let user1 = crearUsuario('Ismar','arriaga109407@gmail.com');
let user2 = crearUsuario('Andre','arriaga1094@hotmail.com');