let obj = {};
// let obj = new Object();

// new Array(); []
// new String(): '' "" ``
// new Number(); 12
// new Boolean(); true false;

function Usuario(){
    this.name = 'Ismar Arriaga';
}

let user = new Usuario();
console.log(user.contructor);

const s1 = "1 + 1"; //"1 + 1"
const s2 = new String("1 + 1"); //String("1 + 1")
eval(s1) //2
eval(s2) //String("1 + 1")

s2.valueOf() // "1 + 1"