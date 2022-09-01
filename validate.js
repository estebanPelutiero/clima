/* Maneja los errores de el evento load() en la ventana, con los posibles mensajes a la hora de no permitir
la unicacion por parte del usuario */

function positionNotOk(err) {

    console.warn(err.message);
    let msg;
    switch(err.code) {
        case err.PERMISSION_DENIED:
            msg = "Acceso a ubicación denegado."
            break;
        case err.POSITION_UNAVAILABLE:
            msg = "Su posición actual no esta disponible."
            break;
        case err.TIMEOUT:
            msg = "No se ha podido obtener su ubicación en el tiempo esperado."
            break;
        default:
            msg = "Error desconocido, por intente denuevo en unos instantes."
            break;
    }

    console.log(msg);
}

// si el Input.value sin espacios en blanco es igual a 0, devuelve false

function validate(inp) {
    if(inp.trim() == 0){
        return false;
    } else {
        return true;
    }
}

/* Uso de la libreria Toastify en funcion de validate(), para evento de "click" en el boton de "buscar" 
o evento "keyup" en el input de la ciudad */

const cityToast = () => {
    
    Toastify({
        text: "Ingrese una ciudad",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
        
}