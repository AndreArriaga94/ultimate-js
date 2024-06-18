let el = document.createElement('p');

el.innerHTML = "Elemento creado";

document.body.append(el);

// el.innerText = "<ul><li>Hola mundo</li></ul";
el.innerHTML = "<ul><li>Hola mundo</li></ul";
el.style = 'background-color: red; font-weight: bold;';
el.className = 'parrafo';
el.id = 'mi-parrafo';
// el.mipropiedad = 'mi propiedad'

el.setAttribute('mipropiedad','mi propiedad');
el.getAttribute('mipropiedad');
el.hasAttribute('mipropiedad');