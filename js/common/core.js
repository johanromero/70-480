function initApp() {

    var myApp = myApp || {};
    myApp.radio = 40;
    myApp.firstime = true;
    myApp.circles = [];
    myApp.width = 0; 
    myApp.height = 0; 
    

    myApp.createCircle = function (xIni, yIni, signX, signY) {

        var circle = { x: xIni, y: yIni, signX: signX, signY: signY };
        return circle;

    };

    myApp.icircle = myApp.createCircle(0, 0, 1, 1);

    myApp.setInterval = function (clearCallback, callback) { setInterval(function () { myApp.drawCircle(clearCallback, callback); }, 10); };


    myApp.drawCircle = function (clearCallback, callback) {

        clearCallback();
    
        if (this.firstime == true) {
            this.firstime = false;
            this.circles.push(this.icircle);
        }
        for (var i = 0; i < this.circles.length; i++) {
            if (this.circles[i].x >= this.width) {
                this.circles[i].signX = -1;
            } else if (this.circles[i].x == 0) {
                this.circles[i].signX = 1;
            }
            this.circles[i].x = this.circles[i].x + this.circles[i].signX;
            if (this.circles[i].y >= this.height) {
                this.circles[i].signY = -1;
            } else if (this.circles[i].y == 0) {

                this.circles[i].signY = 1;
            }

            this.circles[i].y = this.circles[i].y + this.circles[i].signY;
            callback(this.circles[i].x, this.circles[i].y, this.radio);
        }

    };
    myApp.cloneCircle = function () {
        var circleTemp = [];
        //duplicate each circle into a new  array
        for (i = 0; i < this.circles.length; i++) {
            //positive
            circleTemp.push(myApp.createCircle(this.circles[i].x, this.circles[i].y, this.circles[i].signX, this.circles[i].signY));
            //negative
            circleTemp.push(myApp.createCircle(this.circles[i].x, this.circles[i].y, -this.circles[i].signX, -this.circles[i].signY));
        }

        this.circles = circleTemp;
    };
    


    return myApp;


}