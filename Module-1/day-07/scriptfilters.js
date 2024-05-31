//  SOLVING PROBLEMS USING ARRAY FUNCTIONS ON REST COUNTRIES DATA

var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all")
req.send();
req.onload = function(){
    var res = JSON.parse(req.response);
    console.log(res);

// OUTPUT OF ALL THE COUNTRIES FROM ASIA REGION
    var arr = res.filter((ele)=>ele.region=='Asia');
    console.log(arr);
    var out = arr.map((ele)=>ele.name.common);
    console.log(`COUNTRIES FROM ASIA REGION:
    ${out}`);

 // OUTPUT OF ALL THE COUNTRIES WHICH HAVE LESS HAN 2 LAKHS OF POPULATIONS   
    var population_detail = res.filter((ele)=>ele.population<200000);
    console.log(population_detail);
    var country = population_detail.map((ele)=>ele.name.common);
    console.log(`COUNTRIES WHICH HAVINF LESS THAN 2 LAKHS OF POPULATIONS:
    ${country}`);

// PRINT THE FOLLOWING DETAILS - NAME, CAPITAL, FLAG USING FOR-EACH METHOD
    res.forEach((element)=>{
    console.log(`NAME - ${element.name.common}, CAPITAL - ${element.capital},FLAG - ${element.flag}`);
})

// GET THE TOTAL POPULATION AS OUTPUT USING REDUCE METHOD
    var out = res.map((ele)=>ele.population);
    var result = out.reduce((acc,cv)=>acc+cv,0);
    console.log(`Total population is - ${result}`);

// PRINT THE COUNTRIES THAT USES US DOLLARS
    for(i=0;i<res.length;i++){
        if(res[i].currencies.USD){
            console.log(`NAME OF COUNTRY - ${res[i].name.common}, USING - ${res[i].currencies.USD.name}, SYMBOL - ${res[i].currencies.USD.symbol}.`)
        }
    }
    
}