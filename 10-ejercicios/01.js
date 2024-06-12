const obj = {
    nombre: 'Ismar',
}

function Extender(){
    this.login = function () {
        console.log("iniciando sesion ", this.nombre);
    }

    this.logout = () => {
        console.log("cerrando sesion ", this.nombre);
    }

    this.propiedad 
}

Extender.call(obj);

console.log(obj);
obj.login();
obj.logout();