const usuarios = [
    {edad:17,nombre:'Ismar',plan:'premium'},
    {edad:13,nombre:'Handy',plan:'premium'},
    {edad:32,nombre:'Andre',plan:'free'},
    {edad:25,nombre:'Tatiana',plan:'gold'},
];

function groupBy(arr, prop) {
    let res = {};

    res.grouped = arr.reduce((acc,el) => {
        let valor = el[prop];
        acc[valor] = acc[valor] ? acc[valor] : []
        acc[valor].push(el);
        return acc;
    },{})
    
    return res;
}

const grouped = groupBy(usuarios, 'plan');
console.log({grouped});