function drag(event) {
    let pedra = event.dataTransfer.setData("pedra", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    let aux = event.dataTransfer.getData("pedra");

    console.log(event);
    if (event.toElement.childNodes.length >= 1) {
        if (event.toElement.childElementCount == 0) {
            let elemento = document.getElementById(aux);
            event.target.appendChild(elemento);
        }
    }
};