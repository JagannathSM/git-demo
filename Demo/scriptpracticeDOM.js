//var content_div = document.createElement("div");
//content_div.className = "content_class";

//var LeftHeading = document.createElement("h1");
//LeftHeading.innerHTML = "Form Submission:";

//function label_creat(labeltag,attri,attrival,content){
//    var out = document.createElement(labeltag);
//   out.setAttribute(attri,attrival);
//    out.innerHTML = content;
//    return out;
//}
//function break_creat(){
//    var b = document.createElement("br");
//    return b;
//}
//function input_creat(inputtag,attri1,attri1val,attri2,attri2val,attri3,attri3val){
//    var out = document.createElement(inputtag);
//    out.setAttribute(attri1,attri1val);
//    out.setAttribute(attri2,attri2val);
//    out.setAttribute(attri3,attri3val);
//    return out;
//}

//var br = break_creat();
//var FirstName_label = label_creat("label","for","first","First Name:");
//var br1 = break_creat();
//var FirstName_input = input_creat("input","type","text","placeholder","First Name","id","first");
//var br2 = break_creat();
//var LastName_label = label_creat("label","for","last","Last Name:");
//var br3 = break_creat();
//var LastName_input = input_creat("input","type","text","placeholder","Last Name","id","last");
//var br4 = break_creat();
//var Address_1_label = label_creat("label","for","address1","Address Line 1:");
//var br5 = break_creat();
//var Address_1_input = input_creat("input","type","text","placeholder","Address Line 1","id","address1");
//var br6 = break_creat();
//var Address_2_label = label_creat("label","for","address2","Address Line 2:");
//var br7 = break_creat();
//var Address_2_input = input_creat("input","type","text","placeholder","Address Line 2","id","address2")
//var br8 = break_creat();
//var Pin_label = label_creat("label","for","pin","PIN:");
//var br9 = break_creat();
//var Pin_input = input_creat("input","type","text","placeholder","PIN","id","pin");

//content_div.append(LeftHeading,br,FirstName_label,br1,FirstName_input,br2,LastName_label,br3,LastName_input,br4,Address_1_label,br5,Address_1_input,br6,
//    Address_2_label,br7,Address_2_input,br8,Pin_label,br9,Pin_input);

//document.body.append(content_div);


//const maxChecks = 2
//let selectedCount = 0

//document.querySelector('div').addEventListener('click', event => {
//  if (event.target.type === 'checkbox') {
//    selectedCount = event.target.checked
//      ? selectedCount + 1
//      : selectedCount - 1
//  }

//    if (selectedCount >= maxChecks) {
//    [...document.querySelectorAll('input:not(:checked)')].forEach(input => input.disabled = true)
//  } else {
//    [...document.querySelectorAll('input')].forEach(input => input.disabled = false)
//  }
//})



//function fun(){
//    let all_loc = document.querySelectorAll(".loc");
//    let a = 0;

//    for(var i=0;i<all_loc.length;i++){
//        if(all_loc[i].checked==true){
//            a=a+1;
//        }
//    }
//    if(a>2){
//        alert("You can only check 2 options");
//        return false;
//    }
    
    
//}

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
table.className = "table table-striped";

var thead = document.createElement("thead");
thead.className = "thead-dark";


var tbody =  document.createElement("tbody");

var thead_tr = create_tr();
var th1 = create_th("th","scope","col","Name");
var th2 = create_th("th","scope","col","Address");
var th3 = create_th("th","scope","col","Gender");
var th4 = create_th("th","scope","col","Country");

thead_tr.append(th1,th2,th3,th4);
thead.append(thead_tr);


    
function getvalues(){
    var tbody_tr = create_tr();
    var arr = document.querySelectorAll(".text");
    for(i=0;i<arr.length;i++){
        var td = document.createElement("td");
        td.innerHTML=`${arr[i].value}`;
        tbody_tr.append(td)
    }
    var arr1 = document.querySelectorAll(".radio");
    for(j=0;j<arr1.length;j++){
        if (arr1[j].checked) {
            var td1 = document.createElement("td");
            td1.innerHTML=`${arr1[j].id}`;
            tbody_tr.append(td1)
          }
    }
    var arr2 = document.querySelectorAll(".checkbox");
    var temp = [];
    for(k=0;k<arr2.length;k++){
        if(arr2[k].checked){
            var temp2 = arr2[k].id;
            temp.push(temp2);
        }
    }
    var td2 = document.createElement("td");
    td2.append(temp.join(','));
    tbody_tr.append(td2)
    tbody.append(tbody_tr);
}





table.append(thead,tbody);
document.body.append(table);