"use strict";

let  priseOnSlide =  document.getElementsByClassName("priseOnSlide");
let  priseOnSlide2 =  document.getElementsByClassName("priseOnSlide2");
let  discountPriceOnSlide =  document.getElementsByClassName("discountPriceOnSlide");
let  discountPriceOnSlide2 =  document.getElementsByClassName("discountPriceOnSlide2");

////////////////// slider1 //////////////////////
let slideIndex = 1;
showSlides(slideIndex);

function pluseSlides(n) {
    showSlides(slideIndex += n);
    additionOfPrices();
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if(n>slides.length)
        slideIndex = 1;
    if(n<1)
        slideIndex = slides.length;
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
        priseOnSlide[i].classList.remove("price-active");
        discountPriceOnSlide[i].classList.remove("discountPrice-active");
    }
    slides[slideIndex-1].style.display = "block";
    priseOnSlide[slideIndex-1].classList.add("price-active");
    discountPriceOnSlide[slideIndex-1].classList.add("discountPrice-active");
}

////////////////// slider2 //////////////////////
let slideIndex2 = 1;
showSlides2(slideIndex2);

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    if(n>slides.length)
        slideIndex2 = 1;
    if(n<1)
        slideIndex2 = slides.length;
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
        priseOnSlide2[i].classList.remove("price-active2");
        discountPriceOnSlide2[i].classList.remove("discountPrice-active2");
    }
    slides[slideIndex2-1].style.display = "block";
    priseOnSlide2[slideIndex2-1].classList.add("price-active2");
    discountPriceOnSlide2[slideIndex2-1].classList.add("discountPrice-active2");
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
    let priceActive = document.getElementsByClassName("price-active");
    let priceActive2 = document.getElementsByClassName("price-active2");
    let discountPriceActive = document.getElementsByClassName("discountPrice-active");
    let discountPriceActive2 = document.getElementsByClassName("discountPrice-active2");
    let addPrice1 = priceActive[0].textContent.replace("£", "");
    let addPrice2 = priceActive2[0].textContent.replace("£", "");
    let addDiscountPrice1 = discountPriceActive[0].textContent;
    let addDiscountPrice2 = discountPriceActive2[0].textContent;
    let sumPrices = 0;
    sumPrices = Number(addPrice1) + Number(addPrice2);
    oldPrice[0].innerHTML = "";
    if(signsAfterComma(sumPrices) == 1) 
        oldPrice[0].append(sign+sumPrices+0);
    else if(signsAfterComma(sumPrices) == 0) 
            oldPrice[0].append(sign+sumPrices+".00");
        else oldPrice[0].append(sign+sumPrices);

    let sumDiscountPrices = 0;
    sumDiscountPrices = Number(addDiscountPrice1) + Number(addDiscountPrice2);
    newPrices[0].innerHTML = "";
    if(signsAfterComma(sumDiscountPrices) == 1) 
        newPrices[0].append(sign+sumDiscountPrices+0);
    else if(signsAfterComma(sumDiscountPrices) == 0) 
            newPrices[0].append(sign+sumDiscountPrices+".00");
        else newPrices[0].append(sign+sumDiscountPrices);
}
