//ООП в функциональном стиле
// ET = 2 hour; AT = 5 hour
function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.getFigure = function() {
        return `${this.x} ${this.y} ${this.color}`;
    };
}
function Line (x1, y1, x2, y2, color){
    Figure.call(this, x1, y1, color);
    this.x2 = x2;
    this.y2 = y2;
    this.draw = function(ctx) {
        ctx.strokeStyle = color;
        ctx.beginPath(); // Начинает новый путь
        ctx.moveTo(x1, y1); // Передвигает перо в точку 
        for(var i = 0 ; i < 10;i++){
            this.x2 = this.x2+50;
            if(i%2 == 0)
                this.y2 = this.y2 + 100;
            else
                this.y2 = this.y2 + 10;
            ctx.lineTo(this.x2, this.y2); // Рисует линию до точки 
        }
        ctx.stroke(); // Отображает путь
    };
}
function Circle (x, y, r, color){
    Figure.call(this, x, y, color);
    this.r = r;
    this.draw = function(ctx) {
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, this.r, 0, 2 * Math.PI); //добавляет дугу к пути с центром (x, y) и с радиусом r  с началом в startAngle и с концом endAngle и с направлением
        ctx.stroke();
        ctx.fill();
    };
}
function Rect (x, y, w, h, color){
    Figure.call(this, x, y, color);
    this.w = w;
    this.h = h;
    this.draw = function(ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, this.w, this.h); //Рисование заполненного прямоугольника
    };
}

function Canvas (canvas){
    this.canvas = document.getElementById(canvas);
    if (this.canvas.getContext) {
        let ctx = this.canvas.getContext('2d');
        this.add = function(...arg){
            for (let i = 0; i<arg.length; i++)
                arg[i].draw(ctx);
        };
    }
}
var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color
var drawArea = new Canvas('canvasID');
drawArea.add(line);
drawArea.add(circle, rect);
