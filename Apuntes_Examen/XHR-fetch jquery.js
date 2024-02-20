JSON
function mostrar() {
    $.ajax({
      url: "clientes.json",
      dataType: "json",
      success: function(json) {
        clientes = [...json];
        ejecuta();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Ha ocurrido un error");
      }
    });
  }

  function mostrar() {
    $.ajax({
      url: "/api/clientes", // URL de la API que devuelve los datos de los clientes
      dataType: "json",
      success: function(data) {
        clientes = [...data]; // Suponiendo que 'data' es un array de objetos de clientes
        ejecuta(); // Llama a la función 'ejecuta()' después de obtener los datos
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Ha ocurrido un error al obtener los clientes");
      }
    });
  }
  

  XML
  function inicio() {
    $.ajax({
      url: "Discos.xml",
      dataType: "xml",
      success: function(xmlDoc) {
        cargarXML(xmlDoc);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Ha ocurrido un error" + responseStatus());
      }
    });
  }

  function inicio() {
    $.ajax({
      url: "Discos.xml",
      dataType: "xml",
      success: function(xmlString) {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(xmlString, "application/xml");
        cargarXML(xmlDoc);
      },
      error: function() {
        alert("Se ha producido un error");
      }
    });
  }
  
