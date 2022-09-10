/* Nodos del input, el boton buscar y el div para mostrar la carta grande */

const userInput = document.querySelector(".inputText");
const submitButton = document.querySelector(".btn");
const showData = document.querySelector(".showResult");

/* Nodos de las cards a la derecha de la pagina */

const littleCard1 = document.querySelector(".little-card1");
const littleCard2 = document.querySelector(".little-card2");
const littleCard3 = document.querySelector(".little-card3");

/* Guardo los nodos de las cards en un array */

const littleArray = [littleCard1, littleCard2, littleCard3];

/* Ciudades que se usan en la llamada a la API de las cartas pequeñas */

const littleCities = ["Buenos aires", "amsterdam", "sacramento"];

/* En el siguiente array se guardan las llamadas a la API, con el nombre de las 3 ciudades guardadas en littleCities. */

let apiCallDefaultCity1;
let apiCallDefaultCity2;
let apiCallDefaultCity3;
const apiCallArray = [apiCallDefaultCity1, apiCallDefaultCity2, apiCallDefaultCity3];

/* Key para poder utilizar la API */

const apiKey = "021632e04bc43b4be00627223cbb782e";

/* Evento que se ejecuta al cargar la pagina, usa la API de geolocalizacion de JS, positionSuccess() es lo que se
ejecuta si el usuario acepta mostrar su ubicacion, positionNotOk() cuando deniega el permiso. */

window.addEventListener("load", function(){
    userInput.value = ""; 
    navigator.geolocation.getCurrentPosition(positionSuccess, positionNotOk);
});

/* Cuando el usuario acepta la ubicacion se ejecuta esta funcion. Esta toma la longitud y la latitud de la ubicacion
actual y guarda en una variable la llamada a la api con estos datos. */

function positionSuccess(pos) {

    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;

    /* Esta llamada a la API rellena la carta grande, ubicada a la izquierda de la pagina. */

    const apiCallCurrentPos = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${apiKey}`;
    fetchAPIbigCard(apiCallCurrentPos);  

    /* --------------------------------------------------------------------------------------------------- */

    /* Bucle para usar el mismo link de la llamada a la API, pero con el nombre de 3 ciudades distintas.
    Esta data se usa para rellenar las 3 cartas pequeñas a la derecha de la pagina. */

    for (let i = 0; i < apiCallArray.length; i++) {
        apiCallArray[i] = `https://api.openweathermap.org/data/2.5/weather?q=${littleCities[i]}&lang=es&units=metric&APPID=${apiKey}`; 
    }

    fetchAPIlittleCards();
}


// EVENTO QUE OCURRE AL APRETAR EL BOTON PARA BUSCAR LA CIUDAD

submitButton.addEventListener("click", () => {

    /* Condicional para evaluar el contenido del input al momento que ocurre el evento, con la funcion validate()
    creada por mi */

    if(validate(userInput.value) == true){

        const cityInputBtn = userInput.value;
        const userApiCallClick = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputBtn}&lang=es&units=metric&APPID=${apiKey}`;
        fetchAPIbigCard(userApiCallClick);

    } else {

        /* Guarde el toast de la libreria Toastify en una funcion pora no repetir el codigo */

        cityToast();
    }
});

// EVENTO PARA CAPTURAR TECLA "ENTER" EN EL INPUT

document.querySelector(".inputText").addEventListener("keyup", function (event){

    if(event.key == "Enter") {

        if(validate(userInput.value) == true) {

            const cityInputEnter = userInput.value;
            userInput.value = "";
            const enterApiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputEnter}&lang=es&units=metric&APPID=${apiKey}`;
            fetchAPIbigCard(enterApiCall);
            
        } else {
            cityToast();
        }
    } 
});

