function Usuario(name) {
    this.id = Math.random();
    this.name = name;
}

let user = new Usuario('Ismar');
let user2 = new Usuario('Arriaga');