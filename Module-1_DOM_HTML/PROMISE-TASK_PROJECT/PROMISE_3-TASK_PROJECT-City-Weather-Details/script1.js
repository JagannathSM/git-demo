// //---TO CREATE WEATHER TABEL---
// async function fun(place_id){
//     try{
//         let data = await fetch("https://www.meteosource.com/api/v1/free/point?place_id=${place_id}&sections=all&timezone=UTC&language=en&units=metric&key=e6i4x0krk442wvfewda1evupd6x7d6ggis6xe6vq");
//         let arr = await data.json();
//         console.log(arr);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// // ---to get place id using lat and lang---
// async function fun1(){
//     try{
//         let data = await fetch("https://www.meteosource.com/api/v1/free/nearest_place?lat=47&lon=29&key=e6i4x0krk442wvfewda1evupd6x7d6ggis6xe6vq");
//         let arr = await data.json();
//         console.log(arr);
//     }
//     catch (error){
//         console.log(error);
//     }
// }


// // ---to get lat and long using country code---
// async function hello(country){
//     try{
//         let data = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=5&appid=08e6b5e6ea5d855483579e69e693c7a4")
//         let arr = await data.json();
//         console.log(arr)
//     }
//     catch (error){
//         console.log(error);
//     }
// }





//---TO DISPLAY THE TABEL WHEN CLICK---

// var container = document.createElement("div");
// container.className = "container";

// var row = document.createElement("div");
// row.className = "row";

// var col = document.createElement("div");
// col.className = "col-md-12";

// var button = document.createElement("button");
// button.innerHTML = "Check";
// button.className = "btn btn-primary";
// button.setAttribute("type","button");
// button.addEventListener("click",show);

// function show(){
//     var checking = document.getElementById("hidden")
//     if (checking.style.display === "none") {
//         checking.style.display = "inline";
//       } 
//     else {
//        checking.style.display = "none";
//     }
// }

// function tr_creat(){
//     var tr_some = document.createElement("tr");
//     return tr_some;
// }

// function td_creat(tag,content){
//     var td_some = document.createElement(tag);
//     td_some.innerHTML = content;
//     return td_some;
// }

// var tabel = document.createElement("tabel");
// tabel.className = "hidden";
// tabel.setAttribute("id","hidden");

// tabel.setAttribute("collaps","collaps")

// var thead = document.createElement("thead");
// var tr = tr_creat();
// var th1 = td_creat("th","HEADING1");
// var th2 = td_creat("th","HEADING2");
// tr.append(th1,th2)
// thead.append(tr);

// var tbody = document.createElement("tbody");
// var tr2 = tr_creat();
// var td1 = td_creat("td","VALUE1");
// var td2 = td_creat("td","VALUE2");
// tr2.append(td1,td2);
// var tr3 = tr_creat();
// var td3 = td_creat("td","VALUE3");
// var td4 = td_creat("td","VALUE4");
// tr3.append(td3,td4);
// tbody.append(tr2,tr3);

// tabel.append(thead,tbody);

// col.append(button,tabel);

// row.append(col);
// container.append(row);
// document.body.append(container);



//-----CONCEPT FOR PROJECT-----//

// var container = document.createElement("div");
// container.className = "container";

// var row = document.createElement("div");
// row.className = "row";


// function weather(name,wein){
    
//     var col_1 = document.createElement("div");
//     col_1.className = "col-sm-12 reset";
//     col_1.innerHTML = ` <div class="card bg-dark text-white">
//                             <img src="https://t3.ftcdn.net/jpg/02/11/52/42/360_F_211524227_Ett8aboQvVnROAFtqu3S1pW99Y3Th9vm.jpg" class="card-img" alt="...">
//                             <div class="card-img-overlay">
//                                 <h5 class="card-title">WEATHER REPORT</h5>
//                                 <p class="card-text">Name - ${name}</p>
//                                 <p class="card-text">WEATHER - ${wein}</p>
//                             </div>
//                         </div>`


//     var daily_button = document.createElement("button");
//     daily_button.setAttribute("onclick","dailydisplay()");
//     daily_button.setAttribute("type","button");
//     daily_button.className = "reset";
//     daily_button.innerHTML = "Show daily weather";

