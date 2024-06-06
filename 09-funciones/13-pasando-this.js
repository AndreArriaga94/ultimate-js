(function saludar(){
    console.log(this);
}).bind()({propiedad: 'hola mundo'})(1,2)

// saludar.call({propiedad: 'hola mundo'},1,5);
// saludar.apply({propiedad: 'hola mundo'},[1,5]);

// let nuevoSaludar = saludar.bind({propiedad: 'hola mundo'},1,5);
// nuevoSaludar(1,5);

saludar.bind({propiedad: 'hola mundo'})(3,5);