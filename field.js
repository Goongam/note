        import {isPresetInput} from "./option.js";

        let tick = 5, speed = 4, time = 0, longnoteTime = 40, livedraw = true;
        
        let width = 600, default_height = 500, height = 100;
        //let x=300, y=25;
        let currentBTN = 6;

        let preset = {
            4:['a','s',';','\''],
            5:['a','s','d','l',';','\''],
            6:['a','s','d','l',';','\''],
            8:['q','w','e','7','8','9',' ','0']
        }
        
      
        //let key = [];
        // let line1 = [0];
        // let line2 = [0];
        // let line3 = [0];
        // let line4 = [0];
        // let line5 = [0];
        // let line6 = [0];
        // let keydown1 = false, presstime1 = 0; 
        // let keydown2 = false, presstime2 = 0;
        // let keydown3 = false, presstime3 = 0;
        // let keydown4 = false, presstime4 = 0;
        // let keydown5 = false, presstime5 = 0;
        // let keydown6 = false, presstime6 = 0;
        let stop = true;
        const canvas = document.getElementById("field");
        canvas.width = width;
        canvas.height = default_height;
        canvas.style.border = "1px solid white";
        const ctx = canvas.getContext("2d");
        //document.body.appendChild(canvas);

        class key{
            notes = [0];
            keydown= false;
            presstime= 0;
        }
        let line = [];
        for(let i = 0; i < 8; i++){
            line.push(new key());
        }

        class note {
            constructor(time, height){
                this.time = time;
                this.height = height;
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
            
        }
        function changePreset(changingValue, inputvalue){
            preset[currentBTN][changingValue] = inputvalue;
            console.log("변경: "+preset[currentBTN])
            console.log(line);
            
        }
        function escapeStop(){
            stop = true;
            canvas.height = time;
            draw();
        }
        export {changeSpeed,changelong,changelivedraw,changeBTN,preset,
        currentBTN, changePreset, escapeStop}

        setInterval(function () {
            
            if(!stop){
                update();
               if(livedraw)draw();
               //console.log(speed)
            
            }
        }, tick)



        function draw() {
            //ctx.save();
            //canvas.height = time;
            ctx.fillStyle = "black";            //지우기
            ctx.fillRect(0, 0, width, canvas.height);  //지우기
            
            drawline1(ctx);
            //ctx.restore();

            
        }
        function pressnote(){
          
            line.map((li) => {
                if(li.keydown) li.presstime++
            });
        }

        function drawline1(ctx){
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
        function update(){
            height+=speed;
            time += speed;
            pressnote();
        }
        
        let downkey;
        document.addEventListener("keydown", function (e) {
            downkey = e.key.toLowerCase();
            if(isPresetInput) return;
            

            
            if(stop){ //멈춤상태라면
                stop = false;
                canvas.height = 500;
            }
            console.log(downkey);
            if(downkey == '66') {}

            if(downkey == preset[currentBTN][0]) {line[0].keydown = true;}
            if(downkey == preset[currentBTN][1]) {line[1].keydown = true;}
            if(downkey == preset[currentBTN][2]) {line[2].keydown = true;}
            if(downkey == preset[currentBTN][3]) {line[3].keydown = true;}
            if(downkey == preset[currentBTN][4] && currentBTN != 4) {line[4].keydown = true;}
            if(downkey == preset[currentBTN][5] && currentBTN != 4) {line[5].keydown = true;}
            if(downkey == preset[currentBTN][6] && currentBTN == 8) {line[6].keydown = true;}
            if(downkey == preset[currentBTN][7] && currentBTN == 8) {line[7].keydown = true;}
            if(downkey == 'escape') {  //esc
                escapeStop();
            }
            
        });

        function keyup(line){
            line.keydown = false;
            line.notes.push(line.presstime > longnoteTime ? new note(time,line.presstime * speed) : new note(time,15));
            line.presstime = 0;
        }

        let upkey;
        document.addEventListener("keyup", function (e) {
            if(isPresetInput) return;

            upkey = e.key.toLowerCase();            
            for(let i = 0; i < 8 ; i++){
            
                if(upkey == preset[currentBTN][i]) keyup(line[i]);
            }
            

        });