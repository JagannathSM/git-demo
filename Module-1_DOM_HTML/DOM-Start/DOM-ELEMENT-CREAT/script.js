function label_creat(labeltag,attri,attrival,content){
    var out = document.createElement(labeltag);
    out.setAttribute(attri,attrival);
    out.innerHTML = content;
    return out;
}
function break_creat(){
    var b = document.createElement("br");
    return b;
}
function input_creat(inputtag,attri1,attri1val,attri2,attri2val){
    var out = document.createElement(inputtag);
    out.setAttribute(attri1,attri1val);
    out.setAttribute(attri2,attri2val);
    return out;
}

function getvalues(){
    var first=document.getElementById("First Name").value;
    var middle=document.getElementById("Middle Name").value;
    var last=document.getElementById("Last Name").value;
    var email=document.getElementById("E-mail").value;
    var address=document.getElementById("Address").value;
    var location=document.getElementById("Location").value;

    var breaks = document.createElement("br");
    var div = document.createElement("div");
    div.innerText="FirstName:"
    div.append(breaks);
    div.append(first,breaks);
    document.body.append(div);

    var div = document.createElement("div");
    div.innerText="MiddleName:"
    div.append(middle,breaks);
    document.body.append(div);

    var div = document.createElement("div");
    div.innerText="LastName:"
    div.append(last,breaks);
    document.body.append(div);

    var div = document.createElement("div");
    div.innerText="Email:"
    div.append(email,breaks);
    document.body.append(div);

    var div = document.createElement("div");
    div.innerText="Address:"
    div.append(address,breaks);
    document.body.append(div);

    var div = document.createElement("div");
    div.innerText="Location:"
    div.append(location);
    document.body.append(div);

    console.log(`FirstName:${first}, MiddleName:${middle}, LastName:${last}, Email:${email}, Address:${address}, Location:${location}`);
}

function get(){
    var res=document.querySelectorAll("input");
    for(var i=0;i<res.length;i++){
        let d = document.createElement("div");
        d_val = res[i].value;
        id_val = res[i].id;
        d.append(`USING FOR LOOP - ${id_val} : ${d_val}`);
        document.body.append(d);
    }
}


var br = break_creat();
var lab_first=label_creat("label","for","First Name","FirstName:");
var in_first=input_creat("input","type","text","id","First Name");
var lab_mid=label_creat("label","for","Middle Name","MiddleName:");
var in_mid=input_creat("input","type","text","id","Middle Name");
var lab_last=label_creat("label","for","Last Name","LastName:");
var in_last=input_creat("input","type","text","id","Last Name");
var lab_email=label_creat("label","for","E-mail","Email:");
var in_email=input_creat("input","type","email","id","E-mail");
var lab_add=label_creat("label","for","Address","Address:");
var in_add=input_creat("input","type","text","id","Address");
var lab_loc=label_creat("label","for","Location","Location:");
var in_loc=input_creat("input","type","text","id","Location");


document.body.append(lab_first,break_creat(),in_first,break_creat(),lab_mid,break_creat(),in_mid,break_creat(),lab_last,break_creat(),in_last,break_creat(),lab_email,break_creat(),in_email,break_creat(),lab_add,break_creat(),in_add,break_creat(),lab_loc,break_creat(),in_loc,break_creat(),br);

var button = document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Check"
button.className = "btn btn-success"
button.addEventListener("click",getvalues);
document.body.append(button);

document.body.append(break_creat(),break_creat())

var button1 = document.createElement("button");
button1.setAttribute("type","button");
button1.innerHTML="Alternate"
button1.setAttribute("onclick","get()");
document.body.append(button1);



