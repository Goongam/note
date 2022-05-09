
import {changeSpeed,changelong,changelivedraw, changeBTN, 
    preset, currentBTN, changePreset, escapeStop} from "./field.js"


const text = document.createTextNode("\u00A0");    

const speedRange = document.getElementById("speedrange");
const speedLabel = document.getElementById("speedlabel");

speedRange.oninput = function(){

    changeSpeed(parseInt(this.value))
    speedLabel.childNodes[0].data = "속도: "+this.value
 
}


const longRange = document.getElementById("longrange");
const longLabel = document.getElementById("longlabel");

longRange.oninput = function(){

    longLabel.childNodes[0].data = "롱노트시간: "+this.value*5+"ms"
    changelong(parseInt(this.value))
    console.log(btn)
}

//키 변경 버튼 이벤트
const btnlist = document.getElementById("changekeyBTN");
btnlist.onclick = function(e){
    changeBTN(e.target.value);
    for(let i = 0; i < presetTag.childElementCount ; i++){
        presetTag.children[i].style.display = "none";
        if(presetTag.children[i].id === ("p"+currentBTN))
            presetTag.children[i].style.display = "block";
    }
}

//프리셋 설정 이벤트
export let isPresetInput = false;
let changingIndex = 0; //바꾸는 버튼의 index
let changingBTN = null;
const presetTag = document.getElementById("preset");
const presetInputTag = document.getElementById("presetInput");
presetTag.onclick = function(e){
        
    // console.log(preset[currentBTN][e.target.value])
    changingBTN = e.target;
    changingIndex = e.target.value;
    presetInputTag.style.display = "block";
    isPresetInput = true;
    escapeStop(); //field정지
    
    document.addEventListener("keyup",presetInputFunc)
}

function presetInputFunc(e){
    let inputkey = e.key.toUpperCase();
    if (inputkey != "ESCAPE"){
        
        changingBTN.innerText = (inputkey === ' ' ? "SPACEBAR" : inputkey);
        
        changePreset(changingIndex, inputkey);
    }
    
    presetInputTag.style.display = "none";
    document.removeEventListener("keyup",presetInputFunc);
    isPresetInput = false;
}

//마우스on->버튼 활성화/비활성화
presetTag.onmouseenter = function(e){
    // this.children[0].children[0].disabled = false
    for(let i =0; i < this.childElementCount ; i++){
        for(let j = 0; j < this.children[i].childElementCount; j++){
            this.children[i].children[j].disabled = false;
        }
    }
}
presetTag.onmouseleave = function(e){
    for(let i =0; i < this.childElementCount ; i++){
        for(let j = 0; j < this.children[i].childElementCount; j++){
            this.children[i].children[j].disabled = true;
        }
    }
}

const p4 = document.getElementById("p4");
for(let i = 0; i < p4.childElementCount ; i++){
    p4.children[i].innerText = preset[4][i];
}
const p5 = document.getElementById("p5");
for(let i = 0; i < p5.childElementCount ; i++){
    p5.children[i].innerText = preset[5][i];
}
const p6 = document.getElementById("p6");
for(let i = 0; i < p6.childElementCount ; i++){
    p6.children[i].innerText = preset[6][i];
}
const p8 = document.getElementsByClassName("p8_btn");
for(let i = 0; i < p8.length ; i++){
    if(preset[8][i] === ' ') p8[i].innerText = "SPACEBAR";
    else p8[i].innerText = preset[8][i];
}



// const livedraw = document.getElementById("livedraw");

// livedraw.onclick = function(){
//     changelivedraw(this.checked)
// }

