window.addEventListener("load", iniciar, false);
//Este script genera ekl formualario, pero no lo gestiona

function iniciar(){

    //Obtenemos el formualrio del html
    let formulario = document.getElementsByTagName("form")[0];

    //Generamos el primer elemento hijo del form
    let nombreLabel = document.createElement("label");
    nombreLabel.for = "nombre";
    nombreLabel = document.createTextNode("Nombre");
    //Generamos el primer hijo de formulario
    formulario.appendChild(nombreLabel);

    //Generamos el input para nombre
    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.id = "nombre";
    nombre.className = "nombre";
    nombre.placeholder = "Nombre del disco";
    nombre.maxlength="20";
    nombre.pattern="^[\s\S]{1,20}$";//Esta regExt es una clase de carácter que coincide con cualquier carácter, incluidos los espacios en blanco y los que no son espacios en blanco. entre 1 y 20 carateres
    formulario.appendChild(nombre);
    
    let nombSalto1 = document.createElement("br");
    let nombSalto2 = document.createElement("br");

    formulario.appendChild(nombSalto1);
    formulario.appendChild(nombSalto2);

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
    //title muestra un texto con el hover del raton
    grupo.title = "El nombre del grupo tiene una longitud máxima de 20 caracteres";
    grupo.required = true;
    formulario.appendChild(grupo);

    let grupoSalto1 = document.createElement("br");
    let grupoSalto2 = document.createElement("br");

    formulario.appendChild(grupoSalto1);
    formulario.appendChild(grupoSalto2);


    //Generamos el terce elemento hijo del form
    let annoLabel = document.createElement("label");
    annoLabel.for = "anno";
    annoLabel = document.createTextNode("Año");

    //Generamos el segundo hijo de formulario
    formulario.appendChild(annoLabel);

    
    let anno = document.createElement("input");
    anno.type = "number";
    anno.className = "anno";
    anno.placeholder = "Año de publicación del disco";
    anno.min = "0";
    anno.max = new Date().getFullYear();
    anno.title = "El año de publicación tiene que contener 4 dígitos";
    anno.required = true;
    
    formulario.appendChild(anno);

    let annoSalto1 = document.createElement("br");
    let annoSalto2 = document.createElement("br");

    formulario.appendChild(annoSalto1);
    formulario.appendChild(annoSalto2);
    
    //Creamos el select de géneros

    let selectLabel = document.createElement("label");
    selectLabel.for = "tipo";
    selectLabel = document.createTextNode("Seleccione un género");
    formulario.appendChild(selectLabel);

    let selector = document.createElement("select");
    selector.id = "tipo";
    selector.placeholder = "Seleccione un género";

    formulario.appendChild(selector);

    let option1 = document.createElement("option");
    option1.value = "pop";
    option1.appendChild(document.createTextNode("Pop"));
    selector.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = "indie";
    option2.appendChild(document.createTextNode("Indie"));
    selector.appendChild(option2);

    let option3 = document.createElement("option");
    option3.value = "flamenco";
    option3.appendChild(document.createTextNode("Flamenco"));
    selector.appendChild(option3);

    let option4 = document.createElement("option");
    option4.value = "Rock";
    option4.appendChild(document.createTextNode("Rock"));
    selector.appendChild(option4);

    let option5 = document.createElement("option");
    option5.value = "instrumental";
    option5.appendChild(document.createTextNode("Intrumental"));
    selector.appendChild(option5);


    let selectSalto1 = document.createElement("br");
    let selectSalto2 = document.createElement("br");

    formulario.appendChild(selectSalto1);
    formulario.appendChild(selectSalto2);


    //Creamos el input de la caratula

    let caratulaLabel = document.createElement("label");
    caratulaLabel.for = "caratula";
    caratulaLabel = document.createTextNode("Caratula");
    formulario.appendChild(caratulaLabel);

    let caratula = document.createElement("input");
    caratula.type = "file";
    caratula.id = "caratula";
    caratula.placeholder = "Carátula";
    
    formulario.appendChild(caratula);

    let caratulaSalto1 = document.createElement("br");
    let caratulaSalto2 = document.createElement("br");

    formulario.appendChild(caratulaSalto1);
    formulario.appendChild(caratulaSalto2);

    //Creamos el input de la localización

    let localizacionLabel = document.createElement("label");
    localizacionLabel.for = "local";
    localizacionLabel = document.createTextNode("Localizacion");
    //Generamos el primer hijo de formulario
    formulario.appendChild(localizacionLabel);

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

    
}