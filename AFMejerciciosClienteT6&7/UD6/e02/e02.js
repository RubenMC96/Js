// Foco en el Último Input
// Crea un aplicación en javascript que coloque el foco en el último input 
// de tipo texto del último formulario de la página.

document.addEventListener('DOMContentLoaded', hacerFocusLastText);

function hacerFocusLastText (){
    let formulario = document.querySelector('form:last-of-type');
    formulario.querySelector('input[type="text"]:last-of-type').focus();
    
    
    // let inputs = formulario.querySelectorAll('input[type="text"]');
    // inputs[inputs.length - 1].focus();

}


