
window.addEventListener("load", iniciar, false);

function iniciar(){
    let formulario = document.getElementsByTagName("form");
    let ultimoformulario = document.getElementsByTagName("form")[formulario.length - 1];
    
    // let ultimoInput = ultimoformulario.getElementsByTagName("input")[ultimoformulario.length-1];//esto hace lo mismo que el for
    let inputs = ultimoformulario.getElementsByTagName("input");
    let ultimoInput;
    for(let i = 0; i <= inputs.length-1; i++){
        if(inputs[i].type == "text"){
            ultimoInput = inputs[i];
        }
    }
    ultimoInput.focus();
}
