let validate = data => {
    let errors = {};
    if(!data.name) {
        errors.name = 'Campo obligatorio';
    }
    if(!data.lastname){
        errors.lastname = 'Campo obligatorio';
    }

    return errors;
}

let initialValues = {
    name: '',
    lastname: '',
}

let render = ({data,errors}) => {
    return `
        <form name='formulario'>
            <div> 
                <lable> Nombre: </label>
                <input name="name" value="${data.name}"/>
                ${errors.name || ''}
            </div>
            <div> 
                <lable> Apellido: </label>
                <input name="lastname" value"${data.lastname}"/>
                ${errors.lastname || ''}
            </div>
            <div><button>Enviar</button></div>
        </form>
    `
}

let form = document.createElement('form');
form.innerHTML = render({data: initialValues, errors:{}});
document.body.append(form);

form.addEventListener('submit', e =>{
    e.preventDefault();
    let data = Array.from(e.target.elements).reduce((acc,el) => {
        if (!el.name) return acc;
        acc[el.name] = el.value;
        return acc;
    },{})

    const errors = validate(data);
    console.log(errors);

    if(Object.keys(errors).length > 0){
        let html = render({errors, data});
        form.innerHTML = html;
        return;
    }

    //promesas o asincronia para el envio de los datos
})