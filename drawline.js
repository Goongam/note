import {ctx, line,height,isDrawDivision} from "./field.js";

let drawline = {
    4: line4,
    5: line5,
    6: line6,
    8: line8,
};

function line4(){
    if(isDrawDivision){
        ctx.beginPath();
        ctx.strokeStyle = "gray";

        ctx.moveTo(150,0);
        ctx.lineTo(150,height);
        
        ctx.moveTo(300,0);
        ctx.lineTo(300,height);

        ctx.moveTo(450,0);
        ctx.lineTo(450,height);

        ctx.stroke();
    }
    
    
    ctx.fillStyle = "aquamarine";
    line[0].notes.map((note)=> ctx.fillRect(0, height- note.time, 300, note.height) );
    line[1].notes.map((note)=> ctx.fillRect(300, height- note.time, 300, note.height) );

    ctx.fillStyle = "white";
    line[2].notes.map((note)=> ctx.fillRect(0, height- note.time, 150, note.height) );
    ctx.fillStyle = "blue";
    line[3].notes.map((note)=> ctx.fillRect(150, height- note.time, 150, note.height) );
    ctx.fillStyle = "white";
    line[4].notes.map((note)=> ctx.fillRect(300, height- note.time, 150, note.height) );
    ctx.fillStyle = "blue";
    line[5].notes.map((note)=> ctx.fillRect(450, height- note.time, 150, note.height) );
    
    
}
function line5(){
    if(isDrawDivision){
        ctx.beginPath();
        ctx.strokeStyle = "gray";
        ctx.moveTo(120,0);
        ctx.lineTo(120,height);
        ctx.moveTo(240,0);
        ctx.lineTo(240,height);
        ctx.moveTo(360,0);
        ctx.lineTo(360,height);
        ctx.moveTo(480,0);
        ctx.lineTo(480,height);
        ctx.stroke();
    }
    ctx.fillStyle = "aquamarine";
    line[0].notes.map((note)=> ctx.fillRect(0, height- note.time, 300, note.height) );
    line[1].notes.map((note)=> ctx.fillRect(300, height- note.time, 300, note.height) );

    ctx.fillStyle = "white";
    line[2].notes.map((note)=> ctx.fillRect(0, height- note.time, 120, note.height) );
    ctx.fillStyle = "blue";
    line[3].notes.map((note)=> ctx.fillRect(120, height- note.time, 120, note.height) );
    ctx.fillStyle = "white";
    line[4].notes.map((note)=> ctx.fillRect(240, height- note.time, 120, note.height) );
    ctx.fillStyle = "blue";
    line[5].notes.map((note)=> ctx.fillRect(240, height- note.time, 120, note.height) );
    ctx.fillStyle = "white";
    line[6].notes.map((note)=> ctx.fillRect(360, height- note.time, 120, note.height) );
    ctx.fillStyle = "blue";
    line[7].notes.map((note)=> ctx.fillRect(480, height- note.time, 120, note.height) );
}
function line6(){
    if(isDrawDivision){
        ctx.beginPath();
        ctx.strokeStyle = "gray";
        ctx.moveTo(100,0);
        ctx.lineTo(100,height);
        ctx.moveTo(200,0);
        ctx.lineTo(200,height);
        ctx.moveTo(300,0);
        ctx.lineTo(300,height);
        ctx.moveTo(400,0);
        ctx.lineTo(400,height);
        ctx.moveTo(500,0);
        ctx.lineTo(500,height);
        ctx.stroke();
    }
    ctx.fillStyle = "aquamarine";
    line[0].notes.map((note)=> ctx.fillRect(0, height- note.time, 300, note.height) );
    line[1].notes.map((note)=> ctx.fillRect(300, height- note.time, 300, note.height) );

    ctx.fillStyle = "white";
    line[2].notes.map((note)=> ctx.fillRect(0, height- note.time, 100, note.height) );
    ctx.fillStyle = "blue";
    line[3].notes.map((note)=> ctx.fillRect(100, height- note.time, 100, note.height) );
    ctx.fillStyle = "white";
    line[4].notes.map((note)=> ctx.fillRect(200, height- note.time, 100, note.height) );
    ctx.fillStyle = "blue";
    line[5].notes.map((note)=> ctx.fillRect(300, height- note.time, 100, note.height) );
    ctx.fillStyle = "white";
    line[6].notes.map((note)=> ctx.fillRect(400, height- note.time, 100, note.height) );
    ctx.fillStyle = "blue";
    line[7].notes.map((note)=> ctx.fillRect(500, height- note.time, 100, note.height) );
}
function line8(){
    if(isDrawDivision){
        ctx.beginPath();
        ctx.strokeStyle = "gray";
        ctx.moveTo(100,0);
        ctx.lineTo(100,height);
        ctx.moveTo(200,0);
        ctx.lineTo(200,height);
        ctx.moveTo(300,0);
        ctx.lineTo(300,height);
        ctx.moveTo(400,0);
        ctx.lineTo(400,height);
        ctx.moveTo(500,0);
        ctx.lineTo(500,height);
        ctx.stroke();
    }
    ctx.fillStyle = "aquamarine";
    line[0].notes.map((note)=> ctx.fillRect(0, height- note.time, 300, note.height) );
    line[1].notes.map((note)=> ctx.fillRect(300, height- note.time, 300, note.height) );

    ctx.fillStyle = "red";
    line[8].notes.map((note)=> ctx.fillRect(0, height- note.time, 300, note.height) );
    line[9].notes.map((note)=> ctx.fillRect(300, height- note.time, 300, note.height) );

    ctx.fillStyle = "white";
    line[2].notes.map((note)=> ctx.fillRect(0, height- note.time, 100, note.height) );
    ctx.fillStyle = "blue";
    line[3].notes.map((note)=> ctx.fillRect(100, height- note.time, 100, note.height) );
    ctx.fillStyle = "white";
    line[4].notes.map((note)=> ctx.fillRect(200, height- note.time, 100, note.height) );
    ctx.fillStyle = "blue";
    line[5].notes.map((note)=> ctx.fillRect(300, height- note.time, 100, note.height) );
    ctx.fillStyle = "white";
    line[6].notes.map((note)=> ctx.fillRect(400, height- note.time, 100, note.height) );
    ctx.fillStyle = "blue";
    line[7].notes.map((note)=> ctx.fillRect(500, height- note.time, 100, note.height) );
}

export {drawline}