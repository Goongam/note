
        var tick = 5, speed = 4, time = 0, longnoteTime = 40, livedraw = false;
        
        var width = 600, default_height = 100, height = default_height;
        //var x=300, y=25;
        var key = [];
        var line1 = [0];
        var line2 = [0];
        var line3 = [0];
        var line4 = [0];
        var line5 = [0];
        var line6 = [0];
        var keydown1 = false, presstime1 = 0; 
        var keydown2 = false, presstime2 = 0;
        var keydown3 = false, presstime3 = 0;
        var keydown4 = false, presstime4 = 0;
        var keydown5 = false, presstime5 = 0;
        var keydown6 = false, presstime6 = 0;
        var stop = true;
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
            canvas.height = height+100;
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
           var i;
            i = 1;
            ctx.fillStyle = "white";

            while(line1[i] != null){
                ctx.fillRect(0, height- line1[i].time, 100, line1[i].height);       
                i++;
            }
            i = 1;
            ctx.fillStyle = "blue";
            while(line2[i] != null){
                ctx.fillRect(100, height- line2[i].time, 100, line2[i].height);
                i++;
            }
            i = 1;
            ctx.fillStyle = "white";
            while(line3[i] != null){
                ctx.fillRect(200, height- line3[i].time, 100, line3[i].height);
                i++;
            }
            i = 1;

            while(line4[i] != null){
                ctx.fillRect(300, height- line4[i].time, 100, line4[i].height);

                i++;
            }
            i = 1;
            ctx.fillStyle = "blue";
            while(line5[i] != null){
                ctx.fillRect(400, height- line5[i].time, 100, line5[i].height);

                i++;
            }
            i = 1;
            ctx.fillStyle = "white";
            while(line6[i] != null){           
                    ctx.fillRect(500, height- line6[i].time, 100, line6[i].height);

                i++;
            }
            
            
        }
        function update(){
            height+=speed;
            time += speed;
            pressnote();
        }
    
        document.addEventListener("keydown", function (e) {
            stop = false;
            if(e.keyCode == '66') {}

           if(e.keyCode == '65') {keydown1 = true;}
           if(e.keyCode == '83') {keydown2 = true;}
           if(e.keyCode == '68') {keydown3 = true;}
           if(e.keyCode == '74') {keydown4 = true;}
           if(e.keyCode == '75') {keydown5 = true;}
           if(e.keyCode == '76') {keydown6 = true;}
           if(e.keyCode == '27') {  //esc
            stop ? stop = false : stop = true;
            draw();
            }
        });
        document.addEventListener("keyup", function (e) {
            if(e.keyCode == '65') {
                keydown1 = false;
                if (presstime1 > longnoteTime)  
                    line1[line1.length++] = new note(time,presstime1 * speed);
                else 
                    line1[line1.length++] = new note(time,15);
                presstime1 = 0;
            }
            
            if(e.keyCode == '83') {
                keydown2 = false;      
                if (presstime2 > longnoteTime)  
                    line2[line2.length++] = new note(time,presstime2 * speed);
                else 
                    line2[line2.length++] = new note(time,15);    
                presstime2 = 0;
            }

            if(e.keyCode == '68') {
                keydown3 = false;      
                if (presstime3 > longnoteTime)  
                    line3[line3.length++] = new note(time,presstime3 * speed);
                else 
                    line3[line3.length++] = new note(time,15);     
                presstime3 = 0;
            }

            if(e.keyCode == '74') {
                keydown4 = false;      
                if (presstime4 > longnoteTime)  
                    line4[line4.length++] = new note(time,presstime4 * speed);
                else 
                    line4[line4.length++] = new note(time,15);         
                presstime4 = 0;
            }

            if(e.keyCode == '75') {
                keydown5 = false;      
                if (presstime5 > longnoteTime)  
                    line5[line5.length++] = new note(time,presstime5 * speed);
                else 
                    line5[line5.length++] = new note(time,15);           
                presstime5 = 0;
            }

            if(e.keyCode == '76') {
                keydown6 = false;      
                if (presstime6 > longnoteTime)  
                    line6[line6.length++] = new note(time,presstime6 * speed);
                else 
                    line6[line6.length++] = new note(time,15);     
                presstime6 = 0;
            }
            
        });
