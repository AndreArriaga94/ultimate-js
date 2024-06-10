let nombre = 'Hola';
let apellido = 'Mundo';

function getNombreCompleto(nombre,apellido){
    return [nombre, apellido].join('');
}

let fullname = getNombrecompleto(nombre, apellido);

//encapsulacion
const user = {
    nombre: 'Hola',
    apellido: 'Mundo',
    getNombreCompleto(){
        return [this.nombre, this.apellido].join(' ');
    }
};

console.log(user.getNombreCompleto());

//abstraccion
//aca
const user2 = new User();
user2.password = 'IArriaga';
//aca
user2.save();

//herencia
// User => id,name,guardar()
// Restaurante => id,name,guardar()
// Motocicleta => id,name,guardar()

// fcPadre id,name,guardar() funcion constructora "clase"
// User => fcPadre
// Restaurante => fcPadre
// Motocicleta => fcPadre

function validaEntidad(entidad){
    // ...

    // switch(entidad.nombre){
    //     case 'user':
    //         entidad.save();
    //         break;
    //     case 'motocicleta':
    //         entidad.save();
    //         break;
    // 
    // }

    entidad.save();
}