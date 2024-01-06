let navLinks =Array.from( document.querySelectorAll(".nav-link"));
for(let i=0; i<navLinks.length; i++) {
    navLinks[i].addEventListener("click",function(){
            let active =document.querySelector(".active");
            active.classList.remove("active");
            navLinks[i].classList.add("active");
})
}


const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Saturday']
const allDate =new Date();
const currentDay = days[allDate.getUTCDay()]
const currentDate = `${allDate.getDay()} ${month[allDate.getMonth()]}`
let day2 = days[allDate.getDay()+1]==undefined?days[0]:days[allDate.getDay()+1] ;
let inde = days.indexOf(day2);
let day3 = days[inde+1] ;


const inputCountry= document.getElementById("input-country");
function search () {
    
    inputCountry.addEventListener("input",function(e) {
        if(e.target.value.length>=3){
         weatherApi(e.target.value);
    }
    })
}
search()

async function weatherApi(input) {
        let foreCast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1d5462f48ebe44d08de145306233012&q=${input?input:"cairo"}&days=3`);
        let next = await foreCast.json();
        let box = `  
            <div class="container">
              <div class="row p-2 ">
                <div class="col-md-4 p-0 rounded-start-2 temp">
                  <div class="date p-2 d-flex justify-content-between align-items-center text-light  rounded-start-2">
                    <p class="m-0">${currentDay}</p>
                    <p class="m-0">${currentDate}</p>
                  </div>
                  <div class="temp-sec px-2 py-3">
                    <p class="text-light">${next.location.name} , ${next.location.country}</p>
                    <h3 class="text-white fs-1 fw-bolder ">${next.forecast.forecastday[0].hour[allDate.getHours()].temp_c} <sup>o</sup>C <img src="https:${next.forecast.forecastday[0].hour[allDate.getHours()].condition.icon }" class="w-25" alt=""></h3>
                    <p class="py-3 px-2 main-color">${next.forecast.forecastday[0].hour[allDate.getHours()].condition.text}</p>
                    <div class="other-details p-2 d-flex justify-content-between align-items-center">
                      <p class="m-0 text-light"><img src="images/icon-umberella.png" alt="" class="me-2 align-top">20%</p>
                      <p class="m-0 text-light"><img src="images/icon-wind.png" alt="" class="me-2 align-top">18km/h</p>
                      <p class="m-0 text-light"><img src="images/icon-compass.png" alt="" class="me-2 align-top">East</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 p-0 temp-2">
                  <div class="date p-2 text-center text-light ">
                    <p class="m-0">${day2==undefined?days[0]:day2}</p>
                  </div>
                  <div class="temp-sec text-center px-2 py-3">
                  <img src="https:${next.forecast.forecastday[1].day.condition.icon}" class="w-25" alt="">
                    <h3 class="text-white  fw-bolder ">${next.forecast.forecastday[1].day.maxtemp_c} <sup>o</sup>C  </h3>
                    <p class="text-light"> ${next.forecast.forecastday[1].day.mintemp_c} <sup>o</sup>C</p>
                    <p class="py-3 px-2 main-color">${next.forecast.forecastday[1].day.condition.text}</p>
                  </div>
                </div>
                <div class="col-md-4  p-0  rounded-end-2 temp">
                  <div class="date p-2 text-center text-light rounded-end-2">
                    <p class="m-0">${day3==undefined?days[0]:day3}</p>
                  </div>
                  <div class="temp-sec text-center px-2 py-3">
                  <img src="https:${next.forecast.forecastday[2].day.condition.icon}" class="w-25" alt="">
                    <h3 class="text-white  fw-bolder">${next.forecast.forecastday[2].day.maxtemp_c} <sup>o</sup>C </h3>
                    <p class="text-light"> ${next.forecast.forecastday[2].day.mintemp_c} <sup>o</sup>C</p>
                    <p class="py-3 px-2 main-color">${next.forecast.forecastday[2].day.condition.text}</p>
                  </div>
                </div>
              </div>
            </div>
          `;

          const sec= document.getElementById("weather");

          sec.innerHTML = box;
        
}

weatherApi();


