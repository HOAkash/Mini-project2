function getWeather(){
    var city = document.getElementById("input").value;
    var nameVal1 = document.getElementById("name");
    var temp = document.getElementById("temp");
    var desc = document.getElementById("desc");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cb7f1c0dd1a0536c059f2315435439e8`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        nameVal1.innerText = data.name;
        temp.innerText = data.main.temp + "°C";
        desc.innerText = data.weather[0].main;
    })
    .catch(function(){
        alert("City not found");
    });
}

document.getElementById('button').addEventListener('click', getWeather)