let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(plive, pstatic);

// let item1 = collection.namedItem('paragraph');
// // utiliza el index
// let item2 = collection.item(3);
// let item3 = collection[3];
// console.log(item1,item2,item3);

//HTMLCollection no tiene funciones para iterar
// for (let el of collection)
//     console.log(el);

//el objeto
// Array.from(collection).forEach(x => console.log(x));

//el elemento
// [...collection].forEach(x => console.log(x));

let item1 = list.item(3);
let item2 = list[3];

list.forEach(x=> console.log(x));

//entries, keys y values

let entries = list.entries();
let keys = list.keys();
let values = list.values();

[...list].forEach(el=>console.log(el));