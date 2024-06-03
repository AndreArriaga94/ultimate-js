const usuarios = [
    {edad:17,nombre:'Ismar',plan:'premium'},
    {edad:13,nombre:'Handy',plan:'free'},
    {edad:32,nombre:'Andre',plan:'free'},
    {edad:25,nombre:'Tatiana',plan:'gold'},
]

function getPaidUsers(usrs){

    return usrs.filter(u => u.plan !== 'free');

}

console.log(getPaidUsers(usuarios));