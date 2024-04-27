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