"use strict";

let header = document.getElementsByTagName("header")[0];
let main = document.getElementsByClassName("main")[0];
let section = document.getElementsByTagName("section")[0];
let btnNet = document.createElement("span");
let btnList = document.createElement("span");
let btnSearch = document.createElement("input");
let btnSortByPrice = document.createElement("input");
let btnSortByName = document.createElement("input");
let footer = document.getElementsByTagName("footer")[0];
let checklist = [];
let uniqueIngredients = [];
let calcKkal = document.createElement("input");
let addIng = document.createElement("input");
let checking = [];
let arrLbl = ["маслины", "маринованные огурцы", "картофель фри", "острый перец", "тропический ананас"];
let basket = document.createElement("a");

function view () {
    btnNet.setAttribute("class", "btnNet");
    header.appendChild(btnNet);
    btnList.setAttribute("class", "btnList");
    header.appendChild(btnList);
    basket.setAttribute("class", "basket");
    basket.setAttribute("href", "basket.html")
    header.appendChild(basket);
}

function drawList (obj) {
    obj.forEach((value) => {
        let p = document.createElement("p");
        p.setAttribute("class","pList");
        main.appendChild(p);
        p.append(value.name);
        p.innerText += ", "
        p.append(value.price);
        p.innerText += " грн.";
        let span = document.createElement("span");
        span.classList.add("icon");
        p.prepend(span);
    }); 
}

function listView () {
    main.innerHTML = "";
    section.innerHTML = "";
    document.body.style.background = "rgba(24, 20, 20, 0.801) url(./img/Pizza_Bell_pepper_Flour_Word_Lettering_572704_1440x900.jpg)";
    main.style.color = "white";
    section.style.padding = "10px";
    createSortInListView ();
    main.style.gridTemplateColumns = "1fr";
    drawList(info);
    footer.style.display = "block";
}

function drawNet (obj) {
    let divs =  document.getElementsByTagName("div");
    let img;
    let idSpan = 0;
    obj.forEach((value, index) => {
        img = document.createElement("img");
        img.setAttribute("src", value.image);
        divs[index].appendChild(img);
        let p = document.createElement("p");
        p.classList.add("pView");
        document.getElementsByTagName("img")[index].after(p);
        let h3 = document.createElement("h3");
        p.appendChild(h3);
        h3.append(value.name);
        p.innerHTML += "Состав:<br>";
        let span;
        for (let key in value.composition){
            span = document.createElement("span");
            span.classList.add("soleIng");
            span.id = idSpan;
            p.append(span);
            span.append(key);
            p.innerHTML += "; "
            idSpan++;
        }
        p.innerHTML += "<br>";
        calcKkal.setAttribute("value","Пересчитать калории и цену");
        calcKkal.setAttribute("type","button");
        calcKkal.classList.add("calcKkal");
        p.append(calcKkal);
        addIng.setAttribute("value","Добавить ингредиенты");
        addIng.setAttribute("type","button");
        addIng.classList.add("addIng");
        p.append(addIng);
        p.innerHTML += "";
    });
    drawKkalAndPrice(obj);
}

function drawKkalAndPrice (obj) {
    let p = document.getElementsByClassName("pView");
    obj.forEach((value, index) => {
        let p1 = document.createElement("p");
        p1.classList.add("pKkalPrice");
        p[index].after(p1);
        p1.innerHTML += "Калории: ";
        let s = 0;
        for (let elem of Object.keys(value.composition))
            s += value.composition[elem];
        p1.append(s);
        p1.innerHTML += "<br>Цена: ";
        p1.append(value.price);
        p1.innerHTML += " грн.";
        let btnBuy = document.createElement("input");
        btnBuy.setAttribute("type","button");
        btnBuy.setAttribute("value","Купить");
        btnBuy.classList.add("btnBuy");
        p1.innerHTML += "<br>";
        p1.append(btnBuy);
    });
}

