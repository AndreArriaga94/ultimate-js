/**
 * {
 *  url: ...
 *  bucket: amazon S3
 *  port: 80
 * }
 */

// function configurarAPI(url){
//     const defaultURL = url || 'default.com';
//     return `${defaultURL}`;
// }

const config = {
    url: 'google.com',
}

// function configurarAPI({url} = {url: 'default.com'}){
//     return `${url}`;
// }

// console.log(configurarAPI(config))

function configurarAPI(url, bucket = 145, port = 80){
    return `${url}/${bucket}:${port}`;
}

console.log(configurarAPI('google.com','145',80))
console.log(configurarAPI('google.com'))
// console.log(configurarAPI('yahoo.com'))