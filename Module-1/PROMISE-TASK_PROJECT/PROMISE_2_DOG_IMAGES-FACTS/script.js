// https://dog.ceo/api/breeds/image/random dog images
// https://dog-api.kinduff.com/api/facts? dog

async function fun(a){
    try{
        let img_data = await fetch(`https://dog.ceo/api/breeds/image/random`);
        let img_res = await img_data.json();
        let facts_data = await fetch(`https://dog-api.kinduff.com/api/facts?`);
        let facts_res = await facts_data.json();
        getvalues(img_res,facts_res,a);
    }
    catch (error){
        console.log(error);
    }
}


var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row card-row";



function getvalues(img,fact,i){
    var col = document.createElement("div");
    col.className = "col-lg-4 del";
    console.log(i);
    col.innerHTML=`<div class="card bg-dark text-black">
                        <img src="${img.message}" class="card-img" alt="${0}">
                        <div class="card-img-overlay">
                            <h5 class="card-title">Fact#${i}</h5>
                            <p class="card-text"><i class="fa fa-info-circle fa-2x" aria-hidden="true"></i> ${fact.facts}</p>
                        </div>
                    </div>`
                    row.append(col);
}

var row2 = document.createElement("div");
row2.className = "row";

var col2 = document.createElement("div");
col2.className = "col-sm-12";

var button_col = document.createElement("div");
button_col.className = "button_class";

var load = document.createElement("button");
load.setAttribute("type","button");
load.className = "btn btn-primary";
load.addEventListener("click",getrange);
load.innerHTML = "Load More";

var reset_btn = document.createElement("button");
reset_btn.setAttribute("type","button");
reset_btn.className = "btn btn-primary";
reset_btn.addEventListener("click",reset);
reset_btn.innerHTML = "Reset";

var redirect_all = document.createElement("a");
redirect_all.setAttribute("href","https://en.wikipedia.org/wiki/Dog");
redirect_all.setAttribute("type","button");
redirect_all.setAttribute("target","_blank");
redirect_all.className = "btn btn-primary";
redirect_all.innerHTML = `Know More <i class="fa fa-wikipedia-w" aria-hidden="true"></i>`

button_col.append(load,reset_btn,redirect_all);
col2.append(button_col);
row2.append(col2);

container.append(row,row2);
document.body.append(container);

let start = 1;
let end = 6;

function getrange(){
    for(i=start;i<=end;i++){
        fun(i);
    }
    start=end+1;
    end=end+6;
}

function reset(){
    console.log("reset");
    var test = document.getElementsByClassName("del");
    console.log(test)
    while(test.length>0){
        test[0].remove();
    }
    start=1;
    end=6;
}

getrange();

