//Функции

//task 1
//ET = 2 min; AT = 2 min
//Напишите функцию max, которая сравнивает два числа и возвращает большее
// let max = (a,b) => {
//     if (a>b) return a;
//     else return b;
// }
// console.log( max(0, -1) ); 

//task 2
//ET = 5 min; AT = 5 min
//Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них
// let min = (...x) => {
//     min = x[0];
//     for (let i=1; i<x.length; i++)
//     if (min>x[i]) 
//         min=x[i];
//     return min;
// }
// console.log( min(0, -1, 100, 500, 100500) ); 

//task 3
//ET = 30 min; AT = 30 min
//Изучите перебирающие методы массивов: forEach, filter, map. 
//Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. 
//Используя встроенные функции массивов:	
///a. Отфильтруйте пользователей младше 18 лет
//b. Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
// c. Сформируйте новый массив, который содержит только полное имя пользователей
// let users = [
//     {
//         firstname: "Евгения",
//         lastname: "Попова",
//         age: 22
//     },
//     {
//         firstname: "Иван",
//         lastname: "Иванов",
//         age: 26
//     },
//     {
//         firstname: "Катя",
//         lastname: "Соколова",
//         age: 29
//     },
//     {
//         firstname: "Митя",
//         lastname: "Рожнов",
//         age: 18
//     },
//     {
//         firstname: "Даша",
//         lastname: "Зыкина",
//         age: 10
//     },
//     {
//         firstname: "Ева",
//         lastname: "Андреева",
//         age: 23
//     },
//     {
//         firstname: "Николай",
//         lastname: "Петров",
//         age: 12
//     },
//     {
//         firstname: "Соня",
//         lastname: "Светличная",
//         age: 8
//     },
//     {
//         firstname: "Павел",
//         lastname: "Костин",
//         age: 20
//     },
//     {
//         firstname: "Маша",
//         lastname: "Дубцова",
//         age: 40
//     }
// ];
// let minors = users.filter((element) => {
//        return element.age < 18;
// });
// console.log (minors);
// let new_users = users.map((element) => {
//     element.fullName = element.firstname + ' ' + element.lastname;
//     return element;
// });
// console.log (new_users);
// let fullNames_users = users.map((element) => {
//     return element.fullName;
// });
// console.log (fullNames_users);

//task 4
//ET = 30 min; AT = 1 hour
//Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент
// let shift = (arr) => {
//     let del_item = arr.slice(0,1);
//     return arr.filter((item) => {        
//         return del_item.indexOf(item) == -1;     
//       });
// }
// console.log (shift ([0, -1, 100, 500, 100500] ));

//task 5
//ET = 30 min; AT = 15 min
//Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.
// let funcPush = (arr) => {
//     for(let i = 0; i<5; i++){
//         arr[arr.length] = Math.random();
//     }
//     return arr;
// }
// console.log (funcPush([0, -1, 100, 500, 100500] ));

//task 6
//ET = 30 min; AT = 4 hours
//Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. 
//Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.
// function objectAssign(mainObj, ...addObjs) {
//     for (let i = 0; i<addObjs.length; i++ ){
//         for(let key in addObjs[i]){
//             for(let mkey in mainObj){
//                 if(key == mkey) 
//                     mkey = addObjs[i][key];
//                 else 
//                     mainObj[key] = addObjs[i][key];
//             }
//         }
//     }      
//     return mainObj;
// }
// console.log (objectAssign(
//     {
//         firstname: "Евгения",
//         lastname: "Попова",
//         age: 22
//     },
//     {
//         author: "Лев Толстой",
//         book: "Война и мир"
//     },
//     {
//         author: "Пушкин",
//         poem: "Бородино"
//     }
// ));

//task 7
//ET = 20 min; AT = 15 min
//Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, 
//если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, 
//а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. 
//Параметр author - опциональный, но должна происходить проверка: если параметр не передан, 
//то вместо него подставляется значение ‘Anonymous’.
// function setComment(date, message, author) {
//     if (date === undefined) {
//         alert ('Параметр date передан некорректно'); 
//         return;
//     }
//     if (message === undefined) {
//         alert ('Параметр message передан некорректно');
//         return;
//     }
//     if (author === undefined) author = "Anonymous";
//     return console.log (author + ', ' + date + '\n' + message);
// }
// setComment('08.09.2019','Сообщение', 'Автор');

//Замыкания
//task 1
//ET = 30 min; AT = 45 min
//Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки 
//и служит для замера времени выполнения другого кода.
// function createTimer() {
//     let t0 = performance.now();
//     alert('!');
//     let t1 = performance.now();
//     function display() {
//         alert ("Alert выполнялся " + (t1 - t0) + " мс");
//     } 
//     return display;
// };
// let timer = createTimer();
// timer(); 

//task 2
//ET = 30 min; AT = 10 min
//Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию, 
//которая добавляет к первому параметру второй.
// function createAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// };
// let add5 = createAdder(5);
// let add10 = createAdder(10);
// alert (add5(2) + '\n' + add10(2));  
