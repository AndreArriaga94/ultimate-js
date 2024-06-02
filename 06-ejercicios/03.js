function similares(obj1, obj2){
    let distintos = false;

    for (let props in obj1){
        if(obj1[props] !== obj2[props]){
            distintos = true;
        }
    }

    return !distintos;
}


let user = createUsuario('Ismar');
let user2 = createUsuario('Arriaga');
let resultad = similares (
    {id:1, name: 'Ismar'},
    {id:1, name: 'Andre'},
)