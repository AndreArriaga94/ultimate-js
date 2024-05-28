/**
 * 
 */

function precioCompleto(precio, impuesto) {
    let valorImpuesto = impuesto * precio;

    return (precio+valorImpuesto);
}



let resultado = precioCompleto(19.90,0.15);
console.log(resultado)