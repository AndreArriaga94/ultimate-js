let objeto = {
    id: 1,
    name: 'Ismar',
    login: function(){},
    logout: function(){},
}

function cualesMetodos(obj){
    for (let props in obj){
        if(typeof obj[props] === 'function'){
            console.log(props);
        }
    }
}

cualesMetodos(objeto)