//////////////task 1//////////////
// let a = 5;
// let b = a + 3;
// let c =a + b;
// alert (a + ' ' + b + ' ' + c);

//////////////task 2///////////////
// let firstName, lastName;
// firstName = prompt('Введите ваше имя', 'John');
// lastName = prompt('Введите вашу фамилию', 'Doe');
// alert ('What’s up ' + firstName + ' ' + lastName);

//////////////task 3///////////////
// let x = prompt('Введите значение х');
// let y = prompt('Введите значение у');
// let sum = +x + +y; //преобразование строки в число
// let dif = x - y;
// let prod = x * y;
// let quot = x / y;
// alert ('x + y = '+ sum);
// alert ('x - y = '+ dif);
// alert ('x * y = '+ prod);
// alert ('x / y = '+ quot);

//////////////task 4///////////////
// let days = prompt('Введите количество рабочий часов', 8);
// let hours = prompt('Введите количество рабочих дней в неделе', 5);
// let reit = prompt('Введите рейт за час');
// alert ('З/п = '+days*hours*reit*4);

//////////////tasks 5///////////////
// let num = prompt('Введите число');
// let res = num % 2? alert ('Число нечетное'):alert ('Число четное');

//////////////tasks 6///////////////
// let num = +prompt("Введите число");
// isFinite(num)?alert ('Вы ввели число'): alert ('Это не число');

//////////////task 7///////////////
// let ran_num = Math.random()*100;
// let round_num = Math.round(ran_num);
// let num2 = prompt('Введите число');
// if (round_num < num2)
//     alert ('Рандомное число меньше введенного пользователем');
// if (round_num > num2)
//     alert ('Рандомное число больше введенного пользователем');
// alert ('Сравниваемые значение: ' + round_num + ' ' + num2);

//////////////task 8///////////////
// let str = prompt('Вам нравится изучать Front-end?','Мне нравится изучать Front-end');
// let str2 = prompt('Что вам нравится изучать?', 'Мне нравится изучать ');
// alert( str.includes(str2) );
// let podstr = str.slice(0, 20);
// let result = `${podstr} английский язык`;
// alert (result);