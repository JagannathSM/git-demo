document.querySelector("button").addEventListener("click",result)

async function result(){
    try {
        var ask = document.getElementById("Shows").value; 
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${ask}`);
        var res = await data.json();
        console.log(res.length);
        console.log(res[0])
        console.log(res)

        var img = res[0].show.image.medium;
        var show_name = res[0].show.name;
        var genres = (res[0].show.genres);
        var premiered = res[0].show.premiered;
        var rating = res[0].show.rating.average;
        var avg_show_runtime = res[0].show.averageRuntime;
        var show_running_day = res[0].show.schedule.days;
        var official_site = res[0].show.officialSite;
        var studio = res[0].show.network.name;
        var country = res[0].show.network.country.name;
        var summary = res[0].show.summary;
        display(img,show_name,genres,premiered,rating,avg_show_runtime,show_running_day,official_site,studio,country,summary)

    } catch (error) {
        console.log(error);
    }
}
var row = document.createElement("row");
row.className = "display_row"

var display_div = document.createElement("div");
display_div.className = "col-lg-12 col-md-8 col-sm-6";

var div_final = document.createElement("div");
div_final.className = "final"


function display(img,name,genres,premiered,rating,avg_show_runtime,show_running_day,official_site,studio,country,summary){
    div_final.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="${0}">
                                <div class="card-body">
                                    <p class="card-text"><h2>ShowName:</h2></p>
                                    <p class="card-text"><h2>${name}</h2></p>
                                    <p class="card-text"><b>Genres:</b> ${genres}</p>
                                    <p class="card-text"><b>Premiered Date:</b> ${premiered}</p>
                                    <p class="card-text"><b>Rating:</b> ${rating}</p>
                                    <p class="card-text"><b>Show RunTime:</b> ${avg_show_runtime}</p>
                                    <p class="card-text"><b>Show Days:</b> ${show_running_day}</p>
                                    <p class="card-text"><b>Official Site:</b> ${official_site}</p>
                                    <p class="card-text">${studio}</p>
                                    <p class="card-text">${country}</p>
                                    <article class="card-text"><b>About Show:</b> ${summary}</article>
                                </div>
                            </div>`;
                            display_div.append(div_final)
                            row.append(display_div)
                            document.body.append(row);
}



