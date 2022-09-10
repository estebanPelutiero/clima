// MOSTRAR CONTENIDO CARTA GRANDE

const fetchAPIbigCard = async (call) => {

    const response = await fetch(call);
    const data = await response.json();

    showData.innerHTML = `
        <div class="weather"><p>Clima en ${data.name}<p></div>
        <div class="flex">
            <h1>${data.main.temp} °C</h1>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="icon">
        </div>
        <div class="details">
            <div class="description">condiciones:  ${data.weather[0].description}</div>
            <div class="humidity">Humedad:  ${data.main.humidity} %</div>
            <div class="wind">Velocidad del viento:  ${data.wind.speed} Km/h</div>
        </div>`;
}

// MOSTRAR CONTENIDO CARTAS PEQUEÑAS

/* Con el bucle logre rellenar las 3 cartas pequeñas con una misma funcion, recorriendo 2 arrays en las iteraciones. 
Recorro el array que contiene los nodos de las 3 cartas pequeñas, rellenando cada una de ellas con los datos que retorna 
las llamadas a la API que previamente se guardaron en apiCallArray. */

const fetchAPIlittleCards = async () => {

    for (let i = 0; i < littleArray.length; i++) {

        const response = await fetch(apiCallArray[i]);
        const data = await response.json();

        littleArray[i].innerHTML = `
        <div class="little-name">${data.name}</div>
        <div class="little-temp">${parseFloat(data.main.temp).toFixed(2)} °C</div>
        <div class="little-flex_desc">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            <div class="little-description">${data.weather[0].description}</div>
        </div>`;
        
    }
}  


