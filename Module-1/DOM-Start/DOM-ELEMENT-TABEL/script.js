function create_tr(){
    var tr_ele = document.createElement("tr");
    return tr_ele;
}

function create_th(tagname,classname,value,content){
var th_ele = document.createElement(tagname);
th_ele.setAttribute(classname,value);
th_ele.innerHTML = content;
return th_ele; 
}

function create_td(tagname,content){
    var td_ele = document.createElement(tagname);
    td_ele.innerHTML = content;
    return td_ele; 
}

var table = document.createElement("table");
table.className = "table";

var thead = document.createElement("thead");
thead.className = "thead-dark";

var tbody =  document.createElement("tbody");

var thead_tr = create_tr();
var th1 = create_th("th","scope","col","#");
var th2 = create_th("th","scope","col","firstname");
var th3 = create_th("th","scope","col","lastname");
var th4 = create_th("th","scope","col","handle");

thead_tr.append(th1,th2,th3,th4);
thead.append(thead_tr);

var tbody_tr = create_tr();
var td1 = create_th("th","scope","row","1");
var td2 = create_td("td","mark");
var td3 = create_td("td","otto");
var td4 = create_td("td","@mde");

tbody_tr.append(td1,td2,td3,td4);
tbody.append(tbody_tr);

table.append(thead,tbody);
document.body.append(table);