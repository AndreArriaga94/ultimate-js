let afuera = 'estoy afuera';

function alcance(){
    // console.log('afuera');
    afuera = 'estoy dentro';
    function saludo () {}
    var vieja = 'ya no usar';
    let variable = 'Hola mundo';
    let constante = 'Hola mundo!';

    console.log(saludo);
    console.log(vieja);
    console.log(variable);
    console.log(constante);
}

console.log(afuera)
alcance();

console.log(afuera);
