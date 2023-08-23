const apikey = "081a2c894d655835edfadcc851f1121c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherimg = document.querySelector("#weather-img");

function change(){
    var cityname = document.querySelector(".input");
    checkweather(cityname.value);
    document.querySelector(".city").innerHTML = cityname.value;
    cityname.value = "";
    // document.querySelector(".extra").style.display="block";
}

async function checkweather(city){
    

    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".extra").style.display="none";

    }
    else{

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '&nbsp;%';
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + '&nbsp;Km/h';


    if(data.weather[0].main == "Clouds"){
        weatherimg.src = "images/clouds.png";
        
    }
    else if(data.weather[0].main == "Clear"){
        weatherimg.src = "images/clear.png";
        
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherimg.src = "images/drizzle.png";
       
    }
    else if(data.weather[0].main == 'Mist'){
        weatherimg.src = "images/mist.png";
        
    }
    else if(data.weather[0].main == 'Rain'){
        weatherimg.src = "images/rain.png";
        
    }
    else if(data.weather[0].main == 'Snow'){
        weatherimg.src = "images/snow.png";
        
    }
    else if(data.weather[0].main == 'Haze'){
        weatherimg.src = "images/haze.png";
        
    }
    document.querySelector(".extra").style.display="block";
    document.querySelector(".error").style.display="none";
    }

}
