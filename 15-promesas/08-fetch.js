// 'https://jsonplaceholder.typicode.com/todos/1'
const url = 'https://jsonplaceholder.typicode.com/todos/1';
//fectch siempre tiene exito, siempre ejecutara .then()
fetch(url)
    .then(response => {
        
        //devuelve false siempre que no se encuentre respuesta 200 a 299
        if(response.ok){
            // return response.json();
            return response.text();
        }
        return Promise.reject(response.status);
        
    })
    .then(data => console.log(data))
    .catch(mesagge => console.log({mesagge}));