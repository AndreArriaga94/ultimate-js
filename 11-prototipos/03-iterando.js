function User(){
    this.name = 'Hola Mundo';
}

User.prototype.login = function (){
    console.log('iniciando sesion', this.name); //utiliza el del objeto user1 o user2
}

let user1 = new User();

for (let prop in user)
    // if (user.hasOwnProperty('name'))
    // if (!user.hasOwnProperty(prop)) prototipo
    if (user.hasOwnProperty(prop))
        console.log(prop);

console.log(Object.keys(user)); // solo lo que se encuentra en el objeto user