function mixing(Ctr, ...args){
    Object.assign(Ctr.prototype, ...args);
}

let vuela = {
    vuela(){
        console.log('volando');
    }
}

let nada = {
    nada(){
        console.log('nadando');
    }
}

let bano = {
    bano(){
        console.log('yendo al baño');
    }
}

let camina = {
    camina(){
        console.log('caminando');
    }
}

//vuela, nada, camina, va al baño
function Pato(){
    this.name = 'Patito';
}

//nada, camina, va al baño
function Perro(){
    
}

//nada, va al baño
function Pez(){
    
}

//vuela pero no nada, ni camina, ni va al baño
function Avion(){
    
}

// Avion.prototype = {
//     ...vuela
// }

Object.assign(Avion.prototype, vuela);
console.log(Avion.prototype, new Avion());

let p = new Pez()

Object.assign(Pez.prototype, nada, bano);
console.log(Pez.prototype, p);

Object.assign(Perro.prototype, bano, camina, nada);
console.log(Perro.prototype, new Perro());

// Object.assign(Pato.prototype, vuela, camina, nada, bano);
mixing(Pato, vuela, camina, nada, bano);
console.log(Pato.prototype, new Pato());

