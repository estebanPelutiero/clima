
const userInput = document.querySelector(".inputText");
const submitButton = document.querySelector(".btn");
const showData = document.querySelector(".showResult");

const littleCard1 = document.querySelector(".little-card1");
const littleCard2 = document.querySelector(".little-card2");
const littleCard3 = document.querySelector(".little-card3");

const littleArray = [littleCard1, littleCard2, littleCard3];
const littleCities = ["barcelona", "amsterdam", "sacramento"];

const apiKey = "021632e04bc43b4be00627223cbb782e";

window.addEventListener("load", function(){
    userInput.value = ""; 
    navigator.geolocation.getCurrentPosition(positionSuccess, positionNotOk);
});

function positionSuccess(pos) {

    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;

    const apiCallCurrentPos = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${apiKey}`;
    const apiCallDefaultCity1 = `https://api.openweathermap.org/data/2.5/weather?q=${littleCities[0]}&lang=es&units=metric&APPID=${apiKey}`;
    const apiCallDefaultCity2 = `https://api.openweathermap.org/data/2.5/weather?q=${littleCities[1]}&lang=es&units=metric&APPID=${apiKey}`;
    const apiCallDefaultCity3 = `https://api.openweathermap.org/data/2.5/weather?q=${littleCities[2]}&lang=es&units=metric&APPID=${apiKey}`;

    fetchAPIbigCard(apiCallCurrentPos);   
    fetchAPIlittleCard1(apiCallDefaultCity1);
    fetchAPIlittleCard2(apiCallDefaultCity2);
    fetchAPIlittleCard3(apiCallDefaultCity3);
}

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


userInput.addEventListener("input", () => {
    event.preventDefault()
});

// EVENTO QUE OCURRE AL APRETAR EL BOTON PARA BUSCAR LA CIUDAD

submitButton.addEventListener("click", () => {

    const cityInputBtn = userInput.value;

    const userApiCallClick = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputBtn}&lang=es&units=metric&APPID=${apiKey}`;

    fetchAPIbigCard(userApiCallClick);

});

// EVENTO PARA CAPTURAR TECLA "ENTER" EN EL INPUT

document.querySelector(".inputText").addEventListener("keyup", function (event){

    if(event.key == "Enter") {

        const cityInputEnter = userInput.value;
        userInput.value = "";

        const enterApiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputEnter}&lang=es&units=metric&APPID=${apiKey}`;

        fetchAPIbigCard(enterApiCall);
    }
    
});

