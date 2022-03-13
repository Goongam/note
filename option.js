
import {changeSpeed,changelong,changelivedraw} from "./field.js"


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
}

const livedraw = document.getElementById("livedraw");

livedraw.onclick = function(){
    changelivedraw(this.checked)
}