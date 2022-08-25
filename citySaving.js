userInput.addEventListener("change", (event) => {
    event.preventDefault();

    submitButton.addEventListener("click", () => {

        littleCities.unshift(userInput.value);
        localStorage.setItem("ciudades", JSON.stringify(littleCities));
        console.log(littleCities);
        
        fetchAPIlittleCard1(`https://api.openweathermap.org/data/2.5/weather?q=${JSON.parse(localStorage.getItem("ciudades"))[0]}&lang=es&units=metric&APPID=${apiKey}`);
    });
});

