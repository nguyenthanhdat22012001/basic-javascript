import { Paper } from "./entity/paper.js";
import { Board } from "./entity/dashboard.js";
import { Button } from "./entity/button.js";
import { SelectBox } from "./entity/SelectBox.js";

const canvas = document.getElementById("canvas");
canvas.style.cursor= 'pointer';
const ctx = canvas.getContext("2d");
const divMain = document.getElementById("main");
/**************************init**********************************/
//paper
const paperHeight = 600; // magic number
const paperWidth = 1200;
const paper = new Paper(paperHeight, paperWidth, "black solid", canvas);
paper.draw();

//dashboard
const boardStart = { x: 0, y: 100 };
const boardEnd = { x: paperWidth, y: boardStart.y };
const boardWidth = 5;
const board = new Board(boardStart.x, boardStart.y, boardEnd.x, boardEnd.y, { width: boardWidth, color: "blue" }, ctx);
board.draw();

//button
const redBtnStyle = {
    color: "red",
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "30px",
    left: "50px"
}
const redBtn = new Button(redBtnStyle, divMain,undefined,undefined,undefined,undefined,undefined,undefined,"btn-color");
redBtn.draw();

const blueBtnStyle = {
    color: "blue",
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "30px",
    left: "150px"
}
const blueBtn = new Button(blueBtnStyle, divMain,undefined,undefined,undefined,undefined,undefined,undefined,"btn-color");
blueBtn.draw();

const blackBtnStyle = {
    color: "black",
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "30px",
    left: "250px"
}
const blackBtn = new Button(blackBtnStyle, divMain,undefined,undefined,undefined,undefined,undefined,undefined,"btn-color");
blackBtn.draw();

//select box
const SelectStyle = {
    color: "white",
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "30px",
    left: "350px"
}
const selectOption = [
    {
        text: '20px',
        value: 20,
    },
    {
        text: '50px',
        value: 50,
    },
    {
        text: '100px',
        value: 100,
    },
    {
        text: '120px',
        value: 120,
    },
    {
        text: '150px',
        value: 150,
    },
    {
        text: '200px',
        value: 200,
    }
];
const BoxSelect = new SelectBox(selectOption, SelectStyle, divMain);
BoxSelect.draw();
// button clear all
const BtnClearAllStyle = {
    color: "white",
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "30px",
    left: "450px"
}
const BtnClearAll = new Button(BtnClearAllStyle, divMain, 0, (boardStart.y + boardWidth), paperWidth, paperHeight, ctx,'clear all','btn-clear-all');
BtnClearAll.draw();
// button rect
const BtnRectStyle = {
    color: "white",
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "30px",
    left: "550px"
}
const BtnRect = new Button(BtnRectStyle, divMain, 0, (boardStart.y + boardWidth), paperWidth, paperHeight, ctx,'rect','btn-rect');
BtnRect.draw();

// button rect
const BtnArcStyle = {
    color: "white",
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "30px",
    left: "650px"
}
const BtnArc = new Button(BtnArcStyle, divMain, 0, (boardStart.y + boardWidth), paperWidth, paperHeight, ctx,'arc','btn-arc');
BtnArc.draw();


/****************************************************************/
/*************************Running********************************/
const allBtns = document.getElementsByClassName("btn-color"); // like array
// for (let i = 0; i < allBtns.length ; i ++) {
//     allBtns[i].addEventListener("click", () => console.log("done"))
// }
// Set --> { unique } -> [] --> cac phan tu cua mang la trung lap
// Array.from(allBtns).forEach(btn => btn.addEventListener("click", () => console.log("done"))); // khong ho tro ie thap 

// Higher order function (bind, call, apply)
// Array.prototype.forEach.call(allBtns, (btn) => btn.addEventListener("click" , () => console.log("done")))

// ES6 : spread operator ... ( template string, arrow function, toan tu 3 ngoi, nulllish, Optional chaining )

let colorDraw = '#000';
let lineWidthDraw;

[...allBtns].forEach(btn => btn.addEventListener("click", () => {
        const color = window.getComputedStyle(btn).backgroundColor;
        colorDraw = color;
        canvasDraw(lineWidthDraw, colorDraw);
}));

let isDraw = false;
canvas.addEventListener("mousedown", () => isDraw = true);
canvas.addEventListener("mouseup", () => isDraw = false);

function canvasDraw(lineWidthDraw, colorDraw) {
    canvas.addEventListener("mousemove", (e) => {
        if (e.clientY > boardEnd.y + boardWidth) {
            if (isDraw) {
                ctx.beginPath();
                ctx.moveTo(e.clientX, e.clientY);
                ctx.lineTo(e.clientX, e.clientY);
                ctx.lineCap = "round";
                ctx.lineWidth = lineWidthDraw;
                ctx.strokeStyle = colorDraw;
                ctx.stroke();
                console.log('lineWidthDraw =',lineWidthDraw)
            }
        }
      
    });
}


// canvas.addEventListener("mouseup", () => console.log("mouse up"));

//select box
const selectBtn = document.getElementsByClassName("selectBox");
lineWidthDraw = parseInt(selectBtn[0].value);
[...selectBtn].forEach(btn => btn.addEventListener("change", (e) => {
    lineWidthDraw = parseInt(e.target.value);
     canvasDraw(lineWidthDraw, colorDraw);
}));

// button clear all

const ClearAllBtn = document.getElementsByClassName("btn-clear-all");

[...ClearAllBtn].forEach(btn => btn.addEventListener("click", () => {
    BtnClearAll.clearAll();
}));

// draw rectangle
const RectBtn = document.getElementsByClassName("btn-rect");

let isDown = false;
let StartX;
let StartY;
let MoveX;
let MoveY;

[...RectBtn].forEach(btn => btn.addEventListener("click", () => {
    canvasDrawRectangle();
}));

function canvasDrawRectangle() {
    canvas.addEventListener("mousedown", (e) => {
        StartX = parseInt(e.clientX);
        StartY = parseInt(e.clientY);
        isDown = true;
        console.log('mousedown');
    });
    canvas.addEventListener("mousemove", (e) => {
        if (e.clientY > boardEnd.y + boardWidth) {
            if (isDraw) {
                MoveX = parseInt(e.clientX);
                MoveY = parseInt(e.clientY);
                BtnRect.drawRect(StartX,StartY,MoveX,MoveY);
            }
        }
    });
    canvas.addEventListener("mouseup", (e) => {
        isDown = false;
    });
}

// draw arc
const ArcBtn = document.getElementsByClassName("btn-arc");

[...ArcBtn].forEach(btn => btn.addEventListener("click", () => {
    canvasDrawArc();
}));

function canvasDrawArc() {
    canvas.addEventListener("mousedown", (e) => {
        StartX = parseInt(e.clientX);
        StartY = parseInt(e.clientY);
        isDown = true;
    });
    canvas.addEventListener("mousemove", (e) => {
        if (e.clientY > boardEnd.y + boardWidth) {
            if (isDraw) {
                MoveX = parseInt(e.clientX);
                MoveY = parseInt(e.clientY);
                BtnRect.drawArc(StartX,StartY,MoveX,MoveY);
            }
        }
    });
    canvas.addEventListener("mouseup", (e) => {
        isDown = false;
    });
}