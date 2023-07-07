/* Al estar listo el documento */
$("document").ready(function () {
    /* Caputar evento Submit */
    $("#formCreateAccount").submit(function () {
        return validarDatos();
    });
});

/* Función Validar Datos */
function validarDatos() {
    /* Preguntar si se envia formulario */
    let pregunta = confirm("¿Seguro que deseas enviar?");
    if (pregunta) { // Caso presiona Aceptar
        
        /* Obtener campos */
        let inputName = $("#txtNombre")[0].value;
        let inputApellidos = $("#txtApellidos")[0].value;
        let inputDni = $("#intDni")[0].value;
        let inputEmail = $("#txtEmail")[0].value;
        let inputUsuario = $("#txtUsuario")[0].value;
        let inputClave = $("#txtClave")[0].value;
        let inputCelular = $("#intCelular")[0].value;
        let inputAceptar = $("#bolAcepta")[0].value;
        
        /* Validar el nombre */
        if (inputName.length > 50 || inputName.length < 2) {
            alert("Nombre inválido ...");
            return false;
        }
        /* Validar los apellidos */
        if (inputApellidos.length > 70 || inputApellidos.length < 2) {
            alert("Apellidos inválido ...");
            return false;
        }
        // Validar el DNI
        if (inputDni.length != 8 || isNaN(inputDni)) {
            alert('El número de DNI debe tener al menos 8 números.');
            return false;
        }
        /* Validar el correo electrónico */
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail) == false) {
            alert("Correo electrónico inválido ...");
            return false;
        }
        /* Validar el usuario */
        if (inputUsuario.length < 4 || inputUsuario.length > 16 || inputUsuario.length == null) {
            alert("El usuario es invalido.");
            return false;
        }
        /* Validar la contraseña */
        if (inputClave.length < 4 || inputClave.length > 16 || inputClave.length == null) {
            alert("El Clave es inválida.");
            return false;
        }
        // Validar el Celular
        if (inputCelular.length != 9 || isNaN(inputCelular)) {
            alert('El número de Celular debe tener al menos 9 números.');
            return false;
        }
        //Validar el checkbox Acepta
        if (!inputAceptar.checked) {
            alert('Debe aceptar los términos para crear cuenta.');
            return false;
        }
        /* Mandar confirmación de envio */
        return true;

    } else { // Caso presiona Cancelar
        return false;
    }
}