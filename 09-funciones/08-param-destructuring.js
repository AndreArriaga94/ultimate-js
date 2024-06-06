const config = {
    url: 'google.com',
    direccion: {
        calle: 'hola mundo',
        numero: 80
    }
}

function webserver({url, direccion: {calle}}){
    // const {url} = config;
    return url;
}

// console.log(webserver({url:'google.com'}));
console.log(webserver(config));

const config1 = [
    'google.com',
    '145',
    80,
]

// function webserver1(configuracion){
//     const [url, bucket,port] = configuracion;
//     return url;
// }

// function webserver1([url, bucket,port]){
function webserver1([url, ...rest]){
    return url;
}