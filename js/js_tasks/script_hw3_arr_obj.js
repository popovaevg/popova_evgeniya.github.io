 //Массивы и объекты

//task 1
//ET = 15 min; AT = 1 hour
//Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
//Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
// let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
// let sum = 0;
// for (let i=0; i<arr.length; i++){
//     arr[i] = Number(arr[i]);
//     if (arr[i]) //если NaN - это false
//         sum += arr[i];
// }
// alert (sum);

//task 2
//ET = 15 min; AT = 15 min
//Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. 
//Переберите массив и распечатайте в консоли значения его элементов, 
//возведенные в пятую степень, не используя функцию Math.pow().
// let arr = [];
// for (let i=0; i<10; i++)
//     arr.push(Math.floor(Math.random() * 100) / 100);
// console.log(arr);
// for (let j=0; j<arr.length; j++){
//     arr[j] = arr[j]**5;
//     console.log (arr[j]);
// }

//task 3
//ET = 15 min; AT = 30 min
//Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
//a.Добавьте в начало массива значение ‘Backbone.js’
//b.Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
//c.Добавьте в массив значение ‘CommonJS’ вторым элементом
//d.Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
// let arr = ['AngularJS','jQuery'];
// arr.unshift('Backbone.js');
// arr.push('ReactJS','Vue.js');
// arr.splice(1, 0, 'CommonJS');
// for (let j=0; j<arr.length; j++){
//     if (arr[j] == 'jQuery') {
//         alert ('Это здесь лишнее ' + arr[j]);
//         arr.splice(j, 1);
//     }
// }
// console.log (arr);

//task 4
//ET = 15 min; AT = 40 min
//Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. 
//Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). 
//Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.
// let str = 'Как однажды Жак звонарь сломал фонарь головой';
// let arr = str.split(' ');
// arr.splice(5, 1, 'головой');
// arr.splice(6, 1, 'фонарь');
// console.log (arr);
// arr += ' ' ;
// for(let i=0; i<arr.length; i++ ) 
//     arr = arr.replace(',', ' ');
// console.log (arr);

//task 5
//ET = 20 min; AT = 1 hour
//Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. 
//С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. 
//Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.
// let person = {
//     name: "Jane",
//     age: 22,
//     job: "Developer",
//     company: "Google"
// }
// let prop = prompt ("Введите свойство для отображения");
// if (prop in person)
//     alert(prop + ': ' + person[prop]);
// else {
//     alert ("Такого свойста нет. Свойство будет добавлено");
//     let value = prompt ("Введите значение свойства");
//     person[prop] = [value];
//     alert (prop + ': ' + person[prop]);
// }
// console.log (Object.keys(person));

//task 6
//ET = 20 min; AT = 35 min
//Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt 
//(например: brand, model, resolution, color...), не используя вспомогательные переменные. 
//Добавьте этот гаджет персоне, созданной ранее.
// let phone = {},
//     propPhone = prompt ("Введите свойство"),
//     valuePhone = prompt ("Введите значение свойства");
// phone[propPhone] = [valuePhone];
// Object.assign(person, phone); //Метод копирует свойства
// console.log (Object.keys(person));

//task 7
//ET = 25 min; AT = 1 hour
//Создайте объект dates для хранения дат. Первая дата – текущая, new Date. Вторая дата – текущая дата минус 365 дней. 
//Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.
// let dates = {};
// let date = new Date();
// dates['date_first'] = [date];
// let date1 = new Date();
// date1.setDate(date1.getDate()-365);
// dates['date_second'] = [date1];
// // var dateOffset = (24*60*60*1000) * 365;
// // date_first.setTime(date_first.getTime() - dateOffset);
// console.log (Object.keys(dates));
// let enter_date = prompt('Введите дату в формате yyyy-MM-dd');
// let endD = new Date(enter_date);
// console.log (endD.toLocaleString());
// if (endD >= new Date(dates.date_second) && endD <= new Date (dates.date_first))
//     alert ('Введенная дата попадает в диапазон дат');
// else alert ('Введенная дата не попадает в диапазон дат');
 
//task 8
//ET = 10 min; AT = 10 min
//Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, 
//полученное значение добавляйте в конец созданного массива. 
//После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.
// let arr = [], 
//     sim, 
//     sum = 0;
// for (let i=0; i<5; i++){
//     sim = prompt ('Введите символ');
//     arr.push(sim);
//     if (!(isNaN(sim)))  
//         sum += +arr[i];
// }
// alert (sum);

//task 9
//ET = 15 min; AT = 30 min
//Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения.
// let multArr = [];
// for (let v = 0; v < 10; v++) {
//     multArr.push([]);
//     for (let i = 1; i < 10; i++) {
//         multArr[v].push(v + '*' + i + '=' +i * v);
//     }
// }
// console.log (multArr);

//task 10
//ET = 5 min; AT = 3 min
//Создайте структуру данных, полностью описывающую html-разметку картинки
// let img = {
//     "src": "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
//     "alt": "",
//     "style": "border: 1px solid #ccc",
//     "width": 200 
// }

//task 11
//Задание на уроке: перебрать массив и вывести tomato, 15, Kate.
// let str = '';
// let arr = [
//     ['potato','banana','tomato'],
//     [15,10,5],
//     ['John','Kate','Jack']
// ];
// for (let i=0; i<arr.length;i++){
//     for (let j=0; j<arr.length;j++){
//         if (i==0 && j==2)
//         str += arr[i][j];
//         if (i==1 && j==0)
//         str += ' ' + arr[i][j];
//         if (i==2 && j==1)
//         str += ' ' + arr[i][j];
//     }
// }
// console.log (str);
