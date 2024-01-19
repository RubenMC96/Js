
window.addEventListener("load", inicio, true);

function inicio() {
  document.getElementById("tablaClientes");

  document.getElementById("enviar").addEventListener("click", cargarLista, true);
}

function cargarLista(){
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function(){
    if(this.readyState == 4 && this.status == 200){
      cargarCliente(this);
    }
  } ,false)
  xhr.open("GET", "clientes.xml", true);
  xhr.send();
}




function cargarCliente(xml) {
  let opcion = document.getElementById("opcion").value;
  let docXML = xml.responseXML;
  let clientes = docXML.getElementsByTagName("cliente");

  switch (opcion) {
    case "1":
      document.getElementById(
        "tablaClientes"
      ).innerHTML = `<table> <tr><td> Nombre</td><td> Localidad </td> <td> Cuota</td> <tr/>`;
      for (let i = 0; i < clientes.length; i++) {
        showLista(i);
      }
      document.getElementById("tablaClientes").innerHTML += `</table>`;

      break;

    case "2":
      document.getElementById(
        "tablaClientes"
      ).innerHTML = `<table> <tr><td> Nombre</td><td>Cuota</td> <tr/>`;//Forma de generar elementos en HTML
      filtroLocalidad();
      document.getElementById("tablaClientes").innerHTML += `</table>`;
      break;
    case "3":
      document.getElementById(
        "tablaClientes"
      ).innerHTML = `<table> <tr><td> Nombre</td><td> Localidad </td><td>Cuota</td><tr/>`;
      filtroCuota();
      document.getElementById("tablaClientes").innerHTML += `</table>`;
      break;
    default:
      alert("Opcion no válida");
      break;
  }
}

function showLista(i) {
  document.getElementById(
    "tablaClientes"
  ).innerHTML += `<tr><td> ${clientes[i].nombre}</td><td> ${clientes[i].localidad}</td><td> ${clientes[i].cuota}</td></tr>`;
}

function filtroLocalidad() {
  let localidad = prompt("Introduce la localidad");
  let clientesLocalidad = clientes.filter(
    (cliente) => cliente.localidad === localidad
  );
  clientesLocalidad.forEach((cliente) => {
    document.getElementById(
      "tablaClientes"
    ).innerHTML += `<tr><td> ${cliente.nombre} </td><td> ${cliente.cuota} </td></tr>`;
  });
}

function filtroCuota() {
  let cuotaMinima = Number(prompt("Introduce la cuota mínima"));
  let clientesCuota = clientes.filter((cliente) => cliente.cuota > cuotaMinima);//Filtrar
  clientesCuota.forEach((cliente) => {
    document.getElementById(
      "tablaClientes"
    ).innerHTML += `<tr><td> ${cliente.nombre} </td><td> ${cliente.localidad} </td><td> ${cliente.cuota} </td></tr>`;
  });
}
