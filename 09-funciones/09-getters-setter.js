const usuario = {
    nombre: 'Ismar',
    apellido: 'Arriaga',
    // nombreCompleto: function(){
    get nombreCompleto(){
        `${usuario.nombre} ${usuario.apellido}`
    },
    set nombreCompleto(valor){ //siempre debe de llevar parametro
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

// console.log(`${usuario.nombre} ${usuario.apellido}`);
// console.log(usuario.nombreCompleto());
usuario.nombreCompleto = 'Hola Mundo';
console.log(usuario.nombreCompleto); // por tener get