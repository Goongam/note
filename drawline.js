import {line,height,isDrawDivision, ctxList,ctx,stop, currentBTN} from "./field.js";
import {noteType} from "./option.js";

let drawingCTX;
let MinusCircleSIZE = 0;

const circleAdjustHeight = 60;

const NOTE_WIDTH = {
    4 : 150,
    5 : 120,
    6 : 100,
    8 : 100,
}

const drawline = {
    4: line4,
    5: line5,
    6: line6,
    8: line8,
};

export function changeNoteSize(value){
    console.log("노트크기:"+value);
    MinusCircleSIZE = 50 - value;
}

function heightOriginOrCopy(note){
    return note.ctx.canvas.parentNode.id == 'cv-container' ? height- note.time : note.ctx.canvas.height- note.time
}
function isCurrentCTX(ctx){
    return ctx.canvas.parentNode.id == drawingCTX;
}

function drawcircle(note, x, y, color){
    let ctx = note.ctx;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    if(note.height == 15){  //일반노트
        
        ctx.arc(x + NOTE_WIDTH[currentBTN]/2, y - circleAdjustHeight, NOTE_WIDTH[currentBTN]/2 - MinusCircleSIZE, 0, 2*Math.PI, true);

    }else{ //롱노트
        ctx.arc(x + NOTE_WIDTH[currentBTN]/2, y - circleAdjustHeight, NOTE_WIDTH[currentBTN]/2 -MinusCircleSIZE, 0, 1*Math.PI, true);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x + NOTE_WIDTH[currentBTN]/2, y+note.height - circleAdjustHeight, NOTE_WIDTH[currentBTN]/2 -MinusCircleSIZE, 0, 1*Math.PI, false);
        ctx.stroke();
        ctx.moveTo(x+MinusCircleSIZE,y - circleAdjustHeight);
        ctx.lineTo(x+MinusCircleSIZE,y+note.height - circleAdjustHeight);
        ctx.moveTo(x+NOTE_WIDTH[currentBTN]-MinusCircleSIZE,y - circleAdjustHeight );
        ctx.lineTo(x+NOTE_WIDTH[currentBTN]-MinusCircleSIZE,y+note.height - circleAdjustHeight);
    }
    
    //내부채우기
        // ctx.fillStyle = color;
        // ctx.fill();

       
    //그리기
    ctx.stroke();
}

