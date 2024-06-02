function Usuario(){
    this.name='Ismar'

    // this.log = function () {
    //     console.log('logging');
    // }

    this.guardar = function(){
        log();
        console.log('guardando');
    }

    let log = function() {
        console.log('logging');
    }
}

const usuario = new Usuario();

// usuario.log = function(){
//     console.log('cambio');
// }

usuario.guardar();

