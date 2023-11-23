document.getElementById("enviar").addEventListener("click", validarFormulario);

function validarFormulario() {
    // Obtén los valores de los campos del formulario
    var fecha = document.getElementById('fecha').value;
    var empleado = document.getElementById('empleado').value;
    var destinatario = document.getElementById('destinatario').value;
    var peso = document.getElementById('peso').value;
    var cuenta = document.getElementById('cuenta').value;
  
    // Valida la fecha
    var regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regexFecha.test(fecha)) {
       alert('Fecha no válida. Por favor, ingresa la fecha en el formato dd/mm/aaaa.');
       return false;
    }
  
    // Valida el empleado
    var regexEmpleado = /^[A-Z]{2}\W\d{4}$/;
    if (!regexEmpleado.test(empleado)) {
       alert('Empleado no válido. Por favor, ingresa el empleado en el formato WW$1234.');
       return false;
    }
  
    // Valida el destinatario
    var regexDestinatario = /^[A-Z]{2,3}_[A-Z][a-z]*:[0-9]{4}$/;
    if (!regexDestinatario.test(destinatario)) {
       alert('Destinatario no válido. Por favor, ingresa el destinatario en el formato NM_Madrid:1234.');
       return false;
    }
  
    // Valida el peso
    if (peso < 100 || peso > 5000) {
       alert('Peso no válido. Por favor, ingresa un peso entre 100 y 5000 gramos.');
       return false;
    }
  
    // Valida el número de cuenta
    var regexCuenta = /^[A-Z]{4}\d{20}$/;
    if (!regexCuenta.test(cuenta)) {
       alert('Número de cuenta no válido. Por favor, ingresa el número de cuenta en el formato IBAN12345678901234567890.');
       return false;
    }
  
    // Si todo está bien, devuelve true para permitir que el formulario se envíe
    return true;
  }
  