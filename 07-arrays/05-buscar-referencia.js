const usuarios = [
    {id:1, name: 'Ismar'},
    {id:2, name: 'Arriaga'},
]

// usuarios.indexOf({id:1, name: 'Ismar'});

const resultado = usuarios.find(function(usuario){ //funcion predicate, devuelve true or false
    return usuario.id === 1; // propiedad debe de ser unica
});

const resultado2 = usuarios.find(usuarios => 
    usuario.id === 1);

const resultado3 = usuarios.findIndex(usuarios => 
    usuario.id === 1);
    
console.log(resultado);