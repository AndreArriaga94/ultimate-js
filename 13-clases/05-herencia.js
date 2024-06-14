class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }

    save() {}
}

class User extends Entidad{
    constructor(name){
        super(1); //argumentos de constructor
        this.name = name;
    }
}

const u = new User('Ismar Arriaga');
