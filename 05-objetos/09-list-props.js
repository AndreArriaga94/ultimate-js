const punto = {
    x: 10,
    y: 15,
    // dibujar: function() {
    dibujar() {
        console.log('dibujando');
    }
}

delete punto.dibujar;
if('dibujar' in punto){
    punto.dibujar();
}

let keys = Object.keys(punto)
console.log(keys);

for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)){
    console.log(entry);
}

// in es un poco nuevo hace lo mismo que los anteriores
for (let llave in punto){
    console.log(llave,punto[llave]);
}