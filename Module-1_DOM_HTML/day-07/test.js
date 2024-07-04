var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all")
req.send();
req.onload = function(){
    var res = JSON.parse(req.response);
    console.log(res);

    res.forEach((ele)=>{
        console.log(`NAME - ${ele.name.common}, CAPITAL - ${ele.capital},FLAG - ${ele.flag}`);
    })
   


   for(i=0;i<res.length;i++){
    if(res[i].currencies.USD){
        console.log(`NAME OF COUNTRY - ${res[i].name.common}, USING - ${res[i].currencies.USD.name}, SYMBOL - ${res[i].currencies.USD.symbol}.`)
    }
    else{
        continue;
    }
   }
     
}