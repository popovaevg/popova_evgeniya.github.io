//ООП с помощью классов
// ET = 15 min; AT = 2 hour
class Figure {
    constructor (x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    getFigure () {
        return `${this.x} ${this.y} ${this.color}`;
    }
}
class Line extends Figure{
    constructor (x, y, x2, y2, color){
        super(x, y, color);
        this.x2 = x2;
        this.y2 = y2;
    }
    draw(ctx) {
        ctx.strokeStyle = this.color;
        ctx.beginPath(); // Начинает новый путь
        ctx.moveTo(this.x, this.y); // Передвигает перо в точку 
        for(var i = 0 ; i < 10;i++){
            this.x2 = this.x2+50;
            if(i%2 == 0)
                this.y2 = this.y2 + 100;
            else
                this.y2 = this.y2 + 10;
            ctx.lineTo(this.x2, this.y2); // Рисует линию до точки 
        }
        ctx.stroke(); // Отображает путь
    }
}
class Circle extends Figure {
    constructor (x, y, r, color){
        super(x, y, color);
        this.r = r;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI); //добавляет дугу к пути с центром (x, y) и с радиусом r  с началом в startAngle и с концом endAngle и с направлением
        ctx.stroke();
        ctx.fill();
    }
}
class Rect extends Figure {
    constructor (x, y, w, h, color){
        super(x, y, color);
        this.w = w;
        this.h = h;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h); //Рисование заполненного прямоугольника
    }
}

class Canvas {
    constructor (canvas){
        this.canvas = document.getElementById(canvas);
        console.log (this.canvas);
    }
    add (...arg){
        if (this.canvas.getContext) {
            let ctx = this.canvas.getContext('2d');
            console.log (arg);
            for (var i = 0; i<arg.length; i++)
                console.log (arg[i].draw(ctx));
        }
    }
}

var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color
var drawArea = new Canvas('canvasID');
drawArea.add(line);
drawArea.add(circle, rect);
