'use strict';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d'); //для хранения 2D визуализации контекста — метод, который используется для отрисовки в Canvas.
var x = 0;
var y = 0;
var dx; //направление движения по оси
var dy; 
var radiusOrSideHalf;
var сolors = ['black', 'orange', 'blue', 'green', 'red', 'purple', 'yellow'];
var randomColor;

class Figure {
    constructor(x, y, dx, dy, radiusOrSideHalf, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radiusOrSideHalf = radiusOrSideHalf;
        this.color = color;
    }
    drawReflect() {
        this.x += this.dx; //чтобы мяч отрисовывался каждый раз на новой позиции
        this.y += this.dy;
        if (this.x + this.dx > canvas.width-this.radiusOrSideHalf || this.x + this.dx < this.radiusOrSideHalf) 
            this.dx = -this.dx;
        if (this.y + this.dy > canvas.height-this.radiusOrSideHalf || this.y + this.dy < this.radiusOrSideHalf)
            this.dy = -this.dy;
    }
}

class Ball extends Figure {
    constructor(x, y, dx, dy, radiusOrSideHalf, color) {
        super(x, y, dx, dy, radiusOrSideHalf, color);
    }
    drawBall() {
        //ctx.clearRect(0, 0, canvas.width, canvas.height); //для удаления предыдущей отрисованной фигуры (x и y координаты верхнего левого угла прямоугольника, x и y координаты нижнего правого угла прямоугольника)
        ctx.beginPath(); //начало пути
        ctx.arc(this.x, this.y, this.radiusOrSideHalf, 0, Math.PI*2); //добавляет дугу к пути с центром (x, y), радиус, начальный и конечный угол отрисовки круга (в радианах), (направление отрисовки: (false - по часовой стрелке, по умолчанию, или true - против часовой стрелки))
        ctx.fillStyle = this.color; //заполнение фигуры цветом
        ctx.fill(); //отрисовывает
        // ctx.stroke(); //вместо fill() и fillStyle, чтобы окрасить только внешнюю обводку фигуры
        ctx.closePath(); //конец пути
    }
}

