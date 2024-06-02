function createUsuario(name){
    return {
        id: Math.random(),
        name,
    }
}


let user = createUsuario('Ismar');
let user2 = createUsuario('Arriaga');