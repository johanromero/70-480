//CanvasGame functionality

function init() {
    var myApp = this.initApp();
    var svg = document.getElementById("mySvg");
    myApp.width = svg.width.baseVal.value;
    myApp.height = svg.height.baseVal.value;

    myApp.setInterval(clearSvg, drawSvg);
    svg.addEventListener("click", function () {
        //get the current array of circles            
        myApp.cloneCircle();
    });

  

    function clearSvg() {
        svg.innerHTML = '';
    }

    function drawSvg(x,y,r )
    {
        var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        circle.setAttribute("r", r);
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("fill", "green");
        svg.appendChild(circle); 

    }


}