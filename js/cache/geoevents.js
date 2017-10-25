function init() {
    //Upload image over canvas
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    //
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#0f0'; 

    var image = new Image();
    image.onload = function () {
        showCoordinates();        
    }
    image.src = '../img/map.jpg';

    //geoLocation variables
    var geoLocator = window.navigator.geolocation;
    var geoOpts = { enableHighAccuracy: false, timeout: 6000 };
    var watcher = geoLocator.watchPosition(succesPos, erroPos, geoOpts);    
 
    var btnClear = document.getElementById('btnClear');
    btnClear.onclick = function () {
        clearStorage();
        showCoordinates();
    };

    var showPos = document.getElementById('showPos');
    showPos.onclick = function () {
        showCoordinates();
    };


    //geolocation change events

    function succesPos(pos) {
        var key = localStorage.length + 1;
        var coordinates = { long: pos.coords.longitude, lat: pos.coords.latitude };
        localStorage.setItem(key, JSON.stringify(coordinates));  
        showCoordinates();
               
    }

    function erroPos(e){
        var label = document.getElementById('label');
        label.innerText = 'No location events tracked'; 
    }    

    //Show local storage current elements
    function showCoordinates()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0);
        ctx.beginPath();
        for (var i = 0; i <= localStorage.length - 1; i++)
        {
            var key = localStorage.key(i);
            var spos = localStorage.getItem(key);
            var pos = JSON.parse(spos);
      
            if (i == 0)
                ctx.moveTo(pos.long, pos.lat);

            ctx.lineTo(pos.long, pos.lat);
        }
        ctx.stroke();
           
    }
 

    function clearStorage() {
        localStorage.clear();
    }

}