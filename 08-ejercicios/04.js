const usuarios = [
    {edad:17,nombre:'Ismar',plan:'premium'},
    {edad:13,nombre:'Handy',plan:'premium'},
    {edad:32,nombre:'Andre',plan:'free'},
    {edad:25,nombre:'Tatiana',plan:'gold'},
]

function cuantosPremium(usrs){
    
    usrs.reduce((acc,el) => {
        if (el.plan !== 'free') return acc + 1;
    },0);
}

function cuantosMayores(usrs){

    return usrs.reduce((acc,el) => 
        el.edad > 17 ? acc + 1 : acc
    ,0);

}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));