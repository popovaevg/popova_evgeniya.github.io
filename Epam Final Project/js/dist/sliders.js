"use strict";

var priseOnSlide = document.getElementsByClassName("priseOnSlide");
var priseOnSlide2 = document.getElementsByClassName("priseOnSlide2");
var discountPriceOnSlide = document.getElementsByClassName("discountPriceOnSlide");
var discountPriceOnSlide2 = document.getElementsByClassName("discountPriceOnSlide2");

////////////////// slider1 //////////////////////
var slideIndex = 1;
showSlides(slideIndex);

function pluseSlides(n) {
    showSlides(slideIndex += n);
    additionOfPrices();
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i = void 0;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        priseOnSlide[i].classList.remove("price-active");
        discountPriceOnSlide[i].classList.remove("discountPrice-active");
    }
    slides[slideIndex - 1].style.display = "block";
    priseOnSlide[slideIndex - 1].classList.add("price-active");
    discountPriceOnSlide[slideIndex - 1].classList.add("discountPrice-active");
}

////////////////// slider2 //////////////////////
var slideIndex2 = 1;
showSlides2(slideIndex2);

function showSlides2(n) {
    var i = void 0;
    var slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) slideIndex2 = 1;
    if (n < 1) slideIndex2 = slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        priseOnSlide2[i].classList.remove("price-active2");
        discountPriceOnSlide2[i].classList.remove("discountPrice-active2");
    }
    slides[slideIndex2 - 1].style.display = "block";
    priseOnSlide2[slideIndex2 - 1].classList.add("price-active2");
    discountPriceOnSlide2[slideIndex2 - 1].classList.add("discountPrice-active2");
}
function pluseSlides2(n) {
    showSlides2(slideIndex2 += n);
    additionOfPrices();
}
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}
//////////////////////////////////////////////////

function additionOfPrices() {
    var priceActive = document.getElementsByClassName("price-active");
    var priceActive2 = document.getElementsByClassName("price-active2");
    var discountPriceActive = document.getElementsByClassName("discountPrice-active");
    var discountPriceActive2 = document.getElementsByClassName("discountPrice-active2");
    var addPrice1 = priceActive[0].textContent.replace("£", "");
    var addPrice2 = priceActive2[0].textContent.replace("£", "");
    var addDiscountPrice1 = discountPriceActive[0].textContent;
    var addDiscountPrice2 = discountPriceActive2[0].textContent;
    var sumPrices = 0;
    sumPrices = Number(addPrice1) + Number(addPrice2);
    oldPrice[0].innerHTML = "";
    if (signsAfterComma(sumPrices) == 1) oldPrice[0].append(sign + sumPrices + 0);else if (signsAfterComma(sumPrices) == 0) oldPrice[0].append(sign + sumPrices + ".00");else oldPrice[0].append(sign + sumPrices);

    var sumDiscountPrices = 0;
    sumDiscountPrices = Number(addDiscountPrice1) + Number(addDiscountPrice2);
    newPrices[0].innerHTML = "";
    if (signsAfterComma(sumDiscountPrices) == 1) newPrices[0].append(sign + sumDiscountPrices + 0);else if (signsAfterComma(sumDiscountPrices) == 0) newPrices[0].append(sign + sumDiscountPrices + ".00");else newPrices[0].append(sign + sumDiscountPrices);
}