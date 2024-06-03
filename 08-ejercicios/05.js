const usuarios = [
    {edad:17,nombre:'Ismar',plan:'premium'},
    {edad:13,nombre:'Handy',plan:'premium'},
    {edad:32,nombre:'Andre',plan:'free'},
    {edad:25,nombre:'Tatiana',plan:'gold'},
]

function obtenerMayor(arr) {
    let result = arr.sort((a,b) => {
        if(a.edad < b.edad) return 1;
        if(a.edad > b.edad) return -1;
        return 0;
    })

    return result[0];
}

const mayor = obtenerMayor(usuarios);

console.log(mayor);