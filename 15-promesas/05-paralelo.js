const p1 = Promise.resolve(3);
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,'foo');
});

//si una es rechazada se va al .catch()
// Promise.all([p1,p2,p3])
//     .then(valores => console.log('all',valores))
//     .catch(e => console.log('error en all', e));

//espera a que se resuleva la primer promesa
// Promise.race([p1,p2,p3])
//     .then(valor => console.log('race',valor))
//     .catch(e => console.log('error en race', e));

//ejecuta hasta que una promesa de todas se resuelva
// Promise.any([p1,p2,p3])
//     .then(valor => console.log({valor}))
//     .catch(e => console.log({e}));

//devuelve un objeto con los estados de las promesas, nunca llegara a catch ya que se ejecutaran todas las promesas
Promise.allSettled([p1,p2,p3])
    .then(valores => console.log({valores}))
    .catch(e => console.log({e}));