function line4(){
    drawingCTX = stop ? 'copy-cv-container' : 'cv-container';

    if(isDrawDivision){
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineWidth = 1);  
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.beginPath());
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=> ctx.strokeStyle = "gray");
       
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN],0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN],ctx.canvas.height));
                
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*2,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*2,ctx.canvas.height));
        
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*3,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*3,ctx.canvas.height));
        
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.stroke());
        
    }

    if(noteType == "square"){
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "aquamarine");
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(0, heightOriginOrCopy(note) , 300, note.height));
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "aquamarine");
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(300, heightOriginOrCopy(note) , 300, note.height));

        line[2].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "white");
        line[2].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(0, heightOriginOrCopy(note) , 150, note.height));
        line[3].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "blue");
        line[3].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(150, heightOriginOrCopy(note) , 150, note.height));
        line[4].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "blue");
        line[4].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(300, heightOriginOrCopy(note) , 150, note.height));
        line[5].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "white");
        line[5].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(450, heightOriginOrCopy(note) , 150, note.height));
    }else{
    //circle
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "aquamarine");
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(0, heightOriginOrCopy(note) - circleAdjustHeight, 300, note.height));
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "aquamarine");
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(300, heightOriginOrCopy(note) - circleAdjustHeight, 300, note.height));

        line[2].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*0 , heightOriginOrCopy(note), "white"));
        line[3].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*1, heightOriginOrCopy(note), "blue"));
        line[4].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*2, heightOriginOrCopy(note),"blue"));
        line[5].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*3, heightOriginOrCopy(note), "white"));
    }

}
function line5(){
    drawingCTX = stop ? 'copy-cv-container' : 'cv-container';
    if(isDrawDivision){
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineWidth = 1);
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.beginPath());
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.strokeStyle = "gray");
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN],0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN],ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*2,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*2,ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*3,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*3,ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*4,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*4,ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.stroke());
    }
   

    if(noteType == "square"){
        
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "aquamarine");
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), 300, note.height) );
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "aquamarine");
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note), 300, note.height) );

        line[2].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "white");
        line[2].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[3].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "blue");
        line[3].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN], heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[4].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "white");
        line[4].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN]*2, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[5].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "blue");
        line[5].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN]*2, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[6].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "white");
        line[6].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN]*3, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[7].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "blue");
        line[7].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN]*4, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
    }else{

        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "aquamarine");
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(0, heightOriginOrCopy(note) - circleAdjustHeight, 300, note.height));
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "aquamarine");
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(300, heightOriginOrCopy(note) - circleAdjustHeight, 300, note.height));

        line[2].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*0 , heightOriginOrCopy(note), "white"));
        line[3].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*1, heightOriginOrCopy(note), "blue"));
        line[4].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*2, heightOriginOrCopy(note),"white"));
        line[5].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*2, heightOriginOrCopy(note), "white"));
        line[6].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*3, heightOriginOrCopy(note), "blue"));
        line[7].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*4, heightOriginOrCopy(note), "white"));
    }

    

}
function line6(){
    drawingCTX = stop ? 'copy-cv-container' : 'cv-container';
    if(isDrawDivision){
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineWidth = 1);
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.beginPath());
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.strokeStyle = "gray");
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN],0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN],ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*2,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*2,ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*3,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*3,ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*4,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*4,ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*5,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*5,ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.stroke());
    }
    
   
    if(noteType == "square"){
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "aquamarine");
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), 300, note.height) );
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "aquamarine");
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note), 300, note.height) );

        line[2].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "white");
        line[2].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[3].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "blue");
        line[3].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN], heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[4].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "white");
        line[4].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN]*2, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[5].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "white");
        line[5].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN]*3, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[6].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "blue");
        line[6].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN]*4, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[7].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "white");
        line[7].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN]*5, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );

    }else{
         //circle
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "aquamarine");
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(0, heightOriginOrCopy(note) - circleAdjustHeight, 300, note.height));
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "aquamarine");
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(300, heightOriginOrCopy(note) - circleAdjustHeight, 300, note.height));

        line[2].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*0 , heightOriginOrCopy(note), "white"));
        line[3].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*1, heightOriginOrCopy(note), "blue"));
        line[4].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*2, heightOriginOrCopy(note),"white"));
        line[5].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*3, heightOriginOrCopy(note), "white"));
        line[6].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*4, heightOriginOrCopy(note), "blue"));
        line[7].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*5, heightOriginOrCopy(note), "white"));
    
    }
   
   
}
function line8(){
    drawingCTX = stop ? 'copy-cv-container' : 'cv-container';
    if(isDrawDivision){
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineWidth = 1);
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.beginPath());
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.strokeStyle = "gray");
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN],0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN],ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*2,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*2,ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*3,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*3,ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*4,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*4,ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.moveTo(NOTE_WIDTH[currentBTN]*5,0));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.lineTo(NOTE_WIDTH[currentBTN]*5,ctx.canvas.height));
        ctxList.filter((ctx)=>isCurrentCTX(ctx)).forEach((ctx)=>ctx.stroke());
    }
    
    


    if(noteType == "square"){
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "aquamarine");
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), 300, note.height) );
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "aquamarine");
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note), 300, note.height) );
        
        line[8].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "red");
        line[8].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), 300, note.height) );
        line[9].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "red");
        line[9].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note), 300, note.height) );

        line[2].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "white");
        line[2].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[3].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "blue");
        line[3].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN], heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[4].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "white");
        line[4].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN]*2, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[5].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "white");
        line[5].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN]*3, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[6].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "blue");
        line[6].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN]*4, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );
        line[7].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "white");
        line[7].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(NOTE_WIDTH[currentBTN]*5, heightOriginOrCopy(note), NOTE_WIDTH[currentBTN], note.height) );

    }else{
         //circle
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "aquamarine");
        line[0].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(0, heightOriginOrCopy(note) - circleAdjustHeight, 300, note.height));
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillStyle = "aquamarine");
        line[1].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=>note.ctx.fillRect(300, heightOriginOrCopy(note) - circleAdjustHeight, 300, note.height));

        line[8].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "red");
        line[8].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(0, heightOriginOrCopy(note) - circleAdjustHeight, 300, note.height) );
        line[9].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillStyle = "red");
        line[9].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> note.ctx.fillRect(300, heightOriginOrCopy(note) - circleAdjustHeight, 300, note.height) );

        line[2].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*0 , heightOriginOrCopy(note), "white"));
        line[3].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*1, heightOriginOrCopy(note), "blue"));
        line[4].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*2, heightOriginOrCopy(note),"white"));
        line[5].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*3, heightOriginOrCopy(note), "white"));
        line[6].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*4, heightOriginOrCopy(note), "blue"));
        line[7].notes.filter((note)=>isCurrentCTX(note.ctx)).forEach((note)=> drawcircle(note, NOTE_WIDTH[currentBTN]*5, heightOriginOrCopy(note), "white"));
    
    }
    

   
}

export {drawline}