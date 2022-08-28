const icon =document.querySelector(".icons")
const temp =document.querySelector(".number")
const desc =document.querySelector(".p1")
const loc =document.querySelector(".p2")
const notification =document.querySelector(".notification")


const weather ={}
weather.temperature ={
    until: "celsius"
}

const kelvin =273;
const key ="95c6ecaa2b396ae5b0dda56ad423754a"

//check if browser support weather
if( 'geolocation' in navigator ){
    navigator.geolocation.getCurrentPosition(setPosition ,showError)
}else{
    notification.innerHTML="browser dose't support geo location";
    notification.style.display="block";
}

//set user position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude , longitude);
}

//show error
function showError(error){
    notification.innerHTML=`${error.message}`;
    notification.style.display="block";
}

function getWeather(city){
    let api = `https://https://api.openweathermap.org/data/2.5/weather?q={${city}}&appid={${key}}`
    fetch(api)
    .then(response=>console.log(response.json()))
}
getWeather("surkhet")
