var arr = fetch("https://restcountries.com/v3.1/all")

arr.then((data)=> {return data.json()}).then((data1)=>display_cards(data1));

var container = document.createElement("div");
container.className = "container";



var row = document.createElement("div");
row.className = "row";


function display_cards(country){
    console.log(country);
    for(i=0;i<country.length;i++){
        var col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
        col.innerHTML = `<div class="card h-100">
                            <div class="card-header">${country[i].name.common} + ${i}</div>
                            <img src="${country[i].flags?.png}" class="card-img-top">
                            <div class="card-body">
                                <div class="card-text">Region: ${country[i].region}</div>
                                <div class="card-text">Native Name: ${country[i].name.official}</div>
                                <div class="card-text">Population: ${country[i].population}</div>
                                <div class="card-text">Capital: ${country[i].capital}</div>
                                <div class="card-text">Lang: ${country[i].languages?.eng || country[i].languages?.spa || country[i].languages?.ron || country[i].languages?.fra ||
                                    country[i].languages?.por || country[i].languages?.ara || country[i].languages?.ell || country[i].languages?.tur || country[i].languages?.sin || 
                                    country[i].languages?.tam || country[i].languages?.hrv || country[i].languages?.sqi || country[i].languages?.srp || country[i].languages?.nep ||
                                    country[i].languages?.de || country[i].languages?.nno || country[i].languages?.lav || country[i].languages?.rus || country[i].languages?.swe ||
                                    country[i].languages?.bul || country[i].languages?.msa || country[i].languages?.dzo || country[i].languages?.aze || country[i].languages?.ces ||
                                    country[i].languages?.slk || country[i].languages?.nld || country[i].languages?.pap || country[i].languages?.ukr || country[i].languages?.fas ||
                                    country[i].languages?.lit || country[i].languages?.khm || country[i].languages?.hye || country[i].languages?.cnr || country[i].languages?.kal ||
                                    country[i].languages?.zho || country[i].languages?.mon || country[i].languages?.mya || country[i].languages?.kor || country[i].languages?.nor ||
                                    country[i].languages?.pol || country[i].languages?.dan || country[i].languages?.slv || country[i].languages?.tha || country[i].languages?.ita ||
                                    country[i].languages?.prs || country[i].languages?.lao || country[i].languages?.deu || country[i].languages?.cat || country[i].languages?.amh ||
                                    country[i].languages?.ben || country[i].languages?.hun || country[i].languages?.isl || country[i].languages?.div || country[i].languages?.ind ||
                                    country[i].languages?.est || country[i].languages?.vie || country[i].languages?.kat || country[i].languages?.jpn
                                }</div>
                            </div>
                        </div>
                        <br />`
                        row.append(col);
                        container.append(row);
    }
    
    document.body.append(container);


}



