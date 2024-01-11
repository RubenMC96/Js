document.getElementById("crear").addEventListener("click", crear, false);

function crear(){
    // Obtiene la lista de párrafos
    let lista = document.getElementById("lista");
    
    // Obtiene el valor del área de texto y del selector de color
    let texto = document.getElementById("texto").value;
    let color = document.getElementById("color").value;
    
    // Crea un nuevo elemento de párrafo
    let parrafo = document.createElement("p");

    
    // Crea un nuevo nodo de texto con el valor del área de texto
    let textNode = document.createTextNode(texto);
    
    // Agrega el nodo de texto al párrafo
    parrafo.appendChild(textNode);
    
    // Aplica el color de fondo al párrafo
    parrafo.style.backgroundColor = color;

    // Agrega el párrafo a la lista de párrafos
    lista.appendChild(parrafo);
    
   
 }
 
