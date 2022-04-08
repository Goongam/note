
        let tick = 5, speed = 4, time = 0, longnoteTime = 40, livedraw = true;
        
        let width = 600, default_height = 500, height = 100;
        //let x=300, y=25;
        let key = [];
        let line1 = [0];
        let line2 = [0];
        let line3 = [0];
        let line4 = [0];
        let line5 = [0];
        let line6 = [0];
        let keydown1 = false, presstime1 = 0; 
        let keydown2 = false, presstime2 = 0;
        let keydown3 = false, presstime3 = 0;
        let keydown4 = false, presstime4 = 0;
        let keydown5 = false, presstime5 = 0;
        let keydown6 = false, presstime6 = 0;
        let stop = true;
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = default_height;
        canvas.style.border = "1px solid black";
        const ctx = canvas.getContext("2d");
        document.body.appendChild(canvas);

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
            livedraw = value
        }
        export {changeSpeed,changelong,changelivedraw}

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
            if(keydown1){
                presstime1++;
            }
            if(keydown2){
                presstime2++;
            }
            if(keydown3){
                presstime3++;
            }
            if(keydown4){
                presstime4++;
            }
            if(keydown5){
                presstime5++;
            }
            if(keydown6){
                presstime6++;
            }
        }

        function drawline1(ctx){
            ctx.fillStyle = "white";
            line1.map((note)=> ctx.fillRect(0, height- note.time, 100, note.height) );
            ctx.fillStyle = "blue";
            line2.map((note)=> ctx.fillRect(100, height- note.time, 100, note.height) );
            ctx.fillStyle = "white";
            line3.map((note)=> ctx.fillRect(200, height- note.time, 100, note.height) );
            ctx.fillStyle = "blue";
            line4.map((note)=> ctx.fillRect(300, height- note.time, 100, note.height) );
            ctx.fillStyle = "white";
            line5.map((note)=> ctx.fillRect(400, height- note.time, 100, note.height) );
            ctx.fillStyle = "blue";
            line6.map((note)=> ctx.fillRect(500, height- note.time, 100, note.height) );
        }
        function update(){
            height+=speed;
            time += speed;
            pressnote();
        }
    
        document.addEventListener("keydown", function (e) {
            if(stop){ //멈춤상태라면
                stop = false;
                canvas.height = 500;
            }
            
            if(e.keyCode == '66') {}

           if(e.keyCode == '65') {keydown1 = true;}
           if(e.keyCode == '83') {keydown2 = true;}
           if(e.keyCode == '68') {keydown3 = true;}
           if(e.keyCode == '74') {keydown4 = true;}
           if(e.keyCode == '75') {keydown5 = true;}
           if(e.keyCode == '76') {keydown6 = true;}
           if(e.keyCode == '27') {  //esc
            stop = !stop;
            canvas.height = time;
            draw();
            }
        });
        document.addEventListener("keyup", function (e) {
            if(e.keyCode == '65') {
                keydown1 = false;
                line1[line1.length++] = presstime1 > longnoteTime ? new note(time,presstime1 * speed) : new note(time,15);
                presstime1 = 0;
            }
            
            if(e.keyCode == '83') {
                keydown2 = false;      
                line2[line2.length++] = presstime2 > longnoteTime ? new note(time,presstime2 * speed) : new note(time,15);
                presstime2 = 0;
            }

            if(e.keyCode == '68') {
                keydown3 = false;      
                line3[line3.length++] = presstime3 > longnoteTime ? new note(time,presstime3 * speed) : new note(time,15);  
                presstime3 = 0;
            }

            if(e.keyCode == '74') {
                keydown4 = false;      
                line4[line4.length++] = presstime4 > longnoteTime ? new note(time,presstime4 * speed) : new note(time,15);    
                presstime4 = 0;
            }

            if(e.keyCode == '75') {
                keydown5 = false;      
                line5[line5.length++] = presstime5 > longnoteTime ? new note(time,presstime5 * speed) : new note(time,15);      
                presstime5 = 0;
            }

            if(e.keyCode == '76') {
                keydown6 = false;      
                line6[line6.length++] = presstime6 > longnoteTime ? new note(time,presstime6 * speed) : new note(time,15);
                presstime6 = 0;
            }
            
        });
