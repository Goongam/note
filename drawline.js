import {line,height,isDrawDivision, ctxList} from "./field.js";

let drawline = {
    4: line4,
    5: line5,
    6: line6,
    8: line8,
};

function heightOriginOrCopy(note){
    return note.ctx.canvas.parentNode.id == 'cv-container' ? height- note.time : note.ctx.canvas.height- note.time
}

function line4(){
    if(isDrawDivision){
        
        ctxList.map((ctx)=>ctx.beginPath());
        ctxList.map((ctx)=> ctx.strokeStyle = "gray");
       
        ctxList.map((ctx)=>ctx.moveTo(150,0));
        ctxList.map((ctx)=>ctx.lineTo(150,ctx.canvas.height));
                
        ctxList.map((ctx)=>ctx.moveTo(300,0));
        ctxList.map((ctx)=>ctx.lineTo(300,ctx.canvas.height));
        
        ctxList.map((ctx)=>ctx.moveTo(450,0));
        ctxList.map((ctx)=>ctx.lineTo(450,ctx.canvas.height));
        
        ctxList.map((ctx)=>ctx.stroke());
        
    }
    
    
    line[0].notes.map((note)=> note.ctx.fillStyle = "aquamarine");
    line[0].notes.map((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note) , 300, note.height) );
    line[1].notes.map((note)=> note.ctx.fillStyle = "aquamarine");
    line[1].notes.map((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note), 300, note.height) );
    
    line[2].notes.map((note)=> note.ctx.fillStyle = "white");
    line[2].notes.map((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), 150, note.height) );
    line[3].notes.map((note)=> note.ctx.fillStyle = "blue");
    line[3].notes.map((note)=> note.ctx.fillRect(150, heightOriginOrCopy(note), 150, note.height) );
    line[4].notes.map((note)=> note.ctx.fillStyle = "blue");
    line[4].notes.map((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note), 150, note.height) );
    line[5].notes.map((note)=> note.ctx.fillStyle = "white");
    line[5].notes.map((note)=> note.ctx.fillRect(450, heightOriginOrCopy(note), 150, note.height) );
     
    
}
function line5(){
    if(isDrawDivision){
        ctxList.map((ctx)=>ctx.beginPath());
        ctxList.map((ctx)=>ctx.strokeStyle = "gray");
        ctxList.map((ctx)=>ctx.moveTo(120,0));
        ctxList.map((ctx)=>ctx.lineTo(120,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.moveTo(240,0));
        ctxList.map((ctx)=>ctx.lineTo(240,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.moveTo(360,0));
        ctxList.map((ctx)=>ctx.lineTo(360,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.moveTo(480,0));
        ctxList.map((ctx)=>ctx.lineTo(480,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.stroke());
    }
    line[0].notes.map((note)=> note.ctx.fillStyle = "aquamarine");
    line[0].notes.map((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), 300, note.height) );
    line[1].notes.map((note)=> note.ctx.fillStyle = "aquamarine");
    line[1].notes.map((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note), 300, note.height) );

    line[2].notes.map((note)=> note.ctx.fillStyle = "white");
    line[2].notes.map((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), 120, note.height) );
    line[3].notes.map((note)=> note.ctx.fillStyle = "blue");
    line[3].notes.map((note)=> note.ctx.fillRect(120, heightOriginOrCopy(note), 120, note.height) );
    line[4].notes.map((note)=> note.ctx.fillStyle = "white");
    line[4].notes.map((note)=> note.ctx.fillRect(240, heightOriginOrCopy(note), 120, note.height) );
    line[5].notes.map((note)=> note.ctx.fillStyle = "blue");
    line[5].notes.map((note)=> note.ctx.fillRect(240, heightOriginOrCopy(note), 120, note.height) );
    line[6].notes.map((note)=> note.ctx.fillStyle = "white");
    line[6].notes.map((note)=> note.ctx.fillRect(360, heightOriginOrCopy(note), 120, note.height) );
    line[7].notes.map((note)=> note.ctx.fillStyle = "blue");
    line[7].notes.map((note)=> note.ctx.fillRect(480, heightOriginOrCopy(note), 120, note.height) );
}
function line6(){
    if(isDrawDivision){
        ctxList.map((ctx)=>ctx.beginPath());
        ctxList.map((ctx)=>ctx.strokeStyle = "gray");
        ctxList.map((ctx)=>ctx.moveTo(100,0));
        ctxList.map((ctx)=>ctx.lineTo(100,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.moveTo(200,0));
        ctxList.map((ctx)=>ctx.lineTo(200,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.moveTo(300,0));
        ctxList.map((ctx)=>ctx.lineTo(300,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.moveTo(400,0));
        ctxList.map((ctx)=>ctx.lineTo(400,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.moveTo(500,0));
        ctxList.map((ctx)=>ctx.lineTo(500,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.stroke());
    }
    line[0].notes.map((note)=> note.ctx.fillStyle = "aquamarine");
    line[0].notes.map((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), 300, note.height) );
    line[1].notes.map((note)=> note.ctx.fillStyle = "aquamarine");
    line[1].notes.map((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note), 300, note.height) );

    line[2].notes.map((note)=> note.ctx.fillStyle = "white");
    line[2].notes.map((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), 100, note.height) );
    line[3].notes.map((note)=> note.ctx.fillStyle = "blue");
    line[3].notes.map((note)=> note.ctx.fillRect(100, heightOriginOrCopy(note), 100, note.height) );
    line[4].notes.map((note)=> note.ctx.fillStyle = "white");
    line[4].notes.map((note)=> note.ctx.fillRect(200, heightOriginOrCopy(note), 100, note.height) );
    line[5].notes.map((note)=> note.ctx.fillStyle = "white");
    line[5].notes.map((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note), 100, note.height) );
    line[6].notes.map((note)=> note.ctx.fillStyle = "blue");
    line[6].notes.map((note)=> note.ctx.fillRect(400, heightOriginOrCopy(note), 100, note.height) );
    line[7].notes.map((note)=> note.ctx.fillStyle = "white");
    line[7].notes.map((note)=> note.ctx.fillRect(500, heightOriginOrCopy(note), 100, note.height) );
}
function line8(){
    if(isDrawDivision){
        ctxList.map((ctx)=>ctx.beginPath());
        ctxList.map((ctx)=>ctx.strokeStyle = "gray");
        ctxList.map((ctx)=>ctx.moveTo(100,0));
        ctxList.map((ctx)=>ctx.lineTo(100,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.moveTo(200,0));
        ctxList.map((ctx)=>ctx.lineTo(200,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.moveTo(300,0));
        ctxList.map((ctx)=>ctx.lineTo(300,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.moveTo(400,0));
        ctxList.map((ctx)=>ctx.lineTo(400,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.moveTo(500,0));
        ctxList.map((ctx)=>ctx.lineTo(500,ctx.canvas.height));
        ctxList.map((ctx)=>ctx.stroke());
    }
    line[0].notes.map((note)=> note.ctx.fillStyle = "aquamarine");
    line[0].notes.map((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), 300, note.height) );
    line[1].notes.map((note)=> note.ctx.fillStyle = "aquamarine");
    line[1].notes.map((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note), 300, note.height) );

    line[8].notes.map((note)=> note.ctx.fillStyle = "red");
    line[8].notes.map((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), 300, note.height) );
    line[9].notes.map((note)=> note.ctx.fillStyle = "red");
    line[9].notes.map((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note), 300, note.height) );

    line[2].notes.map((note)=> note.ctx.fillStyle = "white");
    line[2].notes.map((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), 100, note.height) );
    line[3].notes.map((note)=> note.ctx.fillStyle = "blue");
    line[3].notes.map((note)=> note.ctx.fillRect(100, heightOriginOrCopy(note), 100, note.height) );
    line[4].notes.map((note)=> note.ctx.fillStyle = "white");
    line[4].notes.map((note)=> note.ctx.fillRect(200, heightOriginOrCopy(note), 100, note.height) );
    line[5].notes.map((note)=> note.ctx.fillStyle = "white");
    line[5].notes.map((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note), 100, note.height) );
    line[6].notes.map((note)=> note.ctx.fillStyle = "blue");
    line[6].notes.map((note)=> note.ctx.fillRect(400, heightOriginOrCopy(note), 100, note.height) );
    line[7].notes.map((note)=> note.ctx.fillStyle = "white");
    line[7].notes.map((note)=> note.ctx.fillRect(500, heightOriginOrCopy(note), 100, note.height) );
}

export {drawline}