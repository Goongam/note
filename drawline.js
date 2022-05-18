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
    ctx.fillStyle = "white";
    line[0].notes.map((note)=> ctx.fillRect(0, height- note.time, 120, note.height) );
    ctx.fillStyle = "blue";
    line[1].notes.map((note)=> ctx.fillRect(120, height- note.time, 120, note.height) );
    ctx.fillStyle = "white";
    line[2].notes.map((note)=> ctx.fillRect(240, height- note.time, 120, note.height) );
    ctx.fillStyle = "blue";
    line[3].notes.map((note)=> ctx.fillRect(240, height- note.time, 120, note.height) );
    ctx.fillStyle = "white";
    line[4].notes.map((note)=> ctx.fillRect(360, height- note.time, 120, note.height) );
    ctx.fillStyle = "blue";
    line[5].notes.map((note)=> ctx.fillRect(480, height- note.time, 120, note.height) );
}
function line6(){
    ctx.fillStyle = "white";
    line[0].notes.map((note)=> ctx.fillRect(0, height- note.time, 100, note.height) );
    ctx.fillStyle = "blue";
    line[1].notes.map((note)=> ctx.fillRect(100, height- note.time, 100, note.height) );
    ctx.fillStyle = "white";
    line[2].notes.map((note)=> ctx.fillRect(200, height- note.time, 100, note.height) );
    ctx.fillStyle = "blue";
    line[3].notes.map((note)=> ctx.fillRect(300, height- note.time, 100, note.height) );
    ctx.fillStyle = "white";
    line[4].notes.map((note)=> ctx.fillRect(400, height- note.time, 100, note.height) );
    ctx.fillStyle = "blue";
    line[5].notes.map((note)=> ctx.fillRect(500, height- note.time, 100, note.height) );
}
function line8(){
    
    ctx.fillStyle = "red";
    line[6].notes.map((note)=> ctx.fillRect(0, height- note.time, 300, note.height) );
    line[7].notes.map((note)=> ctx.fillRect(300, height- note.time, 300, note.height) );

    ctx.fillStyle = "white";
    line[0].notes.map((note)=> ctx.fillRect(0, height- note.time, 100, note.height) );
    ctx.fillStyle = "blue";
    line[1].notes.map((note)=> ctx.fillRect(100, height- note.time, 100, note.height) );
    ctx.fillStyle = "white";
    line[2].notes.map((note)=> ctx.fillRect(200, height- note.time, 100, note.height) );
    ctx.fillStyle = "blue";
    line[3].notes.map((note)=> ctx.fillRect(300, height- note.time, 100, note.height) );
    ctx.fillStyle = "white";
    line[4].notes.map((note)=> ctx.fillRect(400, height- note.time, 100, note.height) );
    ctx.fillStyle = "blue";
    line[5].notes.map((note)=> ctx.fillRect(500, height- note.time, 100, note.height) );
}

export {drawline}