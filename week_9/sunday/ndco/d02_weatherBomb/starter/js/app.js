$(function() {
    
    function getWeatherData (city) {
        const result = $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            data: {
                q: city,
                APPID: 'b81ec1a10254586d1f58f90f8aeda6dd',
                units:'metric',
            },
            dataType: 'json',
            method: 'GET'
        })
        console.log(result);
        return result;
    };

    function transformWeatherData(weatherData) {
        // const data = JSON.stringify(weatherData);
        // console.log(data);
        
        //GET THE DATA
        console.log(weatherData);
        const cityName = weatherData.name;
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const lat = weatherData.coord.lat;
        const long = weatherData.coord.lon;
    
        //TRANSFORM THE DATA
        return {
            cityName,
            temperature,
            description,
            lat,
            long
        }
    };

    function renderWeatherData(updatedWeatherData) {
        //LOAD THE DATA
        console.log(updatedWeatherData);
        const { cityName, temperature, description, lat, long } = updatedWeatherData;
        const template = `
            <h1>${cityName}</h1>
            <h2>${temperature}</h2>
            <p>${description}</p>
            <span>LATITUDE: ${lat} || LONGITUDE: ${long} </span>
        `
        $('#results').append(template);

    };

    getWeatherData('seoul')
        .then(transformWeatherData)
        .then(renderWeatherData)
});