export class Paper {
    constructor(height, width, style, canvas) {
        this.height = height;
        this.width = width;
        this.style = style;
        this.canvas = canvas;
    }

    draw() {
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        this.canvas.style.border = this.style;
    }
}