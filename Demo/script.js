var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all")
req.send();
req.onload = function(){
    var res = JSON.parse(req.response);
    for(i=0;i<res.length;i++){
        console.log("country_flag "+(i+1)+" "+res[i].flags.png);
        console.log("country "+(i+1)+" "+res[i].region);
        console.log("region "+(i+1)+" "+res[i].name.common);
        console.log("Sub_region "+(i+1)+" "+res[i].subregion);
        console.log("population "+(i+1)+" "+res[i].population);
    }
    console.log(i);
}