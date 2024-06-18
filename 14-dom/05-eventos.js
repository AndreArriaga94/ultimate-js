let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type','text');
let btn = document.createElement('button');
btn.innerText = 'Enviar';
form.append(input);
form.append(btn);

document.body.append(form);

form.onmouseenter = e => {
    console.log('entra el mouse', e);
}

form.onmouseleave = e => {
    console.log('sale el mouse', e);
}

input.onfocus = e => {
    console.log('input con focus', e);
}

//cuando da clic despues de dar focus
input.onblur = e => {
    console.log('input perdio focus', e);
}

input.onchange = e => {
    console.log('input el valior cambia', e.target.value);
}

//si es el boton al final del formulario el navegador lo toma como submit button
// btn.onclick = e => {
//     e.preventDefault();
//     console.log('boton clickeado', e);
// }

//dar funcion al evento
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('boton clickeado', e);
});