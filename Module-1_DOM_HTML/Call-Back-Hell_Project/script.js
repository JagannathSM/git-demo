var div = document.createElement("div");
div.className = "div_class";

var h1 = document.createElement("h1");
h1.innerHTML=``;
h1.setAttribute("id","heading");

div.append(h1);
document.body.append(div);


setTimeout(function(){
    document.querySelector("h1").innerHTML = `Countdown - 10`;
    setTimeout(function(){
        document.querySelector("h1").innerHTML = `Countdown - 9`;
        setTimeout(function(){
            document.querySelector("h1").innerHTML = `Countdown - 8`;
            setTimeout(function(){
                document.querySelector("h1").innerHTML = `Countdown - 7`;
                setTimeout(function(){
                    document.querySelector("h1").innerHTML = `Countdown - 6`;
                    setTimeout(function(){
                        document.querySelector("h1").innerHTML = `Countdown - 5`;
                        setTimeout(function(){
                            document.querySelector("h1").innerHTML = `Countdown - 4`;
                            setTimeout(function(){
                                document.querySelector("h1").innerHTML = `Countdown - 3`;
                                setTimeout(function(){
                                    document.querySelector("h1").innerHTML = `Countdown - 2`;
                                    setTimeout(function(){
                                        document.querySelector("h1").innerHTML = `Countdown - 1`;
                                        setTimeout(function(){
                                            document.querySelector("h1").innerHTML = `Happy Independence day`;
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);


