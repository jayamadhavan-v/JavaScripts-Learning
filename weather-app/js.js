// weather app

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "13f23a58d3df706a6a1cf0c3c38ca67a";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error);
        }
    }
    else {
        displayError("please enter a city");
    }
});

async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const response = await fetch(apiUrl);

    // console.log(response);

    if (!response.ok) {
        throw new Error("Could Not fetch the weather Data ")
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    // console.log(data);

    const { name: city,
        main: { temp, humidity },
        weather: [{ description, id }]} = data;

    card.textContent = "";
    card.style.display = "flex";
    // card.appendChild(createWeatherCard(city, temp, humidity, description, id));
    const cityDisplay = document.createElement("h1");
    cityDisplay.classList.add("cityDisplay");
    cityDisplay.textContent = city;
    card.appendChild(cityDisplay);

    const tempDisplay = document.createElement("p");
    tempDisplay.classList.add("tempDisplay");
    tempDisplay.textContent = `${((temp-273.15) * 9/5 + 32).toFixed(2)}°F`;
    card.appendChild(tempDisplay);

    const humidityDisplay = document.createElement("p");
    humidityDisplay.classList.add("humidityDisplay");
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    card.appendChild(humidityDisplay);

    const descDisplay = document.createElement("p");
    descDisplay.classList.add("descDisplay");
    descDisplay.textContent=description;
    card.appendChild(descDisplay);

    const weatherEmoji = document.createElement("p");
    weatherEmoji.classList.add("weatherEmoji");
    weatherEmoji.textContent = getWeatherEmoji(id);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
    if (weatherId >= 200 && weatherId < 300) {
        return "🌩️";
    } else if (weatherId >= 300 && weatherId < 400) {
        return "🌧️";
    } else if (weatherId >= 500 && weatherId < 600) {
        return "☔";
    } else if (weatherId >= 600 && weatherId < 700) {
        return "❄️";
    } else if (weatherId >= 700 && weatherId < 800) {
        return "🌫️";
    } else if (weatherId === 800) {
        return "☀️";
    } else if (weatherId > 800) {
        return "☁️";
    }
}
function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}