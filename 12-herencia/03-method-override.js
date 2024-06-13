function getProto(u){
    return Object.getPrototypeOf(Object.getPrototypeOf(u))
}

function Entidad(){

}

Entidad.prototype.save = function(){
    console.log('guardando desde entidad');
}

function User(){}
function Product(){}
function Category(){}

User.prototype.save() = function (){
    console.log('guardando desde user');
}

Object.setPrototypeOf(User.prototype, Entidad.prototype);

const u = new User();
console.log(getProto(u).save());
