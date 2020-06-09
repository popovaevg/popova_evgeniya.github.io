"use strict";

let info = [
    {
        name: "Маргарита",
        composition: ["соус томатный", "сыр Моцарелла", "спелые томаты"],
        kkal: 302,
        price: "145",
        image: "./img/1margarita.jpg"
    },
    {
        name: "Пицца Четыре сезона",
        composition: ["соус томатный", "сыр Моцарелла", "спелые томаты", "грибы шампиньоны", "аппетитная салями", "сыр Дор Блю"],
        kkal: 325,
        price: "139",
        image: "./img/pitstsa-chetyre-sezona.jpg"
    },
    {
        name: "Вегетарианская",
        composition: ["соус томатный", "сыр Моцарелла", "грибы шампиньоны", "спелые томаты", "сладкий перец", "сладкая кукуруза", "маринованный синий лук", "маслины", "свежая зелень"],
        kkal: 300,
        price: "178",
        image: "./img/1vegetarianskaya.jpg"
    },
    {
        name: "Мюнхенская",
        composition: ["горчичный соус", "сыр Моцарелла", "аппетитная салями", "маринованный лук", "охотничьи колбаски", "копченое куриное филе", "свежая зелень", "пикантное чесночное масло"],
        kkal: 305,
        price: "155",
        image: "./img/myunhenskaya.jpg"
    },
    {
        name: "Тревизо",
        composition: ["горчичный соус", "сыр Моцарелла", "аппетитная салями", "свинина", "спелые томаты", "маринованные огурцы", "горячий острый перец", "свежая зелень", "пикантное чесночное масло"],
        kkal: 367,
        price: "159",
        image: "./img/trevizo.jpg"
    },
    {
        name: "Пепперони",
        composition: ["соус томатный", "сыр Моцарелла", "колбаска Пепперони"],
        kkal: 345,
        price: "165",
        image: "./img/pepperoni.jpg"
    },
    {
        name: "Семейная",
        composition: ["соус томатный", "сыр Моцарелла", "сочная ветчина", "сладкая кукуруза", "грибы шампиньоны", "копченое куриное филе", "свежая зелень"],
        kkal: 353,
        price: "159",
        image: "./img/semeynaya.jpg"
    },
    {
        name: "Ассорти",
        composition: ["соус томатный", "сыр Моцарелла", "аппетитная салями со свининой", "сладкий перец", "маслины", "свежая зелень"],
        kkal: 389,
        price: "285",
        image: "./img/1assorti.jpg"
    },
    {
        name: "Пикантэ",
        composition: ["горчичный соус", "сыр Моцарелла", "хрустящий бекон", "копченое куриное филе", "сыр Дор Блю"],
        kkal: 368,
        price: "259",
        image: "./img/pikante.jpg"
    },
    {
        name: "Пицца Американо",
        composition: ["горчичный соус", "сыр Моцарелла", "грибы шампиньоны", "спелые томаты", "охотничьи колбаски", "картофель фри", "свежая петрушка"],
        kkal: 345,
        price: "255",
        image: "./img/pitstsa-amerikano.jpg"
    },
    {
        name: "Восточная красавица",
        composition: ["соус томатный", "сыр Моцарелла", "аппетитная салями", "горячая телятина", "спелые томаты", "маринованные огурцы", "острый перец"],
        kkal: 383,
        price: "257",
        image: "./img/1vostochnaya-krasavitsa.jpg"
    },
    {
        name: "Гавайская",
        composition: ["сливочный соус", "сыр Моцарелла", "сладкая кукуруза", "копченое куриное филе", "тропический ананас"],
        kkal: 373,
        price: "279",
        image: "./img/gavayskaya.jpg"
    },
    {
        name: "Кватро ди Карне",
        composition: ["соус томатный", "сыр Моцарелла", "хрустящий бекон", "аппетитная салями", "сочная ветчина", "охотничьи колбаски", "свежая зелень", "пикантное чесночное масло"],
        kkal: 387,
        price: "270",
        image: "./img/1kvatro-di-karne.jpg"
    },
    {
        name: "Футбольная",
        composition: ["горчичный соус", "сыр Моцарелла", "хрустящий бекон", "охотничьи колбаски", "грибы шампиньоны", "спелые томаты", "маринованный синий лук", "свежая зелень", "пикантное чесночное масло"],
        kkal: 389,
        price: "266",
        image: "./img/futbolnaya.jpg"
    },
    {
        name: "Баварская",
        composition: ["горчичный соус", "cоус томатный", "сыр Моцарелла", "колбаски охотничьи", "колбаски домашние", "маринованные огурцы", "петрушка"],
        kkal: 394,
        price: "263",
        image: "./img/bavarskaya.jpg"
    }
];

let header = document.getElementsByTagName("header")[0];
let main = document.getElementsByClassName("main")[0];
let section = document.getElementsByTagName("section")[0];
let btnNet = document.createElement("input");
let btnList = document.createElement("input");
let btnSearch = document.createElement("input");
let btnSortByPrice = document.createElement("input");
let btnSortByName = document.createElement("input");
let footer = document.getElementsByTagName("footer")[0];
let checklist = [];
let uniqueIngredients = [];

function createBtnNet () {
    btnNet.setAttribute("value","Сетка");
    btnNet.setAttribute("type","button");
    header.appendChild(btnNet);
}
function createBtnList () {
    btnList.setAttribute("value","Список");
    btnList.setAttribute("type","button");
    header.appendChild(btnList);
}
function view () {
    header.innerText = "Как отображать страницу?";
    createBtnNet();
    createBtnList();
}

