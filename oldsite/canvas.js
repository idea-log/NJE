

        // geting canvas by id canvas
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        //making the canvas full screen
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        //chinese characters - taken from the unicode charset
        var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
        //converting the string into an array of single characters
        matrix = matrix.split("");

        var font_size = 10;
        var columns = canvas.width/font_size; //number of columns for the rain
        //an array of drops - one per column
        var drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 

        //drawing the characters
        function draw()
        {
            //Black BG for the canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0F0"; //green text
            ctx.font = font_size + "px arial";
            //looping over drops
            for(var i = 0; i < drops.length; i++)
            {
                //a random chinese character to print
                var text = matrix[Math.floor(Math.random()*matrix.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);

                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
                    drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
            }


            ctx.font="60px Georgia";
ctx.fillText("THIS PAGE IS UNDER CONSTRUCTION",25,50);

ctx.font="30px Verdana";
// Create gradient
var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
gradient.addColorStop("0","blue");
gradient.addColorStop("0.5","green");
gradient.addColorStop("0.9","blue");
// Fill with gradient
ctx.fillStyle=gradient;
ctx.fillText("Thank you for your patience. ", 300,150);   
        }

        setInterval(draw, 35);

    