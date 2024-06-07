// dentro de un objeto this hace referencia a un objeto
// en una funcion this hace referencia al objetivo window, global
// si se usa new hace referencia al objeto que sera creado

const user = {
    name: 'Ismar',
    login(){
        console.log(this);
    }
}

// user.logout = function logout () {
user.logout = function () {
    console.log(this);
}

user.login(); // tiene nombre
user.logout(); // anonima

function log(){
    console.log(this);
}

log(); // objeto de window

function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this);

}

/**
 * Se crea un objeto literal
 * vincula este objeto a this
 * se vincula prototipo
 * si no retora nada, entonces retorna this
 */

const l = new Log('Hola mundo'); // objeto que devuelve