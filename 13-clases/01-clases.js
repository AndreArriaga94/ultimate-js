// function User(name){
//     this.name = name;
//     this.instancia = function (){}
// }

// User.prototype.login = function (){
//     console.log('Hola mundo!');
// }

class User {
    constructor(name){
        this.name = name;
        this.instancia = function(){}
    }

    activo = true;

    // a la instancia de usuario
    logout = () => {
        console.log('logout');
    }

    // al prototipo
    login(){
        console.log('Hola mundo');
    }
}

const u = new User('Ismar Arriaga ');