
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

const btnlist = document.getElementById("btn");
btnlist.onclick = function(e){
    changeBTN(e.target.value);
}

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

const p6 = document.getElementById("p6");
console.log(p6.children)
for(let i = 0; i < p6.childElementCount ; i++){
    p6.children[i].innerText = preset[6][i];
}



// const livedraw = document.getElementById("livedraw");

// livedraw.onclick = function(){
//     changelivedraw(this.checked)
// }

