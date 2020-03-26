"use strict";

let title = document.getElementsByClassName("item-feature__title");
let price = document.getElementsByClassName("item-feature__price");
let bigImg1 = document.getElementsByClassName("gallery__big-img1");
let bigImg2 = document.getElementsByClassName("gallery__big-img2");
let bigImg3 = document.getElementsByClassName("gallery__big-img3");
let smallImg1 = document.getElementsByClassName("gallery__small-img1");
let smallImg2 = document.getElementsByClassName("gallery__small-img2");
let smallImg3 = document.getElementsByClassName("gallery__small-img3");
let initialSum = sumBag.textContent;
let initialNumberOfGoods = numberOfGoods.textContent;
let itemFeatureSize = document.getElementsByClassName("item-feature__size")[0];
let itemFeatureColor = document.getElementsByClassName("item-feature__color")[0];

function drawItem(){
    catalog.forEach((value) => {
       if(value.id == "80d32566-d81c-4ba0-9edf-0eceda3b4360"){
            //Dark classic fit suit
            title[0].append(value.title);
            if(signsAfterComma(value.price) == 1)
                price[0].append(sign+value.price+0);
            else price[0].append(sign+value.price);
            bigImg1[0].style.background = "url(" + value.preview + value.thumbnail[0] + ")";
            bigImg2[0].style.background = "url(" + value.preview + value.thumbnail[2] + ")";
            bigImg3[0].style.background = "url(" + value.preview + value.thumbnail[3] + ")";
            bigImg1[0].style.backgroundSize = "cover";
            bigImg2[0].style.backgroundSize = "cover";
            bigImg3[0].style.backgroundSize = "cover";
            smallImg1[0].style.background = "url(" + value.preview + value.thumbnail[1] + ")";
            smallImg2[0].style.background = "url(" + value.preview + value.thumbnail[2] + ")";
            smallImg3[0].style.background = "url(" + value.preview + value.thumbnail[3] + ")";
            smallImg1[0].style.backgroundSize = "cover";
            smallImg2[0].style.backgroundSize = "cover";
            smallImg3[0].style.backgroundSize = "cover";
            initialSum = Number(initialSum) + value.discountedPrice;
            initialNumberOfGoods++;
            for(let i=0; i<value.colors.length; i++){
                let input = document.createElement("input");
                input.classList.add("item-feature__color__elem");
                input.id = "radioColor-"+i;
                input.setAttribute("type", "radio");
                input.setAttribute("name", "color");
                let lable = document.createElement("lable");
                lable.setAttribute("for", "radioColor-"+i);
                lable.classList.add("item-feature__color__label");
                lable.append(value.colors[i]);
                itemFeatureColor.append(input);
                input.after(lable);
            }
            for(let i=0; i<value.sizes.length; i++){
                let input = document.createElement("input");
                input.classList.add("item-feature__size__elem");
                input.id = "radioSize-"+i;
                input.setAttribute("type", "radio");
                input.setAttribute("name", "size");
                let lable = document.createElement("lable");
                lable.setAttribute("for", "radioSize-"+i);
                lable.classList.add("item-feature__label");
                lable.classList.add("item-feature__size__label");
                lable.append(value.sizes[i]);
                itemFeatureSize.append(input);
                input.after(lable);
            }
        }   
    });
    document.getElementById("radioColor-0").setAttribute("checked","checked");
    document.getElementById("radioSize-1").setAttribute("checked","checked");
}
drawItem();

let sizeLbl = document.getElementsByClassName("item-feature__size__label");
for(let j=0; j<sizeLbl.length; j++){
    sizeLbl[j].addEventListener("click", function(){
        let sizeInput = document.getElementsByClassName("item-feature__size__elem");
        for(let i=0; i<sizeInput.length; i++){
            sizeInput[i].removeAttribute("checked","checked");
        }
        sizeInput[j].setAttribute("checked","checked");
    });
}
let colorLbl = document.getElementsByClassName("item-feature__color__label");
for(let j=0; j<colorLbl.length; j++){
    colorLbl[j].addEventListener("click", function(){
        let colorInput = document.getElementsByClassName("item-feature__color__elem");
        for(let i=0; i<colorInput.length; i++){
            colorInput[i].removeAttribute("checked","checked");
        }
        colorInput[j].setAttribute("checked","checked");
    });
}


function addToBag(){
    sumBag.innerHTML = "";
    if(signsAfterComma(initialSum) == 1)
        sumBag.append(initialSum+0);
    else sumBag.append(initialSum);
    numberOfGoods.innerHTML = "";
    numberOfGoods.append(initialNumberOfGoods);
}

