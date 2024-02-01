window.addEventListener("load", inicio, true);

let clientes = [];
let tabla = document.getElementById("tablaClientes");

function inicio() {
  document.getElementById("tablaClientes");

  document.getElementById("enviar").addEventListener("click", mostrar, true);
}

function mostrar() {
  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("GET", "clientes.json", true);
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
      let json = this.response;
      clientes = [...json];

      ejecuta();
    }
  });
  xhr.send();
}

function ejecuta() {
  let opcion = document.getElementById("opcion").value;

  switch (opcion) {
    case "1":
      tabla.innerHTML = `<table> <tr><td> Nombre</td><td> Localidad </td> <td> Cuota</td> <tr/>`;
      for (let i = 0; i < clientes.length; i++) {
        showLista(i);
      }
      document.getElementById("tablaClientes").innerHTML += `</table>`;

      break;

    case "2":
      tabla.innerHTML = `<table> <tr><td> Nombre</td><td>Cuota</td> <tr/>`; //Forma de generar elementos en HTML
      filtroLocalidad();
      document.getElementById("tablaClientes").innerHTML += `</table>`;
      break;
    case "3":
      tabla.innerHTML = `<table> <tr><td> Nombre</td><td> Localidad </td><td>Cuota</td><tr/>`;
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
  let clientesCuota = clientes.filter((cliente) => cliente.cuota > cuotaMinima); //Filtrar
  clientesCuota.forEach((cliente) => {
    document.getElementById(
      "tablaClientes"
    ).innerHTML += `<tr><td> ${cliente.nombre} </td><td> ${cliente.localidad} </td><td> ${cliente.cuota} </td></tr>`;
  });
}
