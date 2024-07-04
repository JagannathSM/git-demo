

function create_tr(attri1,attri1val){
    var tr0 = document.createElement("tr");
    tr0.setAttribute(attri1,attri1val);
    return tr0;
}

function create_tr_h(){
    var tr0 = document.createElement("tr");
    return tr0;
}

function create_th(tagname,classname,value,content){
    var th0 = document.createElement(tagname);
    th0.setAttribute(classname,value);
    th0.innerHTML = content;
    return th0; 
}

function create_td(tagname,content){
    var td0 = document.createElement(tagname);
    td0.innerHTML = content;
    return td0; 
}


var container = document.createElement("div");
container.className = "container";

var container_row = document.createElement("div");
container_row.className = "row";

var container_col = document.createElement("div");
container_col.className = "col-md-12";

var container_col_body = document.createElement("div");
container_col_body.className = "body-part";

var tabel_topper = document.createElement("div");
tabel_topper.className = "first_part";

var tabel_part = document.createElement("div");
tabel_part.className = "tabel_part";

//TABEL STARTS
var table = document.createElement("table");
table.className =  "table table-striped";

var thead = document.createElement("thead");
thead.className = "thead-dark";

var thead_tr = create_tr_h();
var th1 = create_th("th","scope","col","ID");
var th2 = create_th("th","scope","col","NAME");
var th3 =create_th("th","scope","col","EMAIL");
thead_tr.append(th1,th2,th3);
thead.append(thead_tr);

var tbody = document.createElement("tbody");

function checkfun(x){
    showvalues(x-1);
}

function showvalues(){
    var req = new XMLHttpRequest();
    req.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
    req.send();
    req.onload = function(){
        res = JSON.parse(req.response);
        var active_pg = document.querySelector(".active");
        var n = parseInt(active_pg.id);
        var start_index = (n-1)*10;
        var last_index = (start_index+10);
        for(i=start_index;i<last_index;i++){
            var tbody_tr = create_tr("class","delete");
            var td1 = create_td("td",res[i].id);
            var td2 = create_td("td",res[i].name);
            var td3 = create_td("td",res[i].email);

            tbody_tr.append(td1,td2,td3);
            tbody.append(tbody_tr);
        }
    }
}


table.append(thead,tbody);
tabel_part.append(table);

//TABEL ENDS

var tabel_footer = document.createElement("div");
tabel_footer.className = "last_part";

var tabel_footer_last = document.createElement("div");
tabel_footer_last.className = "footer_last"


//BUTTON FUNCTIONS

function buttons(attri1,attri1val,content,attri2,attri2val){
    var button_ele = document.createElement("button");
    button_ele.setAttribute(attri1,attri1val);
    button_ele.append(content);
    button_ele.addEventListener(attri2,attri2val);
    return button_ele;
}
function buttons1(attri1,attri1val,content,attri2,attri2val,attri3,attri3val){
    var button_ele = document.createElement("button");
    button_ele.setAttribute(attri1,attri1val);
    button_ele.innerHTML = content;
    button_ele.addEventListener(attri2,attri2val);
    button_ele.setAttribute(attri3,attri3val);
    return button_ele;
}

function page_btn(content,attri1,attri1val,attri2,attri2val){
    var page_button_ele = document.createElement("button");
    page_button_ele.classList = "page";
    page_button_ele.innerHTML = content;
    page_button_ele.addEventListener(attri1,attri1val);
    page_button_ele.setAttribute(attri2,attri2val);
    return page_button_ele;
}

var previous_button_i = document.createElement("i");
previous_button_i.className = "fa fa-chevron-circle-left fa-2x";
previous_button_i.setAttribute("aria-hidden","true");

var prev_btn = buttons("class","btn prev",previous_button_i,"click",prev_fun);

var next_button_i = document.createElement("i");
next_button_i.className = "fa fa-chevron-circle-right fa-2x";
next_button_i.setAttribute("aria-hidden","true");

var next_btn = buttons("class","btn next",next_button_i,"click",next_fun);

var btn_page_1 = buttons1("class","page active","1","click",indexpage_fun,"id","1");
var btn_page_2 = page_btn("2","click",indexpage_fun,"id","2");
var btn_page_3 = page_btn("3","click",indexpage_fun,"id","3");
var btn_page_4 = page_btn("4","click",indexpage_fun,"id","4");
var btn_page_5 = page_btn("5","click",indexpage_fun,"id","5");
var btn_page_6 = page_btn("6","click",indexpage_fun,"id","6");
var btn_page_7 = page_btn("7","click",indexpage_fun,"id","7");
var btn_page_8 = page_btn("8","click",indexpage_fun,"id","8");
var btn_page_9 = page_btn("9","click",indexpage_fun,"id","9");
var btn_page_10 = page_btn("10","click",indexpage_fun,"id","10");

tabel_footer_last.append(prev_btn,btn_page_1,btn_page_2,btn_page_3,btn_page_4,btn_page_5,btn_page_6,btn_page_7,btn_page_8,btn_page_9,btn_page_10,next_btn);



tabel_footer.append(tabel_footer_last);
container_col_body.append(tabel_topper,tabel_part,tabel_footer);
container_col.append(container_col_body);
container_row.append(container_col);
container.append(container_row);
document.body.append(container);

var pages = document.querySelectorAll(".page");


function next_fun(){
    var val = document.querySelector(".active");
    var cpage= parseInt(val.id);
    currentpage = cpage-1;
    if(currentpage==pages.length -1){
        alert ('End of List');
        return false;
    }
    pages[currentpage].classList.remove("active");
    currentpage++;
    pages[currentpage].classList.add("active");
    reset_showvalues();
}

function prev_fun(){
    var val = document.querySelector(".active");
    var cpage= parseInt(val.id);
    currentpage = cpage-1;
    if(currentpage==0){
        alert ('This is Starting page');
        return false;
    }
    pages[currentpage].classList.remove("active");
    currentpage--;
    pages[currentpage].classList.add("active");
    reset_showvalues();
}


var val = document.querySelectorAll(".page");

function indexpage_fun(){
    for(i=0;i<val.length;i++){
        val[i].classList.remove("active");
    }
    event.target.classList.add("active");
    reset_showvalues();
}

function reset_showvalues(){
    var del = document.getElementsByClassName("delete");
    console.log(del)
    while(del.length>0){
        del[0].remove();
    }
    showvalues();
}

document.onload(showvalues());

