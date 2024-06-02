let a = 1;
let b = a;

b++;
console.log(a,b); // 1, 2

let c = {};
let d = c;

c.prop = 1;
console.log(c,d);

let f = 1;

function suma(n){
    n++;
}

suma(a);
console.log(a);

let g = 1;

function suma(n){
    n.prop++;
}

suma(g);
console.log(g);