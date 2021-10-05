export class Board {
    constructor(stx, sty, enx, eny, style, ctx) {
        this.stx = stx;
        this.sty = sty;
        this.enx = enx;
        this.eny = eny;
        this.style = style;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.stx, this.sty);
        this.ctx.lineTo(this.enx, this.eny);
        this.ctx.lineWidth = this.style.width;
        this.ctx.strokeStyle = this.style.color;
        this.ctx.stroke();
    }
}