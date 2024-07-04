var div = document.createElement("div");



function length(){
var req = new XMLHttpRequest();
req.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
req.send();
req.onload = function(){
    res = JSON.parse(req.response);
    let length = res.length
    console.log(length);
    div.innerHTML = `${length}`

}
}
length();
document.body.append(div);