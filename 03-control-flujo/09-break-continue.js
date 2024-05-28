// break salir de un loop
// continue saltar una iteracion

let i = 0;
while ( i < 6 ){
    i++;
    if (i === 2){
        continue;
    }
    if (i === 4){
        break;
    }
    console.log(i);
}