function mostrar() {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "data.json", true);
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState == 4 && this.status == 200) {
        let json = this.response;
        datosUsar = [...json];
  
        ejecuta();
      }
    });
    xhr.send();
  }

  function inicio() {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "xml";
    xhr.addEventListener(
      "readystatechange",
      function () {
        if (this.readyState == 4 && this.status == 200) {
          cargarXML(this);
        }
      },
      false
    );
    xhr.open("GET", "data.xml", true);
    xhr.send();
  }