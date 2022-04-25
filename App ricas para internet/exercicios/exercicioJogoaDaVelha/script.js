var jogo = document.getElementById('jogo');
var x = document.getElementById('x');
var o = document.getElementById('o');

x.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});
o.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("imagem", event.target.id);
    console.log('Começou a arrastar');
});

jogo.addEventListener('dragenter', () => {
    console.log('drag enter');

});
jogo.addEventListener('dragleave', () => {
    console.log('drag leave');
 
});
jogo.addEventListener('dragover', (event) => {
    event.preventDefault();
    console.log('drag over');
   
});
jogo.addEventListener('drop', (event) => {

    let elementId = event.dataTransfer.getData("Imagem");
    
    
    if(elementId == "x"){
        let imagemx = x.cloneNode(true);
        event.target.appendChild(imagemx);
    }
    if(elementId == "o"){
        let imagemo = o.cloneNode(true);
        event.target.appendChild(imagemo);
    }

    console.log("Dropou");
});

