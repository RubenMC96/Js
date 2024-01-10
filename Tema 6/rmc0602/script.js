
window.addEventListener("load", iniciar, false);

function iniciar(){
    let formulario = document.getElementsByTagName("form");
    let ultimoformulario = document.getElementsByTagName("form")[formulario.length - 1];
    
    let ultimoInput = ultimoformulario.getElementsByTagName("input")[ultimoformulario.length-1];
    ultimoInput.focus();
}
