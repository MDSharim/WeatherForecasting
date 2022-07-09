let weather = {
    apikey:"b89f003a5cc7bd712989ffe27767f145",
    fetchWeather: function(city){
        fetch(  
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city +"&units=metric&appid="
        + this.apikey
        ).then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
},
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/10d@2x.png"+ icon ;
        document.querySelector(".description").innerText = discription;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button")
.addEventListener("click",function () {
    weather.search();
    
})