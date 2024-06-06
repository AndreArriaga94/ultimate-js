function sumaTodo(arr){
    if (!Array.isArray(arr)){
        throw new Error('El parámetro no es un array');
    }
    return arr.reduce((acc,el) =>{ 
        if(typeof el !== 'number' || Number.isNaN(el)){
            throw new Error(`Elemento ${el} no es numero`);
        }
        return acc + el;
    });
}

// console.log(sumaTodo([1,2,3,4]));

try{
    // console.log(sumaTodo({prop: 1}));
    console.log(sumaTodo([1,2,NaN,'Hola mundo']));
}catch (e){
    console.log(e.message);
}

console.log('despues del try catch');