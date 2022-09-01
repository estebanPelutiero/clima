const timeOutput = document.querySelector(".time-card");
const dateOutput = document.querySelector(".date-card");

/* Uso de la libreria Luxon para mostrar reloj con hora:minuto:segundo actualizado en tiempo real de la ubicacion
actual del usuario */

const showTime = () => {
    const timeNow = luxon.DateTime.now();
    const dateNow = luxon.DateTime.now().toLocaleString();

    timeOutput.innerHTML = `<p class="time-p">Horario: <span class="date-time-css">${timeNow.toFormat("HH:mm:ss")}</span></p>`; 
    
    dateOutput.innerHTML = `<p>Fecha: <span class="date-time-css">${dateNow}</span></p>`
}

const updateTime = () => {
    showTime();
}

/* intervalo que ejecuta la funcion de renovar el reloj cada 1 segundo */

setInterval( () => {
    updateTime();
}, 1000);
