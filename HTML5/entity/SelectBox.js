export class SelectBox {
    constructor(options,style,parentEl) {
        this.style = style;
        this.options = options;
        this.parentEl = parentEl;
    }
    
    draw() {
        const select = document.createElement('select');
        select.style.backgroundColor = this.style.color;
        select.style.width = this.style.width;
        select.style.height = this.style.height;
        select.style.position = this.style.position;
        select.style.top = this.style.top;
        select.style.left = this.style.left;
        select.setAttribute("class", "selectBox");
        this.options.forEach((item)=>{
            const option = document.createElement('option');
            option.value = item.value;
            option.text = item.text;
            select.appendChild(option);
        })
        this.parentEl.prepend(select);
    }
}