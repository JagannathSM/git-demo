
//Function to creat input field and labels
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
function input_creat(inputtag,attri1,attri1val,attri2,attri2val,attri3,attri3val){
    var out = document.createElement(inputtag);
    out.setAttribute(attri1,attri1val);
    out.setAttribute(attri2,attri2val);
    out.setAttribute(attri3,attri3val);
    out.className = "max-width";
    return out;
}

function input_creat1(inputtag,attri1,attri1val,attri2,attri2val,attri3,attri3val){
    var out = document.createElement(inputtag);
    out.setAttribute(attri1,attri1val);
    out.setAttribute(attri2,attri2val);
    out.setAttribute(attri3,attri3val);
    out.className = "for_radio";
    return out;
}

function input_creat2(inputtag,attri1,attri1val,attri2,attri2val,attri3,attri3val,attri4,attri4val){
    var out = document.createElement(inputtag);
    out.setAttribute(attri1,attri1val);
    out.setAttribute(attri2,attri2val);
    out.setAttribute(attri3,attri3val);
    out.setAttribute(attri4,attri4val);
    out.className = "for_food";
    return out;
}

function input_creat4(inputtag,attri1,attri1val,attri2,attri2val,attri3,attri3val){
    var out = document.createElement(inputtag);
    out.setAttribute(attri1,attri1val);
    out.setAttribute(attri2,attri2val);
    out.setAttribute(attri3,attri3val);
    out.className = "max-width1";
    return out;
}
//End of function to creat input field and labels



var box = document.createElement("div");
box.className = "box";

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

var col4 = document.createElement("div");
col4.className = "col-md-4";

var bodypart = document.createElement("div");
bodypart.className = "body-part";

var content_div = document.createElement("div");
content_div.className = "content_class";

var LeftHeading = document.createElement("h1");
LeftHeading.innerHTML = "Form Submission:";


//Function to check for only 2 checkboxes
function fun(){
    let all_loc = document.querySelectorAll(".for_food");
    let a = 0;
    for(var i=0;i<all_loc.length;i++){
        if(all_loc[i].checked==true){
            a=a+1;
        }
    }
    if(a>2){
        alert("You can only select 2 checkbox for 'Choise of Food'");
        return false;
    }
}

var myforms = document.createElement("form");
myforms.setAttribute("id","myform");
myforms.setAttribute("action","formprocess.php");

var first_div = document.createElement("div");
first_div.className = "first_div";

var FirstName_label = label_creat("label","for","first","First Name:");
var br1 = break_creat();
var FirstName_input = input_creat("input","type","text","placeholder","First Name","id","first");
var br2 = break_creat();
var LastName_label = label_creat("label","for","last","Last Name:");
var br3 = break_creat();
var LastName_input = input_creat("input","type","text","placeholder","Last Name","id","last");
var br4 = break_creat();
var Address_1_label = label_creat("label","for","address1","Address Line 1:");
var br5 = break_creat();
var Address_1_input = input_creat("input","type","text","placeholder","Address Line 1","id","address1");
var br6 = break_creat();
var Address_2_label = label_creat("label","for","address2","Address Line 2:");
var br7 = break_creat();
var Address_2_input = input_creat("input","type","text","placeholder","Address Line 2","id","address2")
var br8 = break_creat();
var Pin_label = label_creat("label","for","pin","PIN:");
var br9 = break_creat();
var Pin_input = input_creat("input","type","text","placeholder","PIN","id","pin");
var br10 = break_creat();

first_div.append(FirstName_label,br1,FirstName_input,br2,LastName_label,br3,LastName_input,br4,Address_1_label,br5,
    Address_1_input,br6,Address_2_label,br7,Address_2_input,br8,Pin_label,br9,Pin_input,br10);

var gender_div = document.createElement("div");
gender_div.className = "genderclass";
gender_div.innerHTML = "Gender:"
var br11 = break_creat();
var radio1_label = label_creat("label","for","Male","Male");
var radio1_input = input_creat1("input","type","radio","id","Male","name","gender");
var radio2_label = label_creat("label","for","Female","Female");
var radio2_input = input_creat1("input","type","radio","id","Female","name","gender");

