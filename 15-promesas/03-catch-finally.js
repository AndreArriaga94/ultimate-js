let promesa1 = new Promise((res, rej) => {
    res(12);
});

let promesa2 = new Promise((res, rej) => {
    rej(15);
});

//siempre que falle algo siempre se ira al catch
promesa1.then(valor=>{
    if(valor > 10)
        return promesa2;
}).then(valor2=>{
    console.log('la segunda promesa',valor2);
})
.catch(e => console.log(e))
.finally(() => console.log('aca estamos en finally!'));