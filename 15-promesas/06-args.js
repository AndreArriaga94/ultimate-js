let user = 'Ismar Arriaga';

let promesa1 = user => new Promise((res, rej)=>{
    res(12);
});

let promesa2 = user => new Promise((res, rej)=>{
    res(user + 'Hola mundo');
});

promesa1(user)
    .then(user => promesa2(user))
    .then(dato => console.log(dato));