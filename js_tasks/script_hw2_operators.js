//Условные и логические операторы
//////////////////task 1////////////////////
// let x = prompt('Введите число х');
// if (x>0) 
//     alert ('x - положительное число');
// if (x<0)
//     alert ('x - отрицательное число');
// if (x==0)
//     alert ('x = 0');

//////////////////task 2////////////////////
// let a = 1;
// let b = 5;
// let c = 10;
// let min = a;
// if (min>b) {
//     min=b; 
//     alert('Минимальное значение b = ' + b);
// }
// if (min>c) {
//     min=c;
//     alert('Минимальное значение c = ' + c);
// }
// else alert('Минимальное значение a = ' + a);

//////////////////task 3////////////////////
// let myMoney = prompt('Сколько у вас денег?');
// let myFriendMoney = prompt('Сколько денег у вашего друга?');
// let sum = myMoney + myFriendMoney;
// if (sum >= 50000) 
//     alert ('Вы можете полететь на Майорку!');
//     else 
//         alert ('Вы можете выпить пива');

//////////////////task 4////////////////////
// let age = 25;
// if (age >=20 && age < 27)
//     alert ('Выслать повестку');

//////////////////task 5////////////////////
// let bus = prompt('Какая маршрутка приехала?');
// if (bus==7||bus==225||bus==255)
//     alert ('Вы едете домой');
//     else 
//         alert('Ожидаете');

//////////////////task 6////////////////////
// function getWeekDay(day) { //Функция, показывающаю день недели
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//     if (days[day.getDay()] != 'СБ' || days[day.getDay()] != 'ВС')
//     //Метод date.getDay() возвращает номер дня недели, начиная с воскресенья
//         return (days[day.getDay()] + ' Надо идти на работу!');
//     else 
//         return (days[day.getDay()] + ' Отдыхай');
// }
// let date = new Date(); //Объек Date содержит дату и время
// alert (getWeekDay(date)); 

//////////////////task 7////////////////////
// let x = prompt('Введите значение х от -20 до 20');
// let y = prompt('Введите значение у от -20 до 20');
// if (x<-20 && x>20 && y<-20 && y>20) 
//     alert ('Введенное значение превышает указанный диапазон!');
//     else
//         if (x<=1 && (y>=3 || y<0))
//             alert (x+y);
//         else alert ('Неверно!');

//////////////////task 8////////////////////
// let x = 10,
//     y = 6;
// x = (x>2 && x<11) || (y>=6 && y<14) ? x+2 : x+5;
// alert (x);

//////////////////task 9////////////////////
// let name = prompt('Введите ваше имя', 'Евгения');
// if (name.length != 0) 
// alert ('Привет, ' + name);
//     else 
//         alert ('Вы не ввели имя');

//////////////////task 10////////////////////
// let greeting = '', 
//     lang = prompt('Введите язык: ru, en или de');
// switch(lang){
//     case 'ru':
//         greeting = 'ru';
//         break;
//     case 'en':
//         greeting = 'en';
//         break;
//     case 'de':
//         greeting = 'de';
// }
// if (greeting == 'ru') alert ('Привет');
// if (greeting == 'en') alert ('Hello');
// if (greeting == 'de') alert ('Hallo');

//////////////////task 11////////////////////
// var date = new Date();
// var month = date.getMonth()+1;
// switch (true){
//     case month == 12 || month == 1 && month == 2:
//         alert ('Зима');
//         break;
//     case month == 3 || month == 4 && month == 5:
//         alert ('Весна');
//         break;
//     case month == 6 || month == 7 && month == 8:
//         alert ('Лето');
//         break;
//     case month == 9 || month == 10 && month == 11:
//         alert ('Осень');
// }

