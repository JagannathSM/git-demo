async function fun(){
    try{
        let data = await fetch("https://restcountries.com/v3.1/all");
        let res = await data.json();
        for(i=0;i<res.length;i++){
            var test = res[i].latlng;
            open_weather(...test);
        }
    }
    catch (error){
        console.log(error);
    }
}


async function open_weather(lat,lang){
    try{
        let data1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=08e6b5e6ea5d855483579e69e693c7a4
        `);
        let data2 = await data1.json();
        console.log(data2.main.temp);
    }
    catch (error){
        console.log(error);
    }
}

fun();