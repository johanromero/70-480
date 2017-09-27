//CanvasGame functionality

function init() {

    var canvas = document.getElementById("ballCanvas");
    var ctx = canvas.getContext("2d");

    var radio = 40;
    var firstime = true;
    var circles = [];
    var icircle = createCircle(0, 0,Math.PI, 1, 1);

    setInterval(function () { drawCircles(); }, 10);


    function drawCircles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        if (firstime == true) {
            firstime = false;
            circles.push(icircle);
        }
        for (var i = 0; i < circles.length; i++)
        {
            if (circles[i].x >= canvas.width) {
                circles[i].counter = 1;
                circles[i].signX = -1;
                circles[i].restX = canvas.width;
            } else if (circles[i].x == 0) {
                circles[i].counter = 1;
                circles[i].restX = 0;
                circles[i].signX = 1;
            }
           
            circles[i].x = circles[i].counter * circles[i].signX + circles[i].restX; 
            circles[i].counter++;
         
            if (circles[i].y >= canvas.height) {  
                circles[i].restY = 2 * canvas.height;
                circles[i].signY = -1;
            } else if (circles[i].y == 0) {
                circles[i].restY = 0;
                circles[i].signY = 1;
            }               
           
            circles[i].y = circles[i].restY + circles[i].angle * circles[i].x * circles[i].signY;
            drawCanvas(circles[i].x, circles[i].y, radio, ctx);
        }
     
    };

    canvas.addEventListener("click", function () {
        //get the current array of circles
        var circleTemp = [];
             //duplicate each circle into a new  array
        for (i = 0; i < circles.length; i++)
        {
            //positive
            circleTemp.push(createCircle(circles[i].x, circles[i].y, circles[i].angle, circles[i].signX, circles[i].signY));
            //negative
            circleTemp.push(createCircle(circles[i].x, circles[i].y, circles[i].angle, -circles[i].signX, -circles[i].signY));
        }
   
        circles = circleTemp;       
      
    });
    
    function drawCanvas(x, y, r, context)
    {
        
       
        context.arc(x, y, r, 0, Math.PI * 2, false);
        context.fillStyle = 'green';
        context.fill();
    }

    function createCircle(xIni, yIni, angleIni, signX, signY)
    {
        
        var finalAngle = angleIni / Math.PI;
        var circle = { x: xIni, y: yIni, angle: finalAngle, signX: signX, signY: signY, counter: 1, restX : 0, restY : 0 };
        return circle; 

    }



};
