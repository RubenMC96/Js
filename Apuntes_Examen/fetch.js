async function mostrar(){

    try{
      let response = await fetch("data.json");
      let json = await response.json();
      datos = [...json];
      ejecuta();
    }catch(error){
      alert("Ha ocurrido un error" + responseStatus());
    }
  }

  async function inicio() {
    try {
      let response = await fetch("Discos.xml");
      let xml = await response.text();
      let parser = new DOMParser();
      cargarXML(parser.parseFromString(xml, "application/xml"));
    } catch (error) {
      alert("Se ha producido un error");
    }
  }
  
  function cargarXML(xml) {
    let documento = xml;
}

async function mostrar() {
    try {
      let response = await fetch("https://api.example.com/clientes"); // URL de la API que devuelve los datos de los clientes en formato JSON
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let json = await response.json();
      clientes = [...json]; // Suponiendo que 'json' es un array de objetos de clientes
      ejecuta(); // Llama a la función 'ejecuta()' después de obtener los datos
    } catch (error) {
      alert("Ha ocurrido un error: " + error.message);
    }
  }
  