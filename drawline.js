import {ctx, line,height} from "./field.js";

let drawline = {
    4: line4,
    5: line5,
    6: line6,
    8: line8,
};

function line4(){
    ctx.fillStyle = "white";
    line[0].notes.map((note)=> ctx.fillRect(0, height- note.time, 150, note.height) );
    ctx.fillStyle = "blue";
    line[1].notes.map((note)=> ctx.fillRect(150, height- note.time, 150, note.height) );
    ctx.fillStyle = "white";
    line[2].notes.map((note)=> ctx.fillRect(300, height- note.time, 150, note.height) );
    ctx.fillStyle = "blue";
    line[3].notes.map((note)=> ctx.fillRect(450, height- note.time, 150, note.height) );
          
}
function line5(){
    
}
function line6(){
    
}
function line8(){
    
}

export {drawline}