// TO COMPARE TWO JSON FILE
// HAVING SAME PROPERTIES WITHOUT ORDER

var ob1 = {
    name: "Person 1",
    age: 5,
}

var ob2 = {
    age: 5,
    name: "Persone 1"
}
var a=JSON.stringify(ob1);
var b=JSON.stringify(ob2);
if(a===b){
    console.log("TRUE");
}
else{
    console.log("FALSE");
}


var div = document.createElement("div");
div.innerHTML = ``;
for(i=0;i<5;i++){
    div.append(i);
}
document.body.append(div);



//texting
var previous_button_i = document.createElement("i");
previous_button_i.className = "fa fa-chevron-circle-left fa-2x";
previous_button_i.setAttribute("aria-hidden","true");

document.body.append(previous_button_i);
console.log(previous_button_i)