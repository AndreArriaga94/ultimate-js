function User(){
    this.name = 'hola Mundo';
    // this.login = function (){
    //     console.log('iniciando sesion');
    // }

    //metodo de instancia
    this.logger = function () {
        console.log('loggeando...');
    }
}

console.log(User.prototype);

//metodo de prototipo
User.prototype.login = function (){
    console.log('iniciando sesion', this.name); //utiliza el del objeto user1 o user2
    this.logger();
}
console.log(User.prototype);
const user1 = new User();
const user2 = new User();

User.prototype.toString = function () {
    console.log('Usuario: ', this.name);
}

user1.login();


// console.log(user1.login() === user2.login());

