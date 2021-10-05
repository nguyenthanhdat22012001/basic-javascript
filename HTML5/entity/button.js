export class Button {
    constructor(style, parentEl,x, y,width,height,ctx,btnText,className) {
        this.style = style;
        this.parentEl = parentEl;
        this.ctx = ctx;
        this.x =x;
        this.y =y;
        this.width =width;
        this.height =height;
        this.btnText =  btnText;
        this.className = className;
    }
    
    draw() {
        const button = document.createElement("button");
        button.style.backgroundColor = this.style.color;
        button.style.width = this.style.width;
        button.style.height = this.style.height;
        button.style.position = this.style.position;
        button.style.top = this.style.top;
        button.style.left = this.style.left;
        button.setAttribute("class", this.className);
        if(this.btnText){
            button.textContent = this.btnText;
        }
        this.parentEl.prepend(button);
    }
    drawRect(StartX,StartY,MoveX,MoveY){
        let width = MoveX - StartX;
        let height = MoveY - StartY;
        this.clearAll();
        this.ctx.beginPath();
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(StartX, StartY, width, height);
        this.ctx.stroke();
    }
    drawArc(StartX,StartY,MoveX){
        let width = MoveX - StartX;
        let radius = width/2;
        this.clearAll();
        this.ctx.beginPath();
        this.ctx.fillStyle = 'red';
        this.ctx.arc(StartX, StartY, radius, 0, 2 * Math.PI)
        this.ctx.fill();
    }
    clearAll(){
        this.ctx.beginPath();
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(this.x, this.y, this.width,this.height);
        this.ctx.stroke();
    }
}