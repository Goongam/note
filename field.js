        import {isPresetInput} from "./option.js";
        import {drawline} from "./drawline.js";

        let tick = 5, speed = 4, time = 0, longnoteTime = 40, livedraw = true;
        
        let width = 600, default_height = 500, height = 0;
        let isDrawDivision = false;
        //let x=300, y=25;
        let currentBTN = 4;

        let preset = {
            4:['SHIFT1','SHIFT2','A0','S0',';0','\'0'],
            5:['SHIFT1','SHIFT2','A0','S0','D0','L0',';0','\'0'],
            6:['SHIFT1','SHIFT2','A0','S0','D0','L0',';0','\'0'],
            8:['CAPSLOCK0','+3','Q0','W0','E0','73','83','93',' 0','ARROWRIGHT0']
        }
        //let downshift = false;
        const Unshift = {
            ":0":";0",
            "\"0":"'0",
            "<0":",0",
            ">0":".0",
            "?0":"/0",
            "{0":"[0",
            "}0":"]0",
            "~0":"`0",
            "!0":"10",
            "@0":"20",
            "#0":"30",
            "$0":"40",
            "%0":"50",
            "^0":"60",
            "&0":"70",
            "*0":"80",
            "(0":"90",
            ")0":"00",
            "_0":"-0",
            
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
        for(let i = 0; i < 10; i++){
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
            draw();
        }
        function changePreset(changingValue, inputvalue){
            
            preset[currentBTN][changingValue] = inputvalue;
            console.log("변경: "+preset[currentBTN])
            
            
        }
        function changeDivision(value){
            isDrawDivision = value;
            draw();
        }

        function escapeStop(){
            stop = true;
            canvas.height = time;
            draw();
        }
        export {changeSpeed,changelong,changelivedraw,changeBTN,preset,
        currentBTN, changePreset, escapeStop,Unshift, ctx, line, height,
         isDrawDivision,changeDivision}

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
            drawline[currentBTN]();
            // console.log(downshift); 
        }
        function update(){
            height+=speed;
            time += speed;
            pressnote();
        }
        
        function onliveshow(){
            stop = false;
            canvas.height = 500;
        }

        let downkey;
        document.addEventListener("keydown", function (e) {
            downkey = e.key.toUpperCase() + e.location;
            if(isPresetInput) return;
            
            if(Unshift.hasOwnProperty(downkey)) downkey = Unshift[downkey];
            if(stop && preset[currentBTN].includes(downkey)){ //멈춤상태, 입력==프리셋키
                onliveshow()
            }
            
            console.log(downkey);
            
            if(downkey == preset[currentBTN][0]) {line[0].keydown = true;}
            if(downkey == preset[currentBTN][1]) {line[1].keydown = true;}
            if(downkey == preset[currentBTN][2]) {line[2].keydown = true;}
            if(downkey == preset[currentBTN][3]) {line[3].keydown = true;}
            if(downkey == preset[currentBTN][4]) {line[4].keydown = true;}
            if(downkey == preset[currentBTN][5]) {line[5].keydown = true;}
            if(downkey == preset[currentBTN][6] && currentBTN != 4) {line[6].keydown = true;}
            if(downkey == preset[currentBTN][7] && currentBTN != 4) {line[7].keydown = true;}
            if(downkey == preset[currentBTN][8] && currentBTN == 8) {line[8].keydown = true;}
            if(downkey == preset[currentBTN][9] && currentBTN == 8) {line[9].keydown = true;}
            if(downkey == 'ESCAPE0') {  //esc
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
            upkey = e.key.toUpperCase() + e.location;
   
            if(Unshift.hasOwnProperty(upkey)) upkey = Unshift[upkey]; //shift안누른 키로처리
                        
            for(let i = 0; i < 10 ; i++){
            
                if(upkey == preset[currentBTN][i]) keyup(line[i]);
            }
            

        });