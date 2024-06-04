function dividePorTipo(arr){
    // let arrTipo = {};
    // arr.filter(t => {
    //     if (typeof t === 'number'){
    //         arrTipo.numeros.push = t;
    //     }
    //     if (typeof t === 'string'){
    //         arrTipo.string.push = t;
    //     }
    //     if (typeof t === 'object'){
    //         arrTipo.object.push = t;    
    //     }
    // })

    return arr.reduce((acc,el) => {
        let llave = typeof el;
        acc[llave] = acc[llave] ? acc[llave] : []
        acc[llave].push(el);
        return acc;
    },{});
}

const miArray = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    {id: 15},
    ['lala'],
];

let arr = dividePorTipo(miArray);
console.log(arr);