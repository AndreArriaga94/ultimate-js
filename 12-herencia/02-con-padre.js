function Entidad(entidad){
    this.id = Math.random().toString('20');
    this.entidad = entidad;
}

function User(){
    Entidad.call(this, 'user');
    this.attrs = {
        nombre: 'Ismar',
        email: 'arriaga109407@gmail.com'
    }
}

const u = new User();
console.log(u);