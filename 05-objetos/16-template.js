const saludo = "Hola mundo! \nbienv\"en\'idos \t a ult\\imate javascript :)";

const nombre = 'Ismar';
const apellido = 'Arriaga';
const nombreCompleto = nombre + ' ' + apellido;

// const plantilla = `Hola mundo! ${nombreCompleto} ${miFuncion()}
function plantilla(nombre) {
    return `Hola mundo!
            Bienvenidos a "Ultimate JavaScript :)
            ${nombre}!
            `;
}