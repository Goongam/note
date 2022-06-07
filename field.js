import {isPresetInput} from "./option.js";
import {drawline} from "./drawline.js";

let tick = 5, speed = 5,  longnoteTime = 52, livedraw = true; //option
let width = 600, default_height = 500; //default canvas setting

let time = 0, height = 0;
let isDrawDivision = false;
//let x=300, y=25;
let currentBTN = 4;

const ctxDivisionHeight = 40000;

let preset = {
    4:['SHIFT1','SHIFT2','A0','S0',';0','\'0'],
    5:['SHIFT1','SHIFT2','A0','S0','D0','L0',';0','\'0'],
    6:['SHIFT1','SHIFT2','A0','S0','D0','L0',';0','\'0'],
    8:['CAPSLOCK0','+3','Q0','W0','E0','73','83','93',' 0','ARROWRIGHT0']
}

let ctxList = []

//let downshift = false;
const Unshift = {
    ":0":";0",
    "\"0":"'0",
    "<0":",0",
    ">0":".0",
    "?0":"/0",
    "{0":"[0",
    "}0":"]0",
    "~0":"`0",
    "!0":"10",
    "@0":"20",
    "#0":"30",
    "$0":"40",
    "%0":"50",
    "^0":"60",
    "&0":"70",
    "*0":"80",
    "(0":"90",
    ")0":"00",
    "_0":"-0",
    
}

let stop = true;

let ctx, canvas;
const cv_con = document.getElementById("cv-container");
const copy_cv_con = document.getElementById("copy-cv-container");

// let canvas = document.getElementById("field");
// canvas.width = width;
// canvas.height = default_height;
// //canvas.style.border = "1px solid white";
// let ctx = canvas.getContext("2d");
// //document.body.appendChild(canvas);
// ctxList.push(ctx);


let line;

class key{
    notes = [];
    keydown= false;
    presstime= 0;
}




class note {
    constructor(time, height, ctx){
        this.time = time;
        this.height = height;
        this.ctx = ctx;
    }
}

//longnotetime, speed 변경함수 export
function changeSpeed(value){
    speed = value;
    console.log("스피드:"+value)
}
function changelong(value){
    longnoteTime = value;
    console.log("롱노트:"+value)
}
function changelivedraw(value){
    livedraw = value;
}
function changeBTN(value){
    currentBTN = value;
    console.log("현재 키: "+currentBTN);
    setCookie("BTN",currentBTN,365);
    draw();
}
function changePreset(changingValue, inputvalue){
    
    preset[currentBTN][changingValue] = inputvalue;
    console.log("변경: "+preset[currentBTN])
    setCookie("PRESET4",preset[4],365);
    setCookie("PRESET5",preset[5],365);
    setCookie("PRESET6",preset[6],365);
    setCookie("PRESET8",preset[8],365);
    console.log("COOKIE: "+getCookie("PRESET4"));
}
function changeDivision(value){
    isDrawDivision = value;
    setCookie("DivisionLine",isDrawDivision,365);
    draw();
}


function makeNewCtx(){
    canvas.height = height;
    copy_cv_con.prepend(canvas);

    time = 0;
    height = 0;
    canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = 0;
    ctx = canvas.getContext("2d");
    cv_con.prepend(canvas);
    ctxList.push(ctx);

    
}
function escapeStop(){
    stop = true;

    makeNewCtx();
    copy_cv_con.style.display = "block";
    //canvas.height = time;
    draw();

}

function setCookie(name, value, exp) {
    let date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    
    if(Array.isArray(value))
        value = value.join(',').replace( /;/gi, ':');
 
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';  
};
function deleteCookie(name) {      
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';  
}
function getCookie(name) {      
    let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2].replace( /:/gi, ';') : null;  
};


export {changeSpeed,changelong,changelivedraw,changeBTN,preset,
currentBTN, changePreset, escapeStop,Unshift, ctx, line, height,
 isDrawDivision,changeDivision,getCookie,setCookie, ctxList,stop}

setInterval(function () {
    
    if(!stop){
        update();
       if(livedraw)draw();
       //console.log(speed)
    
    }
}, tick)