//////////////////task 12////////////////////
// let lang = prompt('Введите язык: ru или en');
// let days = [0,1,2,3,4,5,6];
// let day = new Date();
// if (lang != 'ru' && lang != 'en')
//     alert ('Вы ввели некорректное значение языка');
// else 
//     if (lang == 'ru')
//         switch (days[day.getDay()]){
//             case 0:
//                 alert ('ВС');
//                 break;
//             case 1:
//                 alert ('ПН');
//                 break;
//             case 2:
//                 alert ('ВТ');
//                 break;
//             case 3:
//                 alert ('СР');
//                 break;
//             case 4:
//                 alert ('ЧТ');
//                 break;
//             case 5:
//                 alert ('ПТ');
//                 break;
//             case 6:
//                 alert ('СБ');
//         }
//     if (lang == 'en')
//         switch (days[day.getDay()]){
//             case 0:
//                 alert ('Sunday');
//                 break;
//             case 1:
//                 alert ('Monday');
//                 break;
//             case 2:
//                 alert ('Tuesday');
//                 break;
//             case 3:
//                 alert ('Wednesday');
//                 break;
//             case 4:
//                 alert ('Thursday');
//                 break;
//             case 5:
//                 alert ('Friday');
//                 break;
//             case 6:
//                 alert ('Saturday');
//         }  

//Циклы
//////////////////task 1////////////////////
// let str='';
// for (let i=0; 5>i; i++)
//     str += '.#';
// alert (str);

//////////////////task 2////////////////////
// for (let i=0; i<10; i++) 
//     if (i%2 == 0)
//         console.log (i**2);

//////////////////task 3////////////////////
// let username = 'Евгения';
// let str = '';
// for (let i=1; 4>=i; i++){
//     str += 'Happy birthday to you\n';
//     if (i==3) 
//         str += `Happy birthday dear ${username}\n`;
// }
// console.log(str);

//////////////////task 4////////////////////
// let res;
// do res = confirm ('Отмена или Ок?');
// while (res == false)

//////////////////task 5//////////////////????????//
// let num = prompt ('Введите сколько чисел вы будете суммировать');
// let odd, sum = 0;
// for (let i=0; i<num; i++){
//     odd = i % 2;
//     if (odd) //(odd!==0)
//         sum += i;
// }
// alert ('Сумма нечетных чисел ' + sum);

//////////////////task 6////////////////////
// let num, i;
// for (i=0;;i++){
//         num = Math.random();
//         if (num > 0.9) 
//                 break;
// }
// alert (num + '\n' + i);

//////////////////task 7////////////////////
// for(let i = 1; i < 10; i++){
//     for(let k = 1; k < 10; k++)
//     console.log(k + '*' + i + '=' + k*i);
// }

//////////////////task 8////////////////////
// let fib = [];
// fib[0] = 0;
// fib[1] = 1;
// for (let i=2; i < 10; fib[i] = fib[i - 2] + fib[i - 1], i++) {
// }
// console.log(fib);

//////////////////task 9////////////////////
// let i, aver = 0, sum = 0;
// for (i=0; ; i++){
//     let num = prompt ('Введите число');
//     if(num==null) break;
//     sum += +num;
//     aver = sum/i;
// }
// console.log('Кол-во введенных чисел ' + i + '\n' + 'Сумма чисел ' + sum + '\n' + 'Среднее арифметическое ' + aver);

//////////////////task 10////////////////////
// let password = prompt ('Введите пароль'), repeat_password, cencel;
// lable: 
// do { 
//     repeat_password = prompt ('Введите пароль повторно');
//     if (repeat_password==null){
//         cencel = confirm ('Вы уверены, что хотите отменить авторизацию?');
//         if (cencel == true)
//             break;
//         else 
//             continue lable;
//     }
// }
// while (password !== repeat_password)
// if (password == repeat_password)
//     alert ('Вы успешно авторизованы');

//////////////////task 11////////////////////
// for (let i=1; i<50; i++){
//     if (i % 3 == 0) 
//         console.log ('Fizz');
//     if (i % 5 == 0) 
//         console.log ('Buzz');
//     if (i % 3 == 0 && i % 5 == 0)
//         console.log ('FizzBuzz');
//     console.log (i);
// }