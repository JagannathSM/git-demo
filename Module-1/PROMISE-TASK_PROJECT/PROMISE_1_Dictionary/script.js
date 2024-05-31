
async function fun(a){
    try{
        let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${a}`);
        let res = await data.json();
        show_results(res[0]);
    }
    catch (error){
        console.log(error);
    }
}

function getvalue(){
    var del = document.getElementsById("reset");
    while(del.length>0){
        del[0].remove();
    }
    var data = document.getElementById("search").value;
    fun(data);
    document.getElementById("search").value=``;
}

var container = document.createElement("div");
container.className="container";

var row = document.createElement("div");
row.className = "row";

var reset_div = document.createElement("div");
reset_div.className = "reset"

function show_results(arr){ 
    var phonitics = arr.phonetics[0].text;
    var audio = arr.phonetics[0].audio;
    var word = arr.word;
    var url = arr.sourceUrls[0];
    var noun = arr.meanings[0].partOfSpeech;
    var nown_def = arr.meanings[0].definitions[0].definition;
    var ex = arr.meanings[0].definitions[0]?.example;
    var synonyms = arr.meanings[0]?.synonyms;
    var verb = arr.meanings[1]?.partOfSpeech;
    var verb_def = arr.meanings[1]?.definitions[0].definition;
    var ex1 = arr.meanings[1]?.definitions[0]?.example;
    var synonyms1 = arr.meanings[1]?.synonyms;

    var cards = document.createElement("div");
    cards.className = "col-md-12";
    cards.innerHTML = `<div class="card text-center">
                            <div class="card-header">
                                Showing result for word - ${word} in ${noun} and ${verb}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${word} - ${phonitics}</h5>
                                <audio controls>
                                    <source src="${audio}" type="audio/mpeg">
                                </audio>
                                <p class="card-text"><b>${noun}</b></p>
                                <ul>
                                    <li><b>Definition</b> - ${nown_def}
                                    <li><b>Example</b> - ${ex}
                                    <li><b>Synonyms</b> - ${synonyms}
                                </ul>
                                <p class="card-text"><b>${verb}</b></p>
                                <ul>
                                    <li><b>Definition</b> - ${verb_def}
                                    <li><b>Example</b> - ${ex1}
                                    <li><b>Synonyms</b> - ${synonyms1}
                                </ul>
                                <a href="${url}" class="btn btn-primary" target="_blank">Get Know More on <i class="fa fa-wikipedia-w" aria-hidden="true"></i></a>
                            </div>
                            <div class="card-footer text-muted">
                                Search for more Content!!
                            </div>
                        </div>`
        reset_div.append(cards);
    }
row.append(reset_div);
container.append(row);
document.body.append(container);

fun("try");

function getvalue(){
    var del = document.getElementsByClassName("reset");
    del[0].innerHTML=``;
    var data = document.getElementById("search").value;
    fun(data);
    document.getElementById("search").value=``;
}

