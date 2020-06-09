"use strict";

let name = document.createElement("input");
let lbl = document.createElement("label");
let main = document.getElementsByTagName("main")[0];
let header = document.getElementsByTagName("header")[0];
let checklist = [];
let uniqueIngredients = [];
let select = document.createElement("input");

header.innerText = "КОРЗИНА";
main.innerHTML = "<h3>Ваш заказ в обработке! Попробуйте создать свою пиццу.</h3>"
lbl.innerText = "Введите название вашей пиццы:"
name.setAttribute("type","text");
name.setAttribute("pattern","/^[А-Яа-яЁё\s]+$/");
main.append(lbl);
main.append(name);

function unique(arr) {
    let result = [];
    for (let elem of arr)
      if (!result.includes(elem))
        result.push(elem);
    return result;
}

function createComponents() {
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
    form.innerHTML += "<p>Выберете ингредиенты:</p>";
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
    main.appendChild(form);
    for (let i=0; i<labels.length; i++){ 
        labels[i].innerText = uniqueIngredients[i];
        labels[i].innerHTML += "<br>";
    }
    select.setAttribute("value","Создать пиццу");
    select.setAttribute("type","button");
    form.appendChild(select);
}
createComponents();

main.addEventListener("change", function (evt) {
    let el = evt.target;
    let val = el.value|0;
    if (el.checked)
        checklist.push(val); 
    else {
        let idx = checklist.indexOf(val);
        if( idx > -1 ){
            checklist.splice(idx, 1);
        }
    }
});

select.addEventListener("click", function() {
    main.innerHTML = "Прекрасный выбор!";
    setTimeout(function(){
         location.href = "index.html";
    }, 2000);
});