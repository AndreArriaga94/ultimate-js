function fntHola(){ 
    return 'Hola mundo';
}

// const hola = () => 'Hola mundo';

// solo un parametro sin parentesis
const hola = mensaje => mensaje + 'Hola mundo';

const hola2 = mensaje => { 
    return mensaje + 'Hola mundo';
}

const resultado = hola('Ismar ');
console.log(resultado);