const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id: 15},
    ['lala'],
]

function dividePorTipo(arr) {
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

    return {
        numeros: arr.filter(n=> n ==='number'),
        string: arr.filter(n=> n ==='string'),
        object: arr.filter(n=> n ==='object'),
    }

    // return arrTipo;
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);