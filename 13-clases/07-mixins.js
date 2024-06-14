const Entidad = {
    save() {
        console.log('guardado de entidad');
    },
}

const Actualizar = {
    update() {
        console.log('actualizando entidad');
    },
}

class User{
    constructor(name){
        this.name = name;
    }

    save(){
        console.log('guardado en usuario');
    }
}

const nuevoProto = Object.assign({},Entidad, Actualizar);
Object.setPrototypeOf(User.prototype, nuevoProto);
const u = new User('Ismar Arriaga');
u.save();