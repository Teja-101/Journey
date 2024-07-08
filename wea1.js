function getWeather() {
    const apiKey = '3bb9015d213270b2d62da1c22f898898';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const tempDiv = document.getElementById('temp-div');
    const weatherIcon = document.getElementById('weather-icon');

    // Clear previous content
    tempDiv.innerHTML = '';
    weatherIcon.style.display = 'none';

    if (data.cod === '404') {
        tempDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const weatherHtml = `
            <p>${temperature}°C</p>
            <p>${description}</p>
        `;

        tempDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;
        weatherIcon.style.display = 'block';
    }
}
