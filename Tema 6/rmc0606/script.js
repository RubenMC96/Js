window.addEventListener("load", iniciar, false);

function iniciar() {
  let parrafos = document.querySelectorAll("p");
  let enlaces = document.querySelectorAll("a");
  let resultados = document.getElementsByTagName("div")[0];

  let totalParrafos = parrafos.length;
  let span1 = document.createElement("span");
  let texto1 = document.createTextNode(
    `El numero total de parrafos es: ${totalParrafos}`
  );
  span1.appendChild(texto1);
  resultados.appendChild(span1);
  let salto1 = document.createElement("br");
  resultados.appendChild(salto1);

  //let parrafo2 = parrafos[1];
  let span2 = document.createElement("span");
  let texto2 = document.createTextNode(
    `El texto del segundo parrafo es: ${parrafos[1].textContent}`
  );
  span2.appendChild(texto2);
  resultados.appendChild(span2);
  let salto2 = document.createElement("br");
  resultados.appendChild(salto2);

  let totalEnlaces = enlaces.length;
  let span3 = document.createElement("span");
  let texto3 = document.createTextNode(
    `El numero total de enlaces es: ${totalEnlaces}`
  );
  span3.appendChild(texto3);
  resultados.appendChild(span3);
  let salto3 = document.createElement("br");
  resultados.appendChild(salto3);

  let span4 = document.createElement("span");
  let direcEnlace1 = enlaces[0].href;
  let texto4 = document.createTextNode(
    `La direccion del enlace 1 es: ${direcEnlace1}`
  );
  span4.appendChild(texto4);
  resultados.appendChild(span4);
  let salto4 = document.createElement("br");
  resultados.appendChild(salto4);

  let span5 = document.createElement("span");
  let direcEnlaceN = enlaces[enlaces.length - 2].href;
  let texto5 = document.createTextNode(
    `La direccion del penultimo enlace es: ${direcEnlaceN}`
  );
  span5.appendChild(texto5);
  resultados.appendChild(span5);
  let salto5 = document.createElement("br");
  resultados.appendChild(salto5);

  let span6 = document.createElement("span");
  let numWiki = 0;
  let regex = /\/wiki\/Municipio/;
  for (let i = 0; i <= enlaces.length - 1; i++) {
    if (regex.test(enlaces[i].href)) {
      numWiki++;
    }
  }
  let texto6 = document.createTextNode(
    `Hay ${numWiki} enlaces que apuntan a /wiki/Municipio`
  );
  span6.appendChild(texto6);
  resultados.appendChild(span6);
  let salto6 = document.createElement("br");
  resultados.appendChild(salto6);

  let span7 = document.createElement("span");
  let primeParrafo = parrafos[0];
  let enlacesParrafo1 = primeParrafo.querySelectorAll("a");
  let numEnlaces = enlacesParrafo1.length;
  let texto7 = document.createTextNode(`El primer parrafo tiene ${numEnlaces}`);
  span7.appendChild(texto7);
  resultados.appendChild(span7);
  let salto7 = document.createElement("br");
  resultados.appendChild(salto7);

  for (let i = 0; i <= parrafos.length - 1; i++) {
    console.log(`El texto del parrafo ${i + 1} es: ${parrafos[i].textContent}`);
  }

  let rutaUsuario = document.createElement("input");
  rutaUsuario.type = "file";
  rutaUsuario.id = "ruta";
  resultados.appendChild(rutaUsuario);

  let boton = document.createElement("input");
  boton.type = "submit";
  boton.id = "enviar";
  boton.name = "enviar";
  resultados.appendChild(boton);
  document
    .getElementById("enviar")
    .addEventListener("click", crearIframe, false);
}

function crearIframe() {
  let ruta = document.getElementById("ruta").files[0].name;

  let resultados = document.getElementById("resultados");

  let iframe = document.createElement("iframe");
  iframe.setAttribute("src", ruta);
  iframe.setAttribute("width", "500");
  iframe.setAttribute("height", "500");

  resultados.appendChild(iframe);
}