function init(){
    while(copy_cv_con.hasChildNodes()){
        copy_cv_con.removeChild(copy_cv_con.firstChild);
    }
    while(cv_con.hasChildNodes()){
        cv_con.removeChild(cv_con.firstChild);
    }
    ctxList = [];
    canvas = document.createElement("canvas"); //첫 캔버스 생성
    canvas.width = width;
    canvas.height = default_height;
    ctx = canvas.getContext("2d");
    cv_con.prepend(canvas);
    ctxList.push(ctx);  //첫 캔버스 생성

    line = [];
    for(let i = 0; i < 10; i++){
        line.push(new key());
    }
    height = 0;
    time = 0;

}
function draw() {
    //ctx.save();
    //canvas.height = time;
    ctx.fillStyle = "black";            //지우기
    ctx.fillRect(0, 0, width, canvas.height);  //지우기
    
    if(stop){
        ctxList.map((ctx)=>ctx.fillStyle = "black");
        ctxList.map((ctx)=>ctx.fillRect(0, 0, width, ctx.canvas.height));
    }

    drawline1(ctx);
    //ctx.restore();

}
function pressnote(){
  
    line.map((li) => {
        if(li.keydown) li.presstime++
    });
}

function drawline1(ctx){
    drawline[currentBTN]();
    // console.log(downshift); 
}
function update(){
    height+=speed;
    time += speed;
    pressnote();

    if(time > ctxDivisionHeight && isAllLineNoKeyDown()) {
        makeNewCtx();
        console.log("CTX생성");
    }
}

function isAllLineNoKeyDown(){
    let b = true;
    line.map((l)=> {if(l.keydown) b = false});
    return b;
}

function onliveshow(){
    stop = false;
    canvas.height = default_height;
    copy_cv_con.style.display = "none";
}

let downkey;
document.addEventListener("keydown", function (e) {
    downkey = e.key.toUpperCase() + e.location;
    if(isPresetInput) return;
    
    if(Unshift.hasOwnProperty(downkey)) downkey = Unshift[downkey];
    if(stop && preset[currentBTN].includes(downkey)){ //멈춤상태, 입력==프리셋키
        onliveshow()
    }
    
    //console.log(downkey);
    
    if(downkey == preset[currentBTN][0]) {line[0].keydown = true;} //
    if(downkey == preset[currentBTN][1]) {line[1].keydown = true;}
    if(downkey == preset[currentBTN][2]) {line[2].keydown = true;}
    if(downkey == preset[currentBTN][3]) {line[3].keydown = true;}
    if(downkey == preset[currentBTN][4]) {line[4].keydown = true;}
    if(downkey == preset[currentBTN][5]) {line[5].keydown = true;}
    if(downkey == preset[currentBTN][6] && currentBTN != 4) {line[6].keydown = true;}
    if(downkey == preset[currentBTN][7] && currentBTN != 4) {line[7].keydown = true;}
    if(downkey == preset[currentBTN][8] && currentBTN == 8) {line[8].keydown = true;}
    if(downkey == preset[currentBTN][9] && currentBTN == 8) {line[9].keydown = true;}
    if(downkey == 'ESCAPE0') {  //esc
        if(stop) {//초기화
            
            init();
            draw();
            //deleteCookie("PRESET")
            
            
            return;
        }
        escapeStop();
    }
    
});

function keyup(line){
    
    line.keydown = false;
    // line.notes.push(line.presstime > longnoteTime ? new note(time,line.presstime * speed) : new note(time ,15));
    
    line.notes.push(line.presstime > longnoteTime ? new note(time,line.presstime * speed,ctx) : new note(time - line.presstime*speed + 15,15,ctx));
    line.presstime = 0;
}

let upkey;
document.addEventListener("keyup", function (e) {
    if(isPresetInput) return;
    upkey = e.key.toUpperCase() + e.location;

    if(Unshift.hasOwnProperty(upkey)) upkey = Unshift[upkey]; //shift안누른 키로처리
                
    for(let i = 0; i < 10 ; i++){
    
        if(upkey == preset[currentBTN][i]) keyup(line[i]);
    }
    

});


init();