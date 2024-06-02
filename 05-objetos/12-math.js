// console.log(Math.PI); //3.14
// console.log(Math.abs(-15)); 

console.log(
            Math.PI,
            Math.abs(-15),
            Math.round(15.5),
            Math.round(15.4),
            Math.floor(15.9),
            Math.ceil(15.1),
            Math.pow(2,3),
            Math.sqrt(9),
        );

console.log(Math.random());

function getRandom(min, max){
    return Math.random() * (max - min) + min;
}

console.log(getRandom(1,10));