function drawList (arr) {
    arr.forEach((value) => {
        let p = document.createElement("p");
        let a = document.createElement("a");
        a.setAttribute("href", value.href);
        p.setAttribute("class","pList");
        a.appendChild(p);
        main.appendChild(a);
        p.append(value.name);
        p.innerText += ", "
        p.append(value.price);
        p.innerText += " грн.";
        p.prepend(document.createElement("span"));
    }); 
}

function listView () {
    main.innerHTML = "";
    section.innerHTML = "";
    section.style.padding = "10px";
    createSortInListView ();
    main.style.gridTemplateColumns = "1fr";
    main.style.fontWeight = "600";
    drawList(info);
    footer.style.display = "block";
}

function drawNet (arr) {
    let divs =  document.getElementsByTagName("div");
    let img;
    arr.forEach((value, index) => {
        let a = document.createElement("a");
        a.setAttribute("href", value.href);
        img = document.createElement("img");
        img.setAttribute("src", value.image);
        a.appendChild(img);
        divs[index].appendChild(a);
        let p = document.createElement("p");
        p.setAttribute("class","pView");
        document.getElementsByTagName("img")[index].after(p);
        let h3 = document.createElement("h3");
        p.appendChild(h3);
        h3.append(value.name);
        p.innerHTML += "Состав: ";
        p.append(value.composition);
        p.innerHTML += "<br>Калории: ";
        p.append(value.kkal);
        p.innerHTML += "<br>Цена: ";
        p.append(value.price);
        p.innerText += " грн.";
    }); 
}

function netView () {
    main.innerHTML = "";
    section.innerHTML = "";
    section.style.padding = "10px";
    createFilterInNetView();
    main.style.gridTemplateColumns = "1fr 1fr 1fr";
    main.style.fontWeight = "400";
    for (let i=0; i<15; i++)
        main.appendChild(document.createElement("div"));
    drawNet(info);
    footer.style.display = "block";
}

function unique(arr) {
    let result = [];
    for (let elem of arr)
      if (!result.includes(elem))
        result.push(elem);
    return result;
}

function createFilterInNetView () {
    let checkboxs = [],
        labels = [];
    let form = document.createElement("form");
    let input, label;
    let ingredients = [];        
    info.forEach((value) => {
        ingredients = ingredients.concat(value.composition);
    });
    uniqueIngredients = unique(ingredients);
    form.innerHTML += "<p>Выберете интересующие вас ингредиенты:</p>";
    for (let i=0; i<uniqueIngredients.length; i++){
        input = document.createElement("input");
        checkboxs.push(input);
        label = document.createElement("label");
        labels.push(label);
        input.setAttribute("type","checkbox");
        input.setAttribute("value",i);
        form.appendChild(checkboxs[i]); 
        form.appendChild(labels[i]); 
    }
    section.appendChild(form);
    
    for (let i=0; i<labels.length; i++){ 
        labels[i].innerText = uniqueIngredients[i];
        labels[i].innerHTML += "<br>";
    }
    btnSearch.setAttribute("value","Поиск");
    btnSearch.setAttribute("type","button");
    section.appendChild(btnSearch);
}

view();
btnNet.addEventListener("click", netView);
btnList.addEventListener("click", listView);

document.addEventListener('change', function (evt) {
    let el = evt.target;
    let val = el.value|0;
    if (el.checked)
        checklist.push(val); 
    else {
        let idx = checklist.indexOf(val); //find element in array
        if( idx > -1 ){
            checklist.splice(idx, 1); //change content of array
        }
    }
    console.log(el);
    console.log(val);
    console.log(checklist);
}, false);

function workFilterByIngredients () {
    main.innerHTML = "";
    let outArr = [], 
        resulrArr = [];
    if (checklist.length == 0) 
        main.innerHTML = "";
    for(let i=0; i<uniqueIngredients.length; i++){
        for(let j=0; j<checklist.length; j++) {
            if(checklist[j] == i)
                outArr.push(uniqueIngredients[i]);
        }
    }
    info.forEach((value) => {
        for(let j=0; j<outArr.length; j++) {
            for (let i=0; i<value.composition.length; i++){
                if (outArr[j] == value.composition[i]){
                    resulrArr.push(value);
                    main.appendChild(document.createElement("div"));
                }
            }
        }
    });
    drawNet(resulrArr);
}

btnSearch.addEventListener("click", workFilterByIngredients);

function createSortInListView () {
    btnSortByPrice.setAttribute("value","Сортировка по цене");
    btnSortByPrice.setAttribute("type","button");
    section.appendChild(btnSortByPrice);
    btnSortByName.setAttribute("value","Сортировка по названию");
    btnSortByName.setAttribute("type","button");
    section.appendChild(btnSortByName);
}

function workSortByPrice () {
    main.innerHTML = "";
    let sortArr = info.sort((a, b) => a.price > b.price ? 1 : -1);
    drawList(sortArr);
}

btnSortByPrice.addEventListener("click", workSortByPrice);

function workSortByName () {
    main.innerHTML = "";
    let sortArr = info.sort((a, b) => a.name > b.name ? 1 : -1);
    drawList(sortArr);
}

btnSortByName.addEventListener("click", workSortByName);