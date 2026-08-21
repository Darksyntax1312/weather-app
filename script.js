let Card1 = document.querySelector(".card");
let container = document.querySelector(".container-1");
let button1 = document.querySelector(".btn-2");
let buttonDiv = document.querySelector(".btn-1");
let inputBox = document.querySelector(".input-box");

let location1 = document.createElement("div");
location1.style.display = "flex";
location1.style.justifyContent = "center";
location1.style.paddingTop = "20px";
location1.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
location1.style.fontWeight = "700";
location1.style.fontSize = "30px";

let temperature1 = document.createElement("div");
temperature1.style.display = "flex";
temperature1.style.justifyContent = "center";
temperature1.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
temperature1.style.fontWeight = "700";
temperature1.style.fontSize = "30px";

let condition1 = document.createElement("div");
condition1.style.display = "flex";
condition1.style.justifyContent = "center";
condition1.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
condition1.style.fontWeight = "700";
condition1.style.fontSize = "30px";

button1.addEventListener("click", () => {
    Card1.style.height = "400px"; 
    Card1.style.width = "500px";
    container.style.paddingTop = "100px";
    
    Card1.appendChild(location1);
    Card1.appendChild(temperature1);
    Card1.appendChild(condition1);
    newWeather();
});

async function newWeather() {
    try {
        let Weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=d9fd4fa817934314a8111446262008&q=${inputBox.value}`);
        let Data1 = await Weather.json();
        console.log(Data1);
        
      
        location1.innerText = "Location: " + Data1.location.name;
        temperature1.innerText = "Temperature: " + Data1.current.temp_c + "°C";
        condition1.innerText = "Condition: " + Data1.current.condition.text;
    } catch (error) {
        console.log(error);
    }
}
