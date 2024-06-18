let id;

function createDraggable () {
    let span = document.createElement('span');
    span.id = 'holaMundo';
    span.innerText = 'Arrastable';
    span.draggable = true;
    span.ondragstart = e => {
        id = e.target.id;
    }
    return span;
}

function createDroppableArea(){
    let dropArea = document.createElement('div');
    dropArea.className = 'drop';
    dropArea.ondragenter = e =>{
        e.target.style.background = 'yellow';
    }

    dropArea.ondragleave = e => {
        e.target.style.background = '';
    }

    dropArea.ondragover = e => {
        e.preventDefault();
    }
    
    dropArea.ondrop = e => {
        e.target.appendChild(document.getElementById(id));
    }

    return dropArea;
}

let dropArea1 = createDroppableArea();
let dropArea2 = createDroppableArea();
let draggable = createDraggable();
document.body.append(dropArea1);
document.body.append(dropArea2);
document.body.append(draggable);
