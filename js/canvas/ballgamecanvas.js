//CanvasGame functionality

function init() {
    var myApp = this.initApp();
    var canvas = document.getElementById("ballCanvas");
    myApp.width = canvas.width;
    myApp.height = canvas.height;

    var ctx = canvas.getContext("2d");
    myApp.setInterval(clearCanvas, drawCanvas);
    canvas.addEventListener("click", function () {
        //get the current array of circles            
        myApp.cloneCircle();
    });

    function drawCanvas(x, y, r) {
        ctx.arc(x, y, r, 0, Math.PI * 2, false);
        ctx.fillStyle = 'green';
        ctx.fill();
    }

    function clearCanvas() {
       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
    }


}





