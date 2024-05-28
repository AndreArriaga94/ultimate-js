/**
 * Nombre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

function nombreResolucion(ancho,alto){

    let resolucion = '';

    if (ancho >= 7680 && alto >= 4320){
        resolucion = '8K';
    } else if (ancho >= 3840 && alto >= 2160){
        resolucion = '4K';
    } else if (ancho >= 2560 && alto >= 1440){
        resolucion = 'WQHD';
    } else if (ancho >= 1920 && alto >= 1080){
        resolucion = 'FHD';
    } else if (ancho >= 1280 && alto >= 720){
        resolucion = 'HD';
    } else {
        resolucion = false;
    }

    return resolucion;
}

let nombre = nombreResolucion(1366,768);
console.log(nombre);