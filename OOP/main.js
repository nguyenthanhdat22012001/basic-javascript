const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1500;
canvas.height = 600;
canvas.style.border = "solid black";

// Concept OOP : Ball --- define class Ball
class Ball {
    //hinh tron
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = this.radius;
        this.on = false;
        this.off = false;
    }



    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }


    changeDirect(){
        if (this.x > canvas.width - this.radius || this.x < this.radius) {
            this.dx = -this.dx ;
            console.log("this x, dx"+( this.x + this.dx))
        }
    }

    moveRight() {
         this.on = true;
        if (this.on == true && this.off == false) {
            this.changeDirect();
            this.x = this.x + this.dx;
        }
        this.draw();
        console.log("this on ", this.on, "this off ", this.off, 'this x ', this.x, 'this dx', this.dx);
    }

    moveLeft() {
        this.on = true;
        if (this.on == true && this.off == false) {
            this.changeDirect();
            this.x = this.x - this.dx;
        }

        this.draw();
        console.log("this on ", this.on, "this off ", this.off, 'this x ', this.x, 'this dx', this.dx);
    }

    stop() {
        this.off = true;
        console.log("play ", this.play, 'this x ', this.x, 'this dx', this.dx);
    }
}

const redBall = new Ball(750, 100, 20, "red");
redBall.draw();
let moveR, moveL;
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        //clear canvas
        moveR = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            redBall.moveRight();
        }, 100); // 50fps thap (1000/60 = 10)
    }

    if (e.keyCode == 37) {
        moveL = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            redBall.moveLeft();
        }, 100); // 50fps thap (1000/60 = 10)
    }

    if (e.keyCode == 32) {
        redBall.stop();
    }
})
// game loop : fps
