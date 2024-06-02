const ahora = new Date();
console.log(ahora);

const fecha = new Date('December 11 1986 14:15 GMT-0300');
// M D Y
console.log(fecha);

const fecha2 = new Date(1986, 11, 25, 14, 15)
//0 enero ... 11 diciembre
console.log(fecha2);

const fecha3 = new Date(1986, 11, 25, 14+15, 15);
//se suman gmt para obtener zona horaria

console.log('dateString', fecha3.toDateString());
console.log('dateString', fecha3.toISOString()); // Para pasar a cliente servidor porque utiliza la zona horaria
console.log('dateString', fecha3.toTimeString());

fecha3.getDate //dia del mes
fecha3.getDay //dia de la semana

fecha.setDate() //cambiar el dia
fecha3.setFullYear(1978);