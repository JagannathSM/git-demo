var arr = fetch("https://restcountries.com/v3.1/all")

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
        col.innerHTML = `<div class="card-group">
                            <div class="card">
                                <img src="${data1[i].flags.svg}" class="card-img-top" alt="${data1[i].flags.alt}" heigth 50%>
                                <div class="card-body">
                                    <h5 class="card-title">${data1[i].name.common}</h5>
                                    <p class="card-text">Region - ${data1[i].region}</p>
                                    <p class="card-text">Capital -${data1[i].capital}</p>
                                    <p class="card-text">Population - ${data1[i].population}</p>
                                    <p class="card-text">Country Code - ${data1[i].cioc}</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">[Latitude : ${data1[i].latlng[0]}, Longitude : ${data1[i].latlng[1]}]</small>
                                </div>
                            </div>
                        </div>`
                        row.append(col);
                        container.append(row);
    }
    
    document.body.append(container);


}