gender_div.append(br11,radio1_input,radio1_label,radio2_input,radio2_label);

var form = document.createElement("div");
form.className = "form_class";

var para = document.createElement("p");
para.className = "para_class";
para.innerHTML = `Choice of Food:`;

var italian = document.createElement("i");
italian.innerHTML = "(must choose atleast 2 out of 5 options)"

para.append(italian);

var checkbox_input1 = input_creat2("input","type","checkbox","id","Northindian","onclick","return fun()");
var checkbox_label1 = label_creat("label","for","Northindian","North Indian");
var br12 = break_creat();
var checkbox_input2 = input_creat2("input","type","checkbox","id","Southindian","onclick","return fun()");
var checkbox_label2 = label_creat("label","for","Southindian","South Indian");
var br13 = break_creat();
var checkbox_input3 = input_creat2("input","type","checkbox","id","Chinese","onclick","return fun()");
var checkbox_label3 = label_creat("label","for","Chinese","Chinese");
var br14 = break_creat();
var checkbox_input4 = input_creat2("input","type","checkbox","id","Japanese","onclick","return fun()");
var checkbox_label4 = label_creat("label","for","Japanese","Japanese");
var br15 = break_creat();
var checkbox_input5 = input_creat2("input","type","checkbox","id","Seafood","onclick","return fun()");
var checkbox_label5 = label_creat("label","for","Seafood","Sea Food");
var br16 = break_creat();

form.append(para,checkbox_input1,checkbox_label1,br12,checkbox_input2,checkbox_label2,br13,checkbox_input3,checkbox_label3,br14,checkbox_input4,checkbox_label4,br15,checkbox_input5,checkbox_label5,br16);

var lastdiv = document.createElement("div");
lastdiv.className = "lastdiv";

var state_label = label_creat("label","for","state","State:");
var br17 = break_creat();
var state_input = input_creat4("input","type","text","placeholder","State","id","state");
var br18 = break_creat();
var country_label = label_creat("label","for","country","Country:");
var br19 = break_creat();
var country_input = input_creat4("input","type","text","placeholder","Country","id","last");
var br20 = break_creat();

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("id","submit");
button.className="btn btn-dark";
button.innerHTML = "Submit";
button.addEventListener("click",getvalues);  //CHANGES

lastdiv.append(state_label,br17,state_input,br18,country_label,br19,country_input,br20,button);

myforms.append(first_div,gender_div,br10,form,lastdiv);

content_div.append(LeftHeading,myforms);

bodypart.append(content_div);
col4.append(bodypart);
    

//Check functions for empty values
//for top text fields
function check(){
    let temp1 = document.querySelectorAll(".max-width");
    let c = 0;
    for(var i=0;i<temp1.length;i++){
        if(temp1[i].value){
            c=c+1;
        }
    }
    if(c==temp1.length){
        return true;
    }
    else{
        alert(`For Submit need to fill all fields`);
        return false;
    }
}
//for check box field
function check1(){
    let temp = document.querySelectorAll(".for_food");
    let b = 0;
    for(var i=0;i<temp.length;i++){
        if(temp[i].checked==true){
            b=b+1;
        }
    }
    if(b<2){
        alert(`Need to select atleast 2 checkbox 'Choice of food'`);
        return false;
    }
    else{
        return true;
    }
}
//for radio input
function check2(){
    let temp2 = document.querySelectorAll(".for_radio");
    let d = 0;
    for(var i=0;i<temp2.length;i++){
        if(temp2[i].checked == true){
            d=d+1;
        }
    }
    if(d<1){
        alert(`Need to fill gender`)
        return false;
    }
    else{
        return true;
    }
}
//for bottom filds
function check3(){
    let temp3 = document.querySelectorAll(".max-width1");
    let e = 0;
    for(var i=0;i<temp3.length;i++){
        if(temp3[i].value){
            e=e+1;
        }
    }
    if(e==temp3.length){
        return true;
    }
    else{
        alert(`For Submit need to fill all fields`);
        return false;
    }
}
//End of Check functions for empty values//



