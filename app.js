var hour=0;
var min=0;
var sec=0;
var msec=0;

var minhead=document.getElementById("min");
var hourhead=document.getElementById("hour");
var sechead=document.getElementById("sec");
var msechead=document.getElementById("msec");

var interval;

function timer(){
msec++;
msechead.innerHTML=msec;
    if(msec>=100){
        sec++;
        sechead.innerHTML=sec;
        msec=0;
    }else if(sec>=60){
        min++;
        minhead.innerHTML=min;
        sec=0;
    }
    else if(min>=60){
        hour++;
        hourhead.innerHTML=hour;
        hour=0;
    }
}
var startc = document.getElementById("start");


function start(){
    interval = setInterval(timer,10);
    startc.setAttribute("disabled","");
}

function pause(){
    clearInterval(interval);
    startc.removeAttribute("disabled", "");
}

function stop(){
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourhead.innerHTML = hour;
    minhead.innerHTML = min;
    sechead.innerHTML = sec;
    msechead.innerHTML = msec;
    clearInterval(interval);
    startc.removeAttribute("disabled", "");
}