function netView () {
    main.innerHTML = "";
    section.innerHTML = "";
    document.body.style.background = "rgba(24, 20, 20, 0.801) url(./img/Pizza_Bell_pepper_Flour_Word_Lettering_572704_1440x900.jpg)";
    main.style.color = "black";
    section.style.padding = "10px";
    createFilterInNetView();
    main.style.gridTemplateColumns = "1fr 1fr 1fr";
    for (let i=0; i<15; i++)
        main.appendChild(document.createElement("div"));
    drawNet(info);
    footer.style.display = "block";
    
    let arrDelIng = [];
    let pView = document.querySelectorAll(".pView");
    for (let i=0; i<pView.length; i++) {
        pView[i].addEventListener("click", function(e) {
            if(e.target && e.target.nodeName == "SPAN") {
                document.querySelectorAll(".soleIng")[e.target.id].style.textDecoration = "line-through";
                let calcKkal = document.getElementsByClassName("calcKkal")[i];
                calcKkal.style.display = "block";
                arrDelIng.push(e.target.id);
            }
        });
    }
    let getcalcKkal = document.getElementsByClassName("calcKkal");
    for (let j=0; j<getcalcKkal.length; j++) {
        getcalcKkal[j].addEventListener("click", function () {
            let ind = 0;
            info.forEach((value) => {
                for (let key in value.composition){
                    for (let i=0; i<arrDelIng.length; i++){
                        if(ind == arrDelIng[i]){
                            value.price = Number(value.price) + Number(value.composition[key]);
                            value.composition[key] = 0;
                        }
                    }
                    ind++;
                }
            });
            let pKkalPrice = document.getElementsByClassName("pKkalPrice");
            for(let i=0; i<pKkalPrice.length; i++)
                pKkalPrice[i].innerHTML = "";
            drawKkalAndPrice(info);
        });
    }
    let addIng = document.getElementsByClassName("addIng");
    for (let i=0; i<addIng.length; i++) {
        addIng[i].addEventListener("click", function () {
            addIng[i].style.display = "none";
            let p2 = document.createElement("p");
            p2.classList.add("pAddIng");
            let input1 = document.createElement("input");
            input1.setAttribute("type","checkbox");
            input1.setAttribute("value","1");
            let label1 = document.createElement("label");
            label1.append(arrLbl[0]);
            label1.innerHTML += "<br>";
            let input2 = document.createElement("input");
            input2.setAttribute("type","checkbox");
            input2.setAttribute("value","2");
            let label2 = document.createElement("label");
            label2.append(arrLbl[1]);
            label2.innerHTML += "<br>";
            let input3 = document.createElement("input");
            input3.setAttribute("type","checkbox");
            input3.setAttribute("value","3");
            let label3 = document.createElement("label");
            label3.append(arrLbl[2]);
            label3.innerHTML += "<br>";
            let input4 = document.createElement("input");
            input4.setAttribute("type","checkbox");
            input4.setAttribute("value","4");
            let label4 = document.createElement("label");
            label4.append(arrLbl[3]);
            label4.innerHTML += "<br>";
            let input5 = document.createElement("input");
            input5.setAttribute("type","checkbox");
            input5.setAttribute("value","5");
            let label5 = document.createElement("label");
            label5.append(arrLbl[4]);
            p2.append(input1);
            p2.append(label1);
            p2.append(input2);
            p2.append(label2);
            p2.append(input3);
            p2.append(label3);
            p2.append(input4);
            p2.append(label4);
            let ok = document.createElement("input");
            ok.setAttribute("type","button");
            ok.setAttribute("value","Ок");
            ok.classList.add("ok");
            p2.append(ok);
            pView[i].append(p2);
            ok.addEventListener("click", function () {
                p2.innerHTML = "";
                let h4 = document.createElement("h4");
                p2.append(h4);
                h4.innerText = "Акция: добавки бесплатно! Осталось 3 дня до конца акции";
            });
        });
    }
    let btnBuy = document.getElementsByClassName("btnBuy");
    let cont = 0;
    for (let i=0; i<btnBuy.length; i++) {
        console.log(btnBuy);
        btnBuy[i].addEventListener("click", function () {
            let bskt = document.getElementsByClassName("basket")[0];
            bskt.innerHTML = "";
            bskt.append(++cont);
        });
    }   
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
        for (let key in value.composition)
            ingredients = ingredients.concat(key);
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

section.addEventListener("change", function (evt) {
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
});

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
            let i = 0;
            for (let key in value.composition){
                if (outArr[j] == key){
                    resulrArr.push(value);
                    main.appendChild(document.createElement("div"));
                }
                i++;
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

main.addEventListener("click", function(e) {
    if(e.target && e.target.nodeName == "DIV") {
        e.target.classList.add("imgClicked");
    }
});

main.addEventListener("change", function (evt) {
    let el = evt.target;
    let val = el.value|0;
    if (el.checked)
        checking.push(val); 
    else {
        let idx = checking.indexOf(val); 
        if( idx > -1 ){
            checking.splice(idx, 1); 
        }
    }
});