//CONSOLE CHECK START -- BUTTON FUNCTION -- //
//function getvalues(){
//    if(check()==true && check1()==true && check2() && check3()){ //--Functions to check for empty values in input--//
//        var arr = document.querySelectorAll(".max-width");
//       for(i=0;i<arr.length;i++){
//            console.log(arr[i].value);
//        }
//        var arr1 = document.querySelectorAll(".for_radio");
//        for(i=0;i<arr1.length;i++){
//            if(arr1[i].checked){
//                console.log(arr1[i].id);
//            }
//        }
//        var arr2 = document.querySelectorAll(".for_food");
//        for(i=0;i<arr2.length;i++){
//            if(arr2[i].checked){
//                console.log(arr2[i].id);
//            }
//        }
//        var arr3 = document.querySelectorAll(".max-width1");
//        for(i=0;i<arr3.length;i++){
//            console.log(arr3[i].value);
//        }
//    }
//   else{
//        return false;
//    }
//}
//CONSOLE CHECK END -- BUTTON FUNCTION -- //
//END OF HALF SIDE


// START OF 2ND HALF
// Function for Table Structure
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
//functions of table structure ends


// 2nd half TABLES
var col5 = document.createElement("div");
col5.className = "col-md-8";

var bodypart1 = document.createElement("div");
bodypart1.className = "body-part";

var tabel_content_div = document.createElement("div");
tabel_content_div.className = "content_class";

var RightHeading = document.createElement("h1");
RightHeading.innerHTML = "Temporary Database";

var table_div = document.createElement("div");
table_div.className = "tabelclass_div";

var table = document.createElement("table");
table.className =  "table table-striped";

var thead = document.createElement("thead");
thead.className = "thead-dark";

//Table Head thead fields
var thead_tr = create_tr();
var th1 = create_th("th","scope","col","First Name");
var th2 = create_th("th","scope","col","Last Name");
var th3 = create_th("th","scope","col","Address Line1");
var th4 = create_th("th","scope","col","Address Line2");
var th5 = create_th("th","scope","col","Pincode");
var th6 = create_th("th","scope","col","Gender");
var th7 = create_th("th","scope","col","Selected Food");
var th8 = create_th("th","scope","col","State");
var th9 = create_th("th","scope","col","Country");

thead_tr.append(th1,th2,th3,th4,th5,th6,th7,th8,th9);
thead.append(thead_tr);
//End of Table Head thead fields


var tbody =  document.createElement("tbody");

//changes start for reset form
//function inspect(){
//    getvalues();
//    document.getElementById("myform").reset();
//}



//Button function to display in WEB-PAGE
function getvalues(){
    if(check()==true && check1()==true && check2() && check3()){ //--Functions to check for empty values in input--//
        var tbody_tr = create_tr();
        var arr = document.querySelectorAll(".max-width");
        for(i=0;i<arr.length;i++){
            var td = create_td("td",arr[i].value);
            td.innerHTML = `${arr[i].value}`
            tbody_tr.append(td);
        }
        var arr1 = document.querySelectorAll(".for_radio");
        for(i=0;i<arr1.length;i++){
            if(arr1[i].checked){
                var td1 = create_td("td",'');
                td1.innerHTML = `${arr1[i].id}`
                tbody_tr.append(td1);
            }
        }
        var arr2 = document.querySelectorAll(".for_food");
        let temp = [];
        for(i=0;i<arr2.length;i++){
            if(arr2[i].checked){
                var temp2 = arr2[i].id;
                temp.push(temp2);
            }
        }
        var td2 = create_td("td",'');
        td2.append(temp.join(','));
        tbody_tr.append(td2);

        var arr3 = document.querySelectorAll(".max-width1");
        for(i=0;i<arr3.length;i++){
            var td3 = create_td("td",arr3[i].value);
            td.innerHTML = `${arr3[i].value}`
            tbody_tr.append(td3);
        }
        tbody.append(tbody_tr);
        document.getElementById("myform").reset();
    }
    else{
        return false;
    }
}
//END


table.append(thead,tbody);
table_div.append(table);


tabel_content_div.append(RightHeading,table_div);
bodypart1.append(tabel_content_div);



col5.append(bodypart1);
row.append(col4,col5);


container.append(row);
box.append(container);
document.body.append(box);



