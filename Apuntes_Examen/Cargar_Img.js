//cargar imagenes inicialmente
$(window).on('load', cargarImagenes);

let imagenes = [];
let correos = [];


function cargarImagenes() {
    $.ajax({
        url: "https://randomuser.me/api/?results=6&format=XML", //data.xml
        type: "GET",
        dataType: "xml",
        success: function (data) {
            cargarXML(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
}


function cargarXML(xml) {
    let p = $(xml).find("results");
    for (let i = 0; i < 6; i++) { //6 es el numero máximo de objetos a leer
        correos.push($(p[i]).find("email").text());
        imagenes.push($(p[i]).find("picture").find("large").text());
    }
    console.log(correos);
    console.log(imagenes);
}




//conexión fetch con jquery
//cargar imagenes inicialmente
$(window).on('load', cargarImagenes);

let imagenes = [];
let correos = [];


function cargarImagenes() {
    $.ajax({
        url: "https://randomuser.me/api/?results=6&format=XML", //data.xml
        type: "GET",
        dataType: "xml",
        success: function (data) {
            cargarXML(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
}


function cargarXML(xml) {
    let p = $(xml).find("results");
    for (let i = 0; i < 6; i++) { //6 es el numero máximo de objetos a leer
        correos.push($(p[i]).find("email").text());
        imagenes.push($(p[i]).find("picture").find("large").text());
    }
    console.log(correos);
    console.log(imagenes);
}


/*------------------------------------------------------------------------- */
async function inicio() {
    try {
      let response = await fetch("https://randomuser.me/api/?results=6");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let json = await response.json();
      cargarJSON(json); // Asume que tienes una función cargarJSON que maneja el JSON
    } catch (error) {
      alert("Se ha producido un error: " + error.message);
    }
  }
  
  function cargarJSON(json) {
    let personas = json.results;
    let fotos = [];
    let correos = [];
  
    for(let i =  0; i < personas.length; i++){
      fotos.push(personas[i].picture.medium);
      correos.push(personas[i].email);
    }
    let tarjetas = document.getElementsByClassName("frontFace");
    let emails = document.getElementsByClassName("textEmail");  
  
    for(let i =  0; i <= fotos.length -1; i++){
      tarjetas[i].src = fotos[i];
      tarjetas[i].title = correos[i];
    }
  }


  