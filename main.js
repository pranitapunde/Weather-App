let form = document.querySelector("form");
let input = document.querySelector("input");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h4 = document.querySelector("h4");
let image = document.querySelector("img");
let air = document.querySelector("#air");
let percent = document.querySelector("#percent");
let uv = document.querySelector('.uv');
let windire = document.querySelector('.wind-dir');
let h6 = document.querySelector('h6')

// console.log (h6)

const getWeather = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=40580c9300ca4095801184405232609&q=${input.value}&days=1&aqi=yes&alerts=nohaha`);
        // console.log(response); 
        const data = await response.json();
        h1.innerText = `${data.current.temp_c}°c`;
        h2.innerText = data.location.name;
        h4.innerText = data.current.condition.text;
        image.setAttribute("src", data.current.condition.icon);
        air.innerText = `${data.current.vis_km}Km/per hour`;
        percent.innerText = `${data.current.humidity}%`;
        uv.innerText = data.current.uv;
        windire.innerText = data.current.wind_dir;
        h6.innerText = data.location.localtime;

        console.log(data);
    } catch (error) {
        window.alert("Enter valid city Name")
    }
    form.reset();

    // weekly  forcaste

    const next15DaysData = async () => {
        const dayData = document.querySelector(".day-data");
        const cardDay = document.querySelector(".card-day");


        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json? 
        key=40580c9300ca4095801184405232609&q=India&days=10&aqi=no&alerts=no`);

        const data2 = await response.json();
        console.log(data2, "print")

        const forecastDayArray = data2.forecast.forecastDay;
        console.log(forecastDayArray)

        await forecastDayArray.forEach((foreCast) => {

            const dayCards = ducument.createElement("div");
            day1container.className = "card";
            day1container.innerText = `<div id="sp1">

            <img class="img2" src="${foreCast.day.condition.icon}" alt="">
    
            <h2 class="temp">${foreCast.day.avgtemp_c}°<h4/>
            <h4 class="date">${foreCast.date}<h4/>
        
            </div>

            `
            dayData.appendChild(dayCards);



        });

    };
    next15DaysData();



};

form.addEventListener("submit", getWeather);