class Square extends Figure {
    constructor(x, y, dx, dy, radiusOrSideHalf, color) {
        super(x, y, dx, dy, radiusOrSideHalf, color);
    }
    drawSquare() {
        //ctx.clearRect(0, 0, canvas.width, canvas.height); //для удаления предыдущей отрисованной фигуры (x и y координаты верхнего левого угла прямоугольника, x и y координаты нижнего правого угла прямоугольника)
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.radiusOrSideHalf*2, this.radiusOrSideHalf*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

var balls = [],
    squares = [];
    
function createFigures() {
    let i=1; 
    while (balls.length < 10) {
        console.log('Figure ' + i + ':');
        dx = Math.floor(Math.random() * (15 - 5 + 1)) + 5; //для передвижения мяча
        dy = Math.floor(Math.random() * (15 - 5 + 1)) + 5; //для передвижения мяча
        radiusOrSideHalf = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        randomColor = сolors[Math.floor(Math.random() * сolors.length)];
        console.log(randomColor + ' circle');
        console.log('Сircle area: ' + Math.round(Math.PI*radiusOrSideHalf**2));
        var ball = new Ball(x,y,dx,dy,radiusOrSideHalf,randomColor);
        balls.push(ball);  
        i++;
        console.log('-------------------------');
    }
    while (squares.length < 10) {
        console.log('Figure ' + i + ':');
        dx = Math.floor(Math.random() * (15 - 5 + 1)) + 5; //для передвижения мяча
        dy = Math.floor(Math.random() * (15 - 5 + 1)) + 5; //для передвижения мяча
        radiusOrSideHalf = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        randomColor = сolors[Math.floor(Math.random() * сolors.length)];
        console.log(randomColor + ' square');
        console.log('Square area: ' + (radiusOrSideHalf*2)**2);
        var square = new Square(x,y,dx,dy,radiusOrSideHalf,randomColor);
        squares.push(square); 
        i++; 
        console.log('-------------------------');
    }
}

function reflectOfEachOther() {
    for (let el1 of balls){
        for (let key1 in el1) {
            for (let el2 of squares){
                for (let key2 in el2) {
                    if (el1['x'] + el1['dx'] + el1['radiusOrSideHalf']*2 == el2['x'] + el2['dx'] + el2['radiusOrSideHalf']*2 && el1['y'] + el1['dy'] + el1['radiusOrSideHalf']*2 == el2['y'] + el2['dy'] + el2['radiusOrSideHalf']*2 
                    || el1['x'] + el1['dx'] == el2['x'] + el2['dx'] && el1['y'] + el1['dy'] == el2['y'] + el2['dy']
                    || el1['x'] + el1['dx'] + el1['radiusOrSideHalf']*2 == el2['x'] + el2['dx'] && el1['y'] + el1['dy'] + el1['radiusOrSideHalf']*2 == el2['y'] + el2['dy']
                    || el1['x'] + el1['dx'] == el2['x'] + el2['dx'] + el2['radiusOrSideHalf']*2 && el1['y'] + el1['dy'] == el2['y'] + el2['dy'] + el2['radiusOrSideHalf']*2) {
                        el1['dx']= -el1['dx'];
                        el1['dy']= -el1['dy'];
                    }
                        
                }
            }  
        }
    }
    balls.forEach((value, index) => {
        if (value.x[index] + value.dx[index] == value.x[index+1] + value.dx[index+1] && value.y[index] + value.dy[index] == value.y[index+1] + value.dy[index]) {
            value.dx = -value.dx;
            value.dy = -value.dy;
        }
        // var wx = value.x[index] - value.x[index+1];
        // var wy = value.y[index] - value.y[index+1];
        // var distance = Math.sqrt(wx * wx + wy * wy);
        // if (distance < value.radiusOrSideHalf[index] + value.radiusOrSideHalf[index+1]){
        //     value.dx = -value.dx;
        //     value.dy = -value.dy;
        // }
    });
    squares.forEach((value, index) => {
        if (value.x[index] + value.dx[index] == value.x[index+1] + value.dx[index+1] && value.y[index] + value.dy[index] == value.y[index+1] + value.dy[index]) {
            value.dx = -value.dx;
            value.dy = -value.dy;
        }
    });
}

function moveFigures () {
    setInterval(() => {
        ctx.fillStyle = 'rgba(191, 157, 194, 0.25)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        }, 1);
    setInterval(() => {
        balls[0].drawBall();
        balls[0].drawReflect();
    }, 30);
    setTimeout(() => {
        setInterval(() => {
            squares[0].drawSquare();
            squares[0].drawReflect();
        }, 30);
    },1000);
    setTimeout(() => {
        setInterval(() => {
            balls[1].drawBall();
            balls[1].drawReflect();
        }, 30);
    },2000);
    setTimeout(() => {
        setInterval(() => {
            squares[1].drawSquare();
            squares[1].drawReflect();
        }, 30);
    },3000);
    setTimeout(() => {
        setInterval(() => {
            balls[2].drawBall();
            balls[2].drawReflect();
        }, 30);
    },4000);
    setTimeout(() => {
        setInterval(() => {
            squares[2].drawSquare();
            squares[2].drawReflect();
        }, 30);
    },5000);
    setTimeout(() => {
        setInterval(() => {
            balls[3].drawBall();
            balls[3].drawReflect();
        }, 30);
    },6000);
    setTimeout(() => {
        setInterval(() => {
            squares[3].drawSquare();
            squares[3].drawReflect();
        }, 30);
    },7000);
    setTimeout(() => {
        setInterval(() => {
            balls[4].drawBall();
            balls[4].drawReflect();
        }, 30);
    },8000);
    setTimeout(() => {
        setInterval(() => {
            squares[4].drawSquare();
            squares[4].drawReflect();
        }, 30);
    },9000);
    setTimeout(() => {
        setInterval(() => {
            balls[5].drawBall();
            balls[5].drawReflect();
        }, 30);
    },10000);
    setTimeout(() => {
        setInterval(() => {
            squares[5].drawSquare();
            squares[5].drawReflect();
        }, 30);
    },11000);
    setTimeout(() => {
        setInterval(() => {
            balls[6].drawBall();
            balls[6].drawReflect();
        }, 30);
    },12000);
    setTimeout(() => {
        setInterval(() => {
            squares[6].drawSquare();
            squares[6].drawReflect();
        }, 30);
    },13000);
    setTimeout(() => {
        setInterval(() => {
            balls[7].drawBall();
            balls[7].drawReflect();
        }, 30);
    },14000);
    setTimeout(() => {
        setInterval(() => {
            squares[7].drawSquare();
            squares[7].drawReflect();
        }, 30);
    },15000);
    setTimeout(() => {
        setInterval(() => {
            balls[8].drawBall();
            balls[8].drawReflect();
        }, 30);
    },16000);
    setTimeout(() => {
        setInterval(() => {
            squares[8].drawSquare();
            squares[8].drawReflect();
        }, 30);
    },17000);
    setTimeout(() => {
        setInterval(() => {
            balls[9].drawBall();
            balls[9].drawReflect();
        }, 30);
    },18000);
    setTimeout(() => {
        setInterval(() => {
            squares[9].drawSquare();
            squares[9].drawReflect();
        }, 30);
    },19000);
} 

createFigures();
moveFigures();
reflectOfEachOther();
