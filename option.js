
import {changeSpeed,changelong,changelivedraw, changeBTN, 
    preset, currentBTN, changePreset, escapeStop, Unshift,
    changeDivision} from "./field.js"


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

const divisionTag = document.getElementById("drawdivision");
divisionTag.onclick = function(){
    changeDivision(this.checked);
}

//키 변경 버튼 이벤트
const btnlist = document.getElementById("changekeyBTN");
btnlist.onclick = function(e){
    if(e.target.value === undefined) return;
    changeBTN(e.target.value);
    for(let i = 0; i < presetTag.childElementCount ; i++){
        presetTag.children[i].style.display = "none";
        if(presetTag.children[i].id === ("p"+currentBTN))
            presetTag.children[i].style.display = "block";
    }
}

//프리셋 설정 이벤트
export let isPresetInput = false;
let changingIndex = 0; //바꾸려는 버튼의 index
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
    let inputkey = e.key.toUpperCase() + e.location;
    if(Unshift.hasOwnProperty(inputkey)) inputkey = Unshift[inputkey];

    if (inputkey != "ESCAPE0"){
        changingBTN.innerText = (inputkey === ' 0' ? "SPACEBAR" : inputkey.slice(0,-1));
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

//초기 버튼 프리셋
const p4 = document.getElementsByClassName("p4_btn");
for(let i = 0; i < p4.length ; i++){
    p4[i].innerText = preset[4][i].slice(0,-1);
}
const p5 = document.getElementsByClassName("p5_btn");
for(let i = 0; i < p5.length ; i++){
    p5[i].innerText = preset[5][i].slice(0,-1);
}
const p6 = document.getElementsByClassName("p6_btn");
for(let i = 0; i < p6.length ; i++){
    p6[i].innerText = preset[6][i].slice(0,-1);
}
const p8 = document.getElementsByClassName("p8_btn");
for(let i = 0; i < p8.length ; i++){
    if(preset[8][i] === ' 0') p8[i].innerText = "SPACEBAR";
    else p8[i].innerText = preset[8][i].slice(0,-1);
}



// const livedraw = document.getElementById("livedraw");

// livedraw.onclick = function(){
//     changelivedraw(this.checked)
// }

