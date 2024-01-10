window.addEventListener("load", iniciar, false);

function iniciar(){

    //Obtenemos el formualrio del html
    let formulario = document.getElementsByTagName("form")[0];

    //Generamos el primer elemento hijo del form
    let nombreLabel = document.createElement("label");
    nombreLabel.for = "nombre";
    nombreLabel = document.createTextNode("Nombre");
    //Generamos el primer hijo de formulario
    formulario.appendChild(nombreLabel);


    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.className = "nombre";
    nombre.placeholder = "Nombre del disco";
    nombre.maxlength="20";
    nombre.pattern="^[\s\S]{1,20}$";
    nombre.required = true;

     
    //Generamos el SEGUNDO elemento hijo del form
    let grupoLabel = document.createElement("label");
    grupoLabel.for = "grupo";
    grupoLabel = document.createTextNode("Grupo");

    //Generamos el segundo hijo de formulario
    formulario.appendChild(grupoLabel);


    let grupo = document.createElement("input");
    grupo.type = "text";
    grupo.className = "grupo";
    grupo.placeholder = "Nombre del grupo";
    grupo.maxlength="20";
    grupo.pattern="^[\s\S]{1,20}$";
    grupo.title = "El nombre del grupo tiene una longitud máxima de 20 caracteres";
    grupo.required = true;

    //Generamos el terce elemento hijo del form
    let annoLabel = document.createElement("label");
    annoLabel.for = "anno";
    annoLabel = document.createTextNode("Año");

    //Generamos el segundo hijo de formulario
    formulario.appendChild(annoLabel);


    let anno = document.createElement("input");
    anno.type = "text";
    anno.className = "anno";
    anno.placeholder = "Año de publicación del disco";
    anno.maxlength="4";
    anno.min = "0";
    anno.max = "2024"
    anno.pattern="^[\s\S]{1,20}$";
    anno.title = "El año de publicación tiene que contener 4 dígitos";
    anno.required = true;
     
    //Creamos el select de géneros

    let selector = document.createElement("select");
    selector.id = "tipo";
    selector.placeholder = "Seleccione un género";

    formulario.appendChild(selector);

    let option1 = document.createElement("option");
    option1.value = "pop";
    option1 = document.createTextNode("Pop");
    selector.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = "indie";
    option2 = document.createTextNode("Indie");
    selector.appendChild(option2);

    let option3 = document.createElement("option");
    option3.value = "flamenco";
    option3 = document.createTextNode("Flamenco");
    selector.appendChild(option3);

    let option4 = document.createElement("option");
    option4.value = "Rock";
    option4 = document.createTextNode("Rock");
    selector.appendChild(option4);

    let option5 = document.createElement("option");
    option5.value = "instrumental";
    option5 = document.createTextNode("Intrumental");
    selector.appendChild(option5);

    //Creamos el input de la caratula

    let caratula = document.createElement("input");
    caratula.type = "file";
    caratula.id = "caratula";
    caratula.placeholder = "Carátula";
    
    formulario.appendChild(caratula);

    //Creamos el input de la localización

    let localizacion = document.createElement("input");
    localizacion.type = "number";
    localizacion.id = "local";
    localizacion.placeholder = "Número de estantería";
    localizacion.pattern = "^(|[\d]+)$";
    formulario.appendChild(localizacion);

    //Creamos el select de prestamo

    let prestamo = document.createElement("select");
    prestamo.id = "prestamo";
    prestamo.placeholder = "Seleccioneestado del prestamo";

    formulario.appendChild(prestamo);

    let opcion1 = document.createElement("option");
    opcion1.value = "Prestado";
    option1 = document.createTextNode("Prestado");
    prestamo.appendChild(opcion1);

    let opcion2 = document.createElement("opion");
    opcion2.value = "No_Prestado";
    option2 = document.createTextNode("No Prestado");
    prestamo.appendChild(opcion2);

    let aviso = document.createElement("span");
    aviso.id = "aviso";
    formulario.appendChild(aviso);
    //Fin formulario

    // //Creamos la tabla de discos

    // let tabla = document.createElement("div");
    // tabla.id = "tdiscos";

    // //Creamos los botones de gestión

    // let boton1 = document.createElement("button");
    // boton1.id = "showTotal";
    // boton1 = document.createTextNode("Mostrar el número de discos");
    
    // let boton2 = document.createElement("button");
    // boton2.id = "showTabla";
    // boton2 = document.createTextNode("Mostrar todos los discos");
    
    // let boton3 = document.createElement("button");
    // boton3.id = "showInterval";
    // boton3 = document.createTextNode("Filtrar por año de publicación");
    
    // let boton4 = document.createElement("button");
    // boton4.id = "borrarDisco";
    // boton4 = document.createTextNode("Borrar un disco");
    
    // let boton5 = document.createElement("button");
    // boton5.id = "showDisco";
    // boton5 = document.createTextNode("Consultar un disco");

    // let show = document.createElement("span");
    // show.id = "show";
}