//---TO CREATE WEATHER TABEL---
var reset_val = 1;
async function weather(place_id_name,city_name,state_name,country_name){
    try{
        let data = await fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${place_id_name}&sections=all&timezone=UTC&language=en&units=metric&key=e6i4x0krk442wvfewda1evupd6x7d6ggis6xe6vq`);
        let arr = await data.json();
        //data to use
        let current_temp = arr.current.temperature;
        let current_precipitation = arr.current.precipitation.type;
        let currrent_wind_speed = arr.current.wind.speed;
        let current_wind_dir = arr.current.wind.dir;
        let current_summary = arr.current.summary;
        let daily = arr.daily.data;
        let hourly = arr.hourly.data;
        current_weather_card(city_name,state_name,country_name,current_temp,current_precipitation,currrent_wind_speed,current_wind_dir,current_summary,reset_val); //
        daily_weather(daily,reset_val);
        hourly_weather(hourly,reset_val);
        reset_val++; //
    }
    catch(error){
        console.log(error);
    }
}

// ---to get place id using lat and lang---
async function tofindplace_id(latitude,longitude){
    try{
        let data = await fetch(`https://www.meteosource.com/api/v1/free/nearest_place?lat=${latitude}&lon=${longitude}&key=e6i4x0krk442wvfewda1evupd6x7d6ggis6xe6vq`);
        let arr = await data.json();
        let place_id_name = arr.place_id;
        let state_name = arr.adm_area1;
        let city_name = arr.adm_area2;
        let country_name = arr.country;
        weather(place_id_name,city_name,state_name,country_name);
    }
    catch (error){
        console.log(error);
    }
}

// ---to get lat and long using country code---
async function togetlatlon(city){
    try{
        let data = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=08e6b5e6ea5d855483579e69e693c7a4`)
        let arr = await data.json();
        let latitude = arr[0].lat;
        let longitude = arr[0].lon;
        let city_name = arr[0].name
        tofindplace_id(latitude,longitude,city_name);
    }
    catch (error){
        console.log(error);
    }
}


//function for td,tr,th
function create_tr(){
    var tr = document.createElement("tr");
    return tr;
}

function create_td(content){
    var td = document.createElement("td");
    td.innerHTML = `${content}`
    return td;
}

function create_th(attri1,attri1val,content){
    var th = document.createElement("th");
    th.setAttribute(attri1,attri1val);
    th.innerHTML = `${content}`;
    return th;
}

function create_th1(attri1,attri1val,content,attri2,attri2val){
    var th = document.createElement("th");
    th.setAttribute(attri1,attri1val);
    th.innerHTML = `${content}`;
    th.setAttribute(attri2,attri2val);
    return th;
}


var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";


function current_weather_card(city_name,state_name,country_name,current_temp,current_precipitation,currrent_wind_speed,current_wind_dir,current_summary,reset_val){

    var col_1 = document.createElement("div");
    col_1.className = "col-sm-12 reset current";

    col_1.innerHTML = ` <div class="card bg-dark text-white">
                            <img src="https://t3.ftcdn.net/jpg/02/11/52/42/360_F_211524227_Ett8aboQvVnROAFtqu3S1pW99Y3Th9vm.jpg" class="card-img" alt="${0}">
                            <div class="card-img-overlay">
                                <h5 class="card-title"><b>CURRENT WEATHER REPORT - <i class="fa fa-map-marker" aria-hidden="true"></i> ${city_name} / ${state_name} / ${country_name}</b></h5>
                                <p class="card-text"><b><span>Current Temperature - ${current_temp}&nbsp/</span><span>/Current Precipitation</b> - ${current_precipitation}</span></b></p>
                                <p class="card-text"><b><span>Current Wind Speed - ${currrent_wind_speed}&nbsp/</span><span>/<b>Current Wind Direction<b> - ${current_wind_dir}</span></b></p>
                                <p class="card-text"><b>Summary - ${current_summary}</b></p><button type="button" class="btn btn-dark" onclick="dailydisplay(${reset_val})">Show Daily Weather report</button><button type="button" class="btn btn-dark" onclick="hourlydisplay(${reset_val})">Show Hourly Weather report</button>  
                            </div>
                        </div>`

    row.append(col_1);
}

//---Daily Weather Data in tabel---
function daily_weather(daily,reset_val){
    var col_2 = document.createElement("div");
    col_2.className = "col-sm-12 reset daily_current";
    col_2.setAttribute("id","daily")

    var daily_tabel = document.createElement("tabel");
    daily_tabel.className = "table table-striped table-dark";
    daily_tabel.setAttribute("id",`daily-tabel${reset_val}`);
    daily_tabel.setAttribute("style","display:none");

    var daily_thead = document.createElement("thead");

    var tr1 = create_tr();
    var th1 = create_th("scope","col","Date");
    var th2 = create_th("scope","col","Precipitation");
    var th3 = create_th("scope","col","Temperature");
    var th4 = create_th("scope","col","Weather");
    var th5 = create_th("scope","col","Summary");

    tr1.append(th1,th2,th3,th4,th5);
    daily_thead.append(tr1);

    var daily_tbody = document.createElement("tbody");

    for(var i=0; i<daily.length;i++){
        let daily_date = daily[i].day;
        let daily_precipitation = daily[i].all_day.precipitation.type;
        let daily_temp = daily[i].all_day.temperature;
        let daily_weather_1 = daily[i].weather;
        let daily_summary = daily[i].summary;

        var daily_body_tr = create_tr();
        var daily_body_th = create_th("scope","row",daily_date);
        var daily_body_td1 = create_td(daily_precipitation);
        var daily_body_td2 = create_td(`${daily_temp}\u00B0C`);
        var daily_body_td3 = create_td(daily_weather_1);
        var daily_body_td4 = create_td(daily_summary);

        daily_body_tr.append(daily_body_th,daily_body_td1,daily_body_td2,daily_body_td3,daily_body_td4);
        daily_tbody.append(daily_body_tr);
    }

    daily_tabel.append(daily_thead,daily_tbody);
    col_2.append(daily_tabel);
    row.append(col_2);
}

function hourly_weather(hourly,reset_val){
    var col_3 = document.createElement("div");
    col_3.className = "col-sm-12 reset hourly_current";
    col_3.setAttribute("id","hourly")


    var hourly_tabel = document.createElement("tabel");
    hourly_tabel.className = "table table-striped table-dark";
    hourly_tabel.setAttribute("id",`hourly-tabel${reset_val}`);
    hourly_tabel.setAttribute("style","display:none");


    var hourly_thead = document.createElement("thead");
    hourly_thead.className = "thead-dark";

    var tr11 = create_tr();
    var th11 = create_th1("scope","col","Time","style","width:30%");
    var th21 = create_th1("scope","col","Precipitation","style","width:20%");
    var th31 = create_th1("scope","col","Temperature","style","width:20%");
    var th41 = create_th1("scope","col","Weather","style","width:20%");
    var th51 = create_th1("scope","col","Summary","style","width:20%");

    tr11.append(th11,th21,th31,th41,th51);
    hourly_thead.append(tr11);

    var hourly_tbody = document.createElement("tbody");

    for(var j=0;j<hourly.length;j++){
        let hourly_time = hourly[j].date;
        let hourly_precipitation = hourly[j].precipitation.type;
        let hourly_temp = hourly[j].temperature;
        let hourly_weather_1 = hourly[j].weather;
        let hourly_summary = hourly[j].summary;

        var hourly_body_tr = create_tr();
        var hourly_body_th = create_th("scope","row",hourly_time);
        var hourly_body_td1 = create_td(hourly_precipitation);
        var hourly_body_td2 = create_td(`${hourly_temp}\u00B0C`);
        var hourly_body_td3 = create_td(hourly_weather_1);
        var hourly_body_td4 = create_td(hourly_summary);

        hourly_body_tr.append(hourly_body_th,hourly_body_td1,hourly_body_td2,hourly_body_td3,hourly_body_td4);
        hourly_tbody.append(hourly_body_tr);
    }

    hourly_tabel.append(hourly_thead,hourly_tbody);
    col_3.append(hourly_tabel);
    row.append(col_3);
}

container.append(row);
document.body.append(container);


function dailydisplay(reset_val){
    var ele = document.getElementById(`daily-tabel${reset_val}`);
    if(ele.style.display=="none"){
        ele.style.display="block";
    }
    else{
        ele.style.display="none";
    }
}

function hourlydisplay(reset_val){
    var ele1 = document.getElementById(`hourly-tabel${reset_val}`);
    if(ele1.style.display=="none"){
        ele1.style.display="block";
    }
    else{
        ele1.style.display="none";
    }
}

function reset(){
    var del = document.getElementsByClassName("reset");
    while(del.length>0){
        del[0].remove();
    }
}

function search(){
    var val = document.getElementById("search_city").value;
    togetlatlon(val);
    document.getElementById("search_city").value="";
}

