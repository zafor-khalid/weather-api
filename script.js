function temperature(){
    const city = document.getElementById('enterCity').value;
    const api = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=03f1f03ec3238376e9cf28aa9280770d&units=metric';
    fetch(api)
        .then(res => res.json())
        .then(data => {
            document.getElementById('displayCity').innerText = city;
            document.getElementById('displayTemp').innerText = data.main.temp;
            const icon = data.weather[0].icon;
            document.getElementById('icon').src = 'https://openweathermap.org/img/wn/' + `${icon}` + '.png';
            document.getElementById('description').innerText = data.weather[0].description;
            console.log(data);
        })
}