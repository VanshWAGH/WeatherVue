const button = document.getElementById("search-button"); // Corrected the getElementById function
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(city) { // Changed the parameter name from "cityName" to "city"
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=4043e20019fa4d44a7b172757232910&q=${city}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
});

// http://api.weatherapi.com/v1/current.json?key=4043e20019fa4d44a7b172757232910&q=London&aqi=yes
