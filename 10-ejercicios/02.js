const obj = {
    nombre: 'Ismar',
}

function extender(obj){
    // obj.login = function () {
    //     console.log("iniciando sesion ", this.nombre);
    // }

    // obj.login = () => {
    //     console.log("cerrando sesion ", this.nombre);
    // }

    // return obj;

    const metodos = {
        login() {console.log("iniciando sesion ", this.nombre);},
        logout() {console.log("cerrando sesion ", this.nombre);},
    }

    return Object.assign(obj, metodos);
}

const usuario = extender.call(obj);

console.log(obj);
obj.login();