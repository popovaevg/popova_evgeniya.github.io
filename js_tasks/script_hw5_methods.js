// Методы объектов и контекст исполнения функции

//task 1
//ET = 10 min; AT = 10 min
// Создайте объект calculator с методами:
// a.	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// b.	sum() возвращает сумму этих двух значений
// c.	multi() возвращает произведение этих двух значений
// d.	diff() возвращает разницу
// e.	div() возвращает частное
// let calculator = {
//     read: function() {
//         this.x = prompt ('Введите x');
//         this.y = prompt ('Введите y');
//         return `${this.x}\n${this.y}`;
//     },
//     sum: function() {
//         return `Сумма = ${Number(this.x) + Number(this.y)}`;
//     },
//     multi: function() {
//         return `Произведение = ${this.x * this.y}`;
//     },
//     diff: function() {
//         return `Разница = ${this.x - this.y}`;
//     },
//     div: function() {
//         return `Частное  = ${this.x/this.y}`;
//     }
// }
// alert( calculator.read() ); 
// alert( calculator.sum() ); 
// alert( calculator.multi() ); 
// alert( calculator.diff() ); 
// alert( calculator.div() ); 

//task 2
//ET = 5 min; AT = 5 min
//Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), 
//при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.
// let coffeeMachine = {
//     message: 'Your coffee is ready!',
//     start: function() {
//         setTimeout(() => alert(this.message),3000);
//     } 
// }
// coffeeMachine.start();

// task 3
// ET = 5 min; AT = 5 min
//Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения. 
//Используйте концепцию chaining для создания цепочки вызовов.
// let counter = {
//     count: 0,
//     inc: function() {
//         this.count++;
//         return this;
//     },
//     dec: function() {
//         this.count--;
//         return this;
//     },
//     getValue: function() {
//         return this.count;
//     }
//   }
// let current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current);

//task 4
// ET = 10 min; AT = 10 min
//Cоздайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
//Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. 
//Для расчетов все методы используют функционал ранее созданного калькулятора.
// let calculator = {
//     read: function() {
//         this.x = prompt ('Введите x');
//         this.y = prompt ('Введите y');
//         return `${this.x}\n${this.y}`;
//     },
//     sum: function() {
//         return `Сумма = ${Number(this.x) + Number(this.y)}`;
//     },
//     multi: function() {
//         return `Произведение = ${this.x * this.y}`;
//     },
//     diff: function() {
//         return `Разница = ${this.x - this.y}`;
//     },
//     div: function() {
//         return `Частное  = ${this.x/this.y}`;
//     }
// }
// calculator.read(); 
// calculator.sum(); 
// calculator.multi(); 
// calculator.diff(); 
// calculator.div(); 
// let obj = {
//     x: 3,
//     y: 2,
//     getSum: function() {
//         return calculator.sum.call(obj);
//     },
//     getDiff: function() {
//         return calculator.diff.call(obj);
//     },
//     getMulti: function() {
//         return calculator.multi.call(obj);
//     },
//     getDiv: function() {
//         return calculator.div.call(obj);
//     }
// }
// alert (obj.getSum());
// alert (obj.getDiff());
// alert (obj.getMulti());
// alert (obj.getDiv());

//task 5
// ET = 15 min; AT = 15 min
//Есть следующий код:
// var country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };
// function format(start, end) {
//     console.log(start + this.name + end);
// }
// //Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
// format.call(country,'',''); // Ukraine
// format.apply(country, ['[',']']); // [Ukraine]
// format.call(country.capital,'',''); // Kyiv
// format.apply(country.capital,['','']); // Kyiv
// format.apply(null,['undefined','']); // undefined

//task 6
// ET = 15 min; AT = 30 min
//Создайте объект user с полем name. Создайте функцию format с параметрами start и end. 
//Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя.
// let user = {
//     name: 'John'
// }
// function format(start, end) {
//     console.log(start + this.name + end);
// }

//Реализуйте 2 версии текущего задания, используя:
//1. Анонимную функцию
//let userFormat = format.apply(user, ['<<<', '>>>']); // <<<John>>>

//2. Метод bind()
// let userFormat = format.bind(user);
// userFormat('<<<', '>>>'); 

//task 7
// ET = 15 min; AT = 10 min
//Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: 
//разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, 
//которая выводит приветствие тому, кто передан в ее параметре:
// function concat(str1, separ, str2){
//     console.log(str1 + separ + str2);
// }
// let hello = concat.bind(null,'Hello',', ');
// hello('World'); 
// hello('John'); 

//Рекурсия
//task 1
// ET = 30 min; AT = 25 min
//Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:
// function cube(x) {
//     let pow = 1;
//     for (i=0; i<3; i++){
//         pow *= x;
//     }
//     return pow;
// }
// console.log( cube(2) ); // 8

//--------рекурсия--------
// let pow = 3;
// function cube(x) {
//     return (--pow == 0)? x:(x * cube(x));
// }
// console.log( cube(2) ); // 8

//task 2
// ET = 30 min; AT = 25 min
//Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:
// function sum(...args) {
//     return (args.length === 0) ? 0 : args[0] + sum.apply(null, args.slice(1)); //apply вызывает аргументы, предоставленные в виде массива
// }
// console.log( sum(1, 2, 3, 4, 5) ); // 15