//     var hourly_button = document.createElement("button");
//     hourly_button.setAttribute("onclick","hourlydisplay()");
//     hourly_button.setAttribute("type","button");
//     hourly_button.className = "reset";
//     hourly_button.innerHTML = "Show hourly weather";

//     row.append(col_1,daily_button,hourly_button);
//     daily_weather("yes","norain","34F","no","rain","12F");
//     hourly_weather("no","nfuchn","3556655","no","rain","12F");
// }

// function daily_weather(daily_1_s,daily_1_p,daily_1_t,daily_2_s,daily_2_p,daily_2_t){
//     var col_2 = document.createElement("div");
//     col_2.className = "col-sm-12 reset";
//     col_2.setAttribute("id","daily")
//     col_2.innerHTML = ` <table class="table table-dark" id="daily-tabel" style="display:none">
//                         <thead>
//                             <tr>
//                                 <th scope="col">#</th>
//                                 <th scope="col">SUNNY</th>
//                                 <th scope="col">PRESEPTION</th>
//                                 <th scope="col">TEMP</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <th scope="row">1</th>
//                                 <td>${daily_1_s}</td>
//                                 <td>${daily_1_p}</td>
//                                 <td>${daily_1_t}</td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>${daily_2_s}</td>
//                                 <td>${daily_2_p}</td>
//                                 <td>${daily_2_t}</td>
//                             </tr>
//                         </tbody>
//                     </table>`

//     row.append(col_2);
// }

// function hourly_weather(hourly_1_s,hourly_1_p,hourly_1_t,hourly_2_s,hourly_2_p,hourly_2_t){
//     var col_3 = document.createElement("div");
//     col_3.className = "col-sm-12 reset";
//     col_3.innerHTML = `<table class="table table-dark" id="hourly-tabel1" style="display:none">
//                             <thead>
//                                 <tr>
//                                     <th scope="col">#</th>
//                                     <th scope="col">SUNNY</th>
//                                     <th scope="col">PRECEPTION</th>
//                                     <th scope="col">TEMP</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                             <tr>
//                                 <th scope="row">1</th>
//                                 <td>${hourly_1_s}</td>
//                                 <td>${hourly_1_p}</td>
//                                 <td>${hourly_1_t}</td>
//                             </tr>
//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>${hourly_2_s}</td>
//                                 <td>${hourly_2_p}</td>
//                                 <td>${hourly_2_t}</td>
//                             </tr>
//                         </tbody>
//                         </table>`
//     row.append(col_3);
// }

// container.append(row);
// document.body.append(container);

// weather("london","38F")

// function dailydisplay(){
//     console.log("1")
//     var ele = document.getElementById("daily-tabel");
//     console.log(ele);
//     if(ele.style.display=="none"){
//         ele.style.display="block";
//     }
//     else{
//         ele.style.display="none";
//     }
// }

// function hourlydisplay(){
//     console.log("2")
//     var ele1 = document.getElementById(`hourly-tabel${1}`);
//     console.log(ele1);
//     if(ele1.style.display=="none"){
//         ele1.style.display="block";
//     }
//     else{
//         ele1.style.display="none";
//     }
// }
// var del = document.getElementsByClassName("reset");
// console.log(del)

// function reset(){
//     var del = document.getElementsByClassName("reset");
//     console.log(del)
//     while(del.length>0){
//         del[0].remove();
//     }
//     console.log(del);
// }

function search(){
   weather("madurai","Madurai","MADURAI","Tamil Nadu","India")
}

async function weather(place_id_name,city_name,city_name_using_lat_lon,state_name,country_name){
    try{
        let data = await fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${place_id_name}&sections=all&timezone=UTC&language=en&units=metric&key=e6i4x0krk442wvfewda1evupd6x7d6ggis6xe6vq`);
        let arr = await data.json();
        console.log(arr);
        console.log(city_name,city_name_using_lat_lon,state_name,country_name);
        //data to use
        let current_temp = arr.current.temperature;
        let current_precepitation = arr.current.precipitation.type;
        let currrent_wind_speed = arr.current.wind.speed;
        let current_wind_dir = arr.current.wind.dir;
        let current_summary = arr.current.summary;
        let daily = arr.daily.data;
        let hourly = arr.hourly.data;
        console.log(current_temp,current_precepitation,currrent_wind_speed,current_wind_dir,current_summary,daily,hourly)
    }
    catch(error){
        console.log(error);
    }
}

