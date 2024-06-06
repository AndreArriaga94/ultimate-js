const  suma = (a,b,...rest) =>{
    console.log(rest);
}

// suma(1,2,3,4);

const logMsg = (desc, ...msgs) => {
    for (let msg of msgs){
        console.log(desc,msg);
    }
}

// logMsg('Servidor','Error1','Peticion aceptada','socket');

let mensajes = ['Error1','Peticion aceptada','socket']

logMsg('Cliente', ...mensajes, 'Otro error'); //por el spread operator ...