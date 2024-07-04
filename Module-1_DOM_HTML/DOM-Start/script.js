//CREAT HTML TAG
var element = document.createElement("div");
//ADD CONTENT
element.innerHTML="Nice and Good";
//ADD ELEMENT TO THE BODY OF HTML
document.body.append(element);

var ele = document.createElement("b");
ele.innerHTML="<i>Its Italic</i>";
document.body.append(ele);

var e = document.createElement("span");
ele.innerText="<i>Its not Italic</i>";
document.body.append(e);

var container = document.createElement("div");
var row = document.createElement("div");
var col = document.createElement("div");
col.innerHTML("This is Col");
row.append(col);
container.append(row);
document.body.append(container);