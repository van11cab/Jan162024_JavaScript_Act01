"use strict";

function calculate(){
     

    let input1 = document.getElementById("name1").value; 
    let input2 = document.getElementById("name2").value; 

    document.getElementById("comment").textContent = "";
    document.getElementById("score").textContent = "";
    document.getElementById("textresult").textContent = "";

    document.body.style.transition= "all .5s ease-in";
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundSize = "contain ";
    document.body.style.backgroundRepeat = "no-repeat ";
    document.body.style.backgroundPosition = "bottom center";
    document.getElementById("title").style.color = "black";


    document.getElementsByTagName("button")[0].style.backgroundColor = "#ff5338";

    if(input_checker(input1) || input_checker(input2)){
        console.log("entered");
        document.getElementById("title").style.color =  document.getElementById("result_holder").style.color;
        document.getElementById("comment").textContent = "Empty input!";
        return;
    }

    let lovescore = Math.floor(Math.random()*101);

    let comment;
    
    
    if(lovescore <= 30){    
        document.body.style.backgroundColor = "#75c1ff";
        document.getElementById("result_holder").style.color = "#005194";
        document.getElementById("plus").style.color = "#005194";
        document.body.style.backgroundImage = "url('img/cold.png')";
        document.getElementsByTagName("button")[0].style.backgroundColor = "#005194";
        document.getElementById("title").style.color = "#005194";

        let input_tag= document.getElementsByTagName("input");
        for(var i of input_tag){
            i.style.color = "#005194";
        }

        comment = "You are good friends!";
    }else if(lovescore <= 60){
        document.body.style.backgroundColor = "white";
        document.getElementById("result_holder").style.color = "#c93720";
        document.getElementById("plus").style.color = "#c93720";
        document.getElementById("title").style.color = "#c93720";
        document.body.style.backgroundImage = "url('img/love_hate.png')";
        let input_tag= document.getElementsByTagName("input");
        for(var i of input_tag){
            i.style.color = "#c93720";
        }

        comment= "You are in a love-hate relationship!";
    }else if(lovescore <= 80){
        document.body.style.backgroundColor = "#ff7d69";
        document.getElementById("result_holder").style.color = "#940011";
        document.getElementById("plus").style.color = "#940011";
        document.getElementById("title").style.color = "#940011";
        document.body.style.backgroundImage = "url('img/love.png')";
        
        let input_tag= document.getElementsByTagName("input");
        for(var i of input_tag){
            i.style.color = "#940011";
        }

        comment = "You are in a lovely relationship!";
    }else{
        comment = "You are forever lovers!";
        document.getElementById("result_holder").style.color = "white";
        document.getElementById("plus").style.color = "white";
        document.getElementById("title").style.color = "white";
        document.body.style.backgroundImage = "url('img/love_lv2.png')";
        document.body.style.backgroundColor = "#c93720";
        let input_tag= document.getElementsByTagName("input");
        for(var i of input_tag){
            i.style.color = "white";
        }
    }

    document.getElementById("result_holder").style.transition= "all .5s ease-in";
    document.getElementById("textresult").textContent = "Compatibility is at...";
    document.getElementById("score").textContent = lovescore + "%";
    document.getElementById("comment").textContent = comment;
}

function input_checker(input){
    if (input.length == 0|| input.trim() === ("")) return true;
    else return false;
}
