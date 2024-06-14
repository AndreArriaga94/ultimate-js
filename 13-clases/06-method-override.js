class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }

    save() {
        console.log('save en Entidad')
    }
}

class User extends Entidad{
    constructor(name){
        super(1); //argumentos de constructor
        this.name = name;
    }

    save(){
        super.save();
        console.log('save en Usuario');
    }
}

const u = new User('Ismar Arriaga');
