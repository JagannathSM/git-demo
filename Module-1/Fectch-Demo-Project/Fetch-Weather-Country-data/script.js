
var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";





function display_cards(i,name,capital,region,language,lat,lang,temp,code,i){
        var col = document.createElement("div");
        col.className = "col-lg-4";
        col.innerHTML = `<div class="card border-success mb-3" style="max-width: 18rem;">
                            <div class="card-header bg-transparent border-success"><b>${i+1}.${name}<b></div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Capital : ${capital}</h5>
                                <p class="card-text">Region : ${region}</p>
                                <p class="card-text">Language : ${language}</p>
                                <p class="card-text">Latitude : [${lat}], Longtitude : [${lang}]</p>
                                <button type="button" onclick = "myfun(${i})">Check Weather</button>
                                <p class="card-text" id="${i}" style="display:none;">Temprature : ${temp}\u00B0F</p>
                            </div>
                            <div class="card-footer bg-transparent border-success">Country Code-${code}</div>
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
        let data3 = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
        let country = await data3.json();
        for(i=z;i<country.length;i++){
            var latlng = country[i].latlng;
            var name = country[i].name;
            var region = country[i].region;
            var capital = country[i].capital;
            var language = country[i].languages[0].name;
            var code = country[i].cioc;
            var lat = latlng[0];
            var lang = latlng[1];
            let data1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=08e6b5e6ea5d855483579e69e693c7a4`);
            let weather = await data1.json();
            var temp = weather.main.temp;
            display_cards(i,name,capital,region,language,lat,lang,temp,code,i);
        }
    }
    catch (error){
        console.log(error);
        console.log(i);
        showcards(i+1);
    }
}

document.onload(showcards(0));