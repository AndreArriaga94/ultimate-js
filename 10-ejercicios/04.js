function suma(fn, ...rest){
    let suma = 0;
    for (let n of rest){
        suma += n;
    }
    fn(suma);

    let resultado = rest.reduce((acc, el) => acc + el);

    fn(resultado);
}

suma(resultado => {
    console.log(resultado)
},1,2,3,4);