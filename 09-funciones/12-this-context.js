const usuario = {
    nombre: 'Ismar',
    ciudadanias: ['Chile', 'Colombia', 'Italia'],
    mostrarCiudadanias(){
        // console.log(this.ciudadanias);
        this.ciudadanias.forEach(ciudadania => {
            console.log(this.nombre, ciudadania);
        });
    }
}

usuario.mostrarCiudadanias();