// Creación de Párrafos con color de fondo
// Crea una página web que tenga un TextArea, 
// una lista desplegable con colores y un botón 
// "Crear párrafo".
// Cuando el usuario haga clic 
// sobre el botón se creará un nuevo párrafo que 
// contendrá el texto del TextArea y el color del 
// fondo será el seleccionado en la lista desplegable. 
// En caso de que el TextArea esté vacío, mostrará 
// un mensaje de error y no creará ningún párrafo.

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("crearParrafo").addEventListener("click", function() {
        let texto = document.getElementById('textoElegido').value;
        if(texto.trim() === '') {
            alert('Por favor, introduce algún texto.');
            return;
        }

        let color = document.getElementById('colorElegido').value;

        let nuevoParrafo = document.createElement('p');
        nuevoParrafo.textContent = texto;
        nuevoParrafo.style.backgroundColor = color;

        document.body.appendChild(nuevoParrafo);
    });
 });
 