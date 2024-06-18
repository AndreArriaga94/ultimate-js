const url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url, {
    method: 'POST', //PUT, PATCH, DELETE, GET, GET es el valor por defecto
    body: JSON.stringify({ title: 'Hola mundo' }),
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'api key',
    },
    cache: 'no-cache', // default, reload, force-cache, only-if-cached siempre que haya calculado la respuesta y la haya guardado en el cache
})
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