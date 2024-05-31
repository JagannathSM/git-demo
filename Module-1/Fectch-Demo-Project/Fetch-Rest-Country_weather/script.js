
var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";


function display_cards(flag,alt,name,region,capital,population,code,lat,lang,temp,i){
        var col = document.createElement("div");
        col.className = "col-lg-4 col-sm-12";
        col.innerHTML = `<div class="card-group">
                            <div class="card">
                                <img src="${flag}" class="card-img-top" alt="${alt}" heigth 50%>
                                <div class="card-body">
                                    <h5 class="card-title"><b>${name}</b></h5>
                                    <p class="card-text">Region - ${region}</p>
                                    <p class="card-text">Capital -${capital}</p>
                                    <p class="card-text">Population - ${population}</p>
                                    <p class="card-text">Country Code - ${code}</p>
                                    <button type="button" class="btn btn-primary" onclick = "myfun(${i})">Click for weather</button>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">[Latitude : ${lat}, Longitude : ${lang}]</small><br>
                                    <small class="card-text" id="${i}" style="display:none;"><b>Temprature : ${temp}\u00B0F</b></small>
                                </div>
                            </div>
                        </div>`
                        row.append(col);
                        
}


function myfun(i){
    var checking = document.getElementById(i)
    if (checking.style.display == "none") {
        checking.style.display = "inline";
      } else {
       checking.style.display = "none";
      }
}


container.append(row);
document.body.append(container);


async function showcards(z){
    try{
        let data3 = await fetch("https://restcountries.com/v3.1/all");
        let country = await data3.json();
        console.log(country);
        for(i=z;i<country.length;i++){
            var flag = country[i].flags.svg;
            var alt = country[i].flags.alt;
            var name = country[i].name.common;
            var region = country[i].region;
            var capital = country[i].capital;
            var population = country[i].population;
            var code = country[i].cioc;
            var latlng = country[i].latlng;

            var lat = latlng[0];
            var lang = latlng[1];
            let data1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=08e6b5e6ea5d855483579e69e693c7a4`);
            let weather = await data1.json();
            var temp = weather.main.temp;
            display_cards(flag,alt,name,region,capital,population,code,lat,lang,temp,i);
        }
    }
    catch (error){
        console.log(error);
        console.log(i);
        showcards(i+1);
    }
}

showcards(0);