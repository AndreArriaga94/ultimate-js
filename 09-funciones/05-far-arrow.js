//fat arrow no tiene arguments, supper, this
const suma = (a,b) => {
    // console.log(arguments)
    // let total = 0;
    // for(let valor of arguments){
    //     total += valor;
    // }
    // return total;

    return Array.from(arguments)
        .reduce((acc,el) => acc+el);
}

console.log(suma(1,2));
console.log(suma(1));
console.log(suma(1,2,3,4,5,6));