
const userInput = document.querySelector(".inputText");

const submitButton = document.querySelector(".btn");
const showData = document.querySelector(".showResult");

const littleCard1 = document.querySelector(".little-card1");
const littleCard2 = document.querySelector(".little-card2");
const littleCard3 = document.querySelector(".little-card3");

const littleArray = [littleCard1, littleCard2, littleCard3];
const littleCities = ["Buenos aires", "amsterdam", "sacramento"];

const apiKey = "021632e04bc43b4be00627223cbb782e";

window.addEventListener("load", function(){
    userInput.value = ""; 
    navigator.geolocation.getCurrentPosition(positionSuccess, positionNotOk);
});

let apiCallDefaultCity1;
let apiCallDefaultCity2;
let apiCallDefaultCity3;
const apiCallArray = [apiCallDefaultCity1, apiCallDefaultCity2, apiCallDefaultCity3];

function positionSuccess(pos) {

    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;

    const apiCallCurrentPos = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${apiKey}`;
    fetchAPIbigCard(apiCallCurrentPos);  

    /*Guarda las llamadas a la api con el nombre de 3 ciudades distintas */

    for (let i = 0; i < apiCallArray.length; i++) {
        apiCallArray[i] = `https://api.openweathermap.org/data/2.5/weather?q=${littleCities[i]}&lang=es&units=metric&APPID=${apiKey}`; 
    }

    fetchAPIlittleCards();
}

// EVENTO QUE OCURRE AL APRETAR EL BOTON PARA BUSCAR LA CIUDAD

submitButton.addEventListener("click", () => {

    if(validate(userInput.value) == true){

        const cityInputBtn = userInput.value;
        const userApiCallClick = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputBtn}&lang=es&units=metric&APPID=${apiKey}`;
        fetchAPIbigCard(userApiCallClick);

    } else {
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

