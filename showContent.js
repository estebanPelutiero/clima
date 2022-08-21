// MOSTRAR CONTENIDO CARTA GRANDE

const fetchAPIbigCard = (call) => {
    fetch(call)
        .then(Response => {
            return Response.json();
        })
        .then(data => {
            console.log(data);
            showData.innerHTML = `
            <div class="weather"><p>Clima en ${data.name}<p></div>
            <div class="flex">
                <h1>${data.main.temp} °C</h1>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            </div>
            <div class="details">
                <div class="description">condiciones:  ${data.weather[0].description}</div>
                <div class="humidity">Humedad:  ${data.main.humidity} %</div>
                <div class="wind">Velocidad del viento:  ${data.wind.speed} Km/h</div>
            </div>`;
        });
}

// MOSTRAR CONTENIDO CARTAS PEQUEÑAS

const fetchAPIlittleCard1 = (call) => {
    fetch(call)
        .then(Response => {
            return Response.json();
        })
        .then(data => {
            console.log(data);
            littleCard1.innerHTML = `
            <div class="little-name">${data.name}</div>
            <div class="little-temp">${parseFloat(data.main.temp).toFixed(2)} °C</div>
            <div class="little-flex_desc">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                <div class="little-description">${data.weather[0].description}</div>
            </div>`
        });
}


const fetchAPIlittleCard2 = (call) => {
    fetch(call)
        .then(Response => {
            return Response.json();
        })
        .then(data => {
            console.log(data);
            littleCard2.innerHTML = `
            <div class="little-name">${data.name}</div>
            <div class="little-temp">${parseFloat(data.main.temp).toFixed(2)} °C</div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
        });
}

const fetchAPIlittleCard3 = (call) => {
    fetch(call)
        .then(Response => {
            return Response.json();
        })
        .then(data => {
            console.log(data);
            littleCard3.innerHTML = `
            <div class="little-name">${data.name}</div>
            <div class="little-temp">${parseFloat(data.main.temp).toFixed(2)} °C</div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
        });
}

