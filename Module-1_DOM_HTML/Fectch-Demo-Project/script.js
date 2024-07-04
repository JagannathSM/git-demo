var arr = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

arr.then((data)=> {return data.json()}).then((data1)=>display_cards(data1));

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";




function display_cards(data1){
    console.log(data1);
    for(i=0;i<data1.length;i++){
        var col = document.createElement("div");
        col.className = "col-lg-4";
        col.innerHTML = `<div class="card border-success mb-3" style="max-width: 18rem;">
                            <div class="card-header bg-transparent border-success"><b>Name - ${data1[i].name}<b></div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Capital -${data1[i].capital}</h5>
                                <p class="card-text">Region -${data1[i].region}</p>
                                <p class="card-text">Language -${data1[i].languages[0].name}</p>
                                <p class="card-text">Latitude -[${data1[i].latlng[0]}], Longtitude -[${data1[i].latlng[1]}]</p>
                            </div>
                            <div class="card-footer bg-transparent border-success">Country Code-${data1[i].cioc}</div>
                        </div>`
                        row.append(col);
                        container.append(row);
    }
    
    document.body.append(container);

}