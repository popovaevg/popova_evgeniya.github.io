"use strict";

var title = document.getElementsByClassName("item-feature__title");
var price = document.getElementsByClassName("item-feature__price");
var bigImg1 = document.getElementsByClassName("gallery__big-img1");
var bigImg2 = document.getElementsByClassName("gallery__big-img2");
var bigImg3 = document.getElementsByClassName("gallery__big-img3");
var smallImg1 = document.getElementsByClassName("gallery__small-img1");
var smallImg2 = document.getElementsByClassName("gallery__small-img2");
var smallImg3 = document.getElementsByClassName("gallery__small-img3");
var initialSum = sumBag.textContent;
var initialNumberOfGoods = numberOfGoods.textContent;
var itemFeatureSize = document.getElementsByClassName("item-feature__size")[0];
var itemFeatureColor = document.getElementsByClassName("item-feature__color")[0];

function drawItem() {
    catalog.forEach(function (value) {
        if (value.id == "80d32566-d81c-4ba0-9edf-0eceda3b4360") {
            //Dark classic fit suit
            title[0].append(value.title);
            if (signsAfterComma(value.price) == 1) price[0].append(sign + value.price + 0);else price[0].append(sign + value.price);
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
            for (var i = 0; i < value.colors.length; i++) {
                var input = document.createElement("input");
                input.classList.add("item-feature__color__elem");
                input.id = "radioColor-" + i;
                input.setAttribute("type", "radio");
                input.setAttribute("name", "color");
                var lable = document.createElement("lable");
                lable.setAttribute("for", "radioColor-" + i);
                lable.classList.add("item-feature__color__label");
                lable.append(value.colors[i]);
                itemFeatureColor.append(input);
                input.after(lable);
            }
            for (var _i = 0; _i < value.sizes.length; _i++) {
                var _input = document.createElement("input");
                _input.classList.add("item-feature__size__elem");
                _input.id = "radioSize-" + _i;
                _input.setAttribute("type", "radio");
                _input.setAttribute("name", "size");
                var _lable = document.createElement("lable");
                _lable.setAttribute("for", "radioSize-" + _i);
                _lable.classList.add("item-feature__label");
                _lable.classList.add("item-feature__size__label");
                _lable.append(value.sizes[_i]);
                itemFeatureSize.append(_input);
                _input.after(_lable);
            }
        }
    });
    document.getElementById("radioColor-0").setAttribute("checked", "checked");
    document.getElementById("radioSize-1").setAttribute("checked", "checked");
}
drawItem();

var sizeLbl = document.getElementsByClassName("item-feature__size__label");

var _loop = function _loop(j) {
    sizeLbl[j].addEventListener("click", function () {
        var sizeInput = document.getElementsByClassName("item-feature__size__elem");
        for (var i = 0; i < sizeInput.length; i++) {
            sizeInput[i].removeAttribute("checked", "checked");
        }
        sizeInput[j].setAttribute("checked", "checked");
    });
};

for (var j = 0; j < sizeLbl.length; j++) {
    _loop(j);
}
var colorLbl = document.getElementsByClassName("item-feature__color__label");

var _loop2 = function _loop2(j) {
    colorLbl[j].addEventListener("click", function () {
        var colorInput = document.getElementsByClassName("item-feature__color__elem");
        for (var i = 0; i < colorInput.length; i++) {
            colorInput[i].removeAttribute("checked", "checked");
        }
        colorInput[j].setAttribute("checked", "checked");
    });
};

for (var j = 0; j < colorLbl.length; j++) {
    _loop2(j);
}

function addToBag() {
    sumBag.innerHTML = "";
    if (signsAfterComma(initialSum) == 1) sumBag.append(initialSum + 0);else sumBag.append(initialSum);
    numberOfGoods.innerHTML = "";
    numberOfGoods.append(initialNumberOfGoods);
}