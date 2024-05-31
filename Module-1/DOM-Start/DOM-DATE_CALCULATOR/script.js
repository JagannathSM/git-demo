var parent_div = document.createElement("div");
parent_div.className="main";

var user_date = document.createElement("input");
user_date.setAttribute("type","date");
user_date.setAttribute("id","dob");

var button = document.createElement("button");
button.setAttribute("type","button");
button.className="btn btn-dark";
button.innerHTML = "Check";
button.addEventListener("click",getvalues);


parent_div.append(user_date,button);
document.body.append(parent_div);



function getvalues(){
    var input = document.getElementById("dob").value;
    var inputdate = new Date(input);
    var currentdate = new Date();
    var millisecond_diff = parseInt(currentdate.getTime())-parseInt(inputdate.getTime());
    var seconds_diff = Math.floor(millisecond_diff/1000);
    var min_diff = Math.floor(seconds_diff/60);
    var hours_diff = Math.floor(min_diff/60);
    var days_diff = Math.floor(hours_diff/24);
    var year_diff = currentdate.getFullYear() - inputdate.getFullYear();
    var month_diff = (year_diff*12)+(currentdate.getMonth()-inputdate.getMonth());

    console.log(`InputDate: ${inputdate}, Years: ${year_diff}, Months: ${month_diff}, Days: ${days_diff},
    Hours: ${hours_diff}, Minutes: ${min_diff}, Seconds: ${seconds_diff}, Milliseconds: ${millisecond_diff}`);

    var outputdiv = document.createElement("div");
    outputdiv.className="main1";

    var p1 = document.createElement("p");
    p1.append(`BirthDay: ${inputdate}`);
    var p2 = document.createElement("p");
    p2.append(`Years: ${year_diff}`);
    var p3 = document.createElement("p");
    p3.append(`Months: ${month_diff}`);
    var p4 = document.createElement("p");
    p4.append(`Days: ${days_diff}`);
    var p5 = document.createElement("p");
    p5.append(`Hours: ${hours_diff}`);
    var p6 = document.createElement("p");
    p6.append(`Minutes: ${min_diff}`);
    var p7 = document.createElement("p");
    p7.append(`Seconds: ${seconds_diff}`);
    var p8 = document.createElement("p");
    p8.append(`Milliseconds: ${millisecond_diff}`);

    outputdiv.append(p1,p2,p3,p4,p5,p6,p7,p8);

    document.body.append(outputdiv);
}