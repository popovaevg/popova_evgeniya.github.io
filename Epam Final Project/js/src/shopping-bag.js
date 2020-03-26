"use strict";

let area = document.getElementsByClassName("wrapper-purchases")[0];
let spanTotalPrice = document.getElementsByClassName("total-price");
let spanAppliedDiscount = document.getElementsByClassName("applied-discount");
let totalPrice = 0;
let appliedDiscount = 0;
let numItems = 0;
let arrPrices = [];
let discount = 0;
let arrDiscountPrice = [];

drawBag();

function emptyBag() {
    area.innerHTML = "";
    document.getElementsByClassName("text-after-del-purchases")[0].style.display = "block";
    document.documentElement.scrollTop = 0;
}
function checkout() {
    area.innerHTML = "Thank you for your purchase";
    document.documentElement.scrollTop = 0;
}

let arrQuantities = document.getElementsByClassName("quantity");
for (let i=0; i<arrQuantities.length; i++){
    arrQuantities[i].setAttribute("data-count", arrQuantities[i].textContent);
}

area.addEventListener("click", function (e) {
    if(e.target && e.target.className == "quantity-plus") {
        let idClickedPlus = e.target.id.replace("plus-", "");
        arrQuantities[idClickedPlus-1].innerHTML = "";
        let dataCount = arrQuantities[idClickedPlus-1].getAttribute("data-count")
        dataCount++;
        arrQuantities[idClickedPlus-1].append(dataCount);
        arrQuantities[idClickedPlus-1].removeAttribute("data-count");
        arrQuantities[idClickedPlus-1].setAttribute("data-count", dataCount);
        numItems++;
        numberOfGoods.innerHTML = "";
        numberOfGoods.append(numItems);
        sumBag.innerHTML = "";
        totalPrice = Number(totalPrice) + Number(arrPrices[idClickedPlus-1]);
        if(signsAfterComma(appliedDiscount) == 1)
            sumBag.append(sign+appliedDiscount+0);
        else sumBag.append(sign+appliedDiscount);
        discount = totalPrice - appliedDiscount;
        spanAppliedDiscount[0].innerHTML = "";
        spanAppliedDiscount[0].append(sign+discount);
        spanTotalPrice[0].innerHTML = "";
        if(signsAfterComma(totalPrice) == 1)
            spanTotalPrice[0].append(sign+totalPrice+0);
        else spanTotalPrice[0].append(sign+totalPrice);
    }
}, false);

area.addEventListener("click", function (e) {
    if(e.target && e.target.className == "quantity-minus") {
        let idClickedMinus = e.target.id.replace("minus-", "");
        let dataCount = arrQuantities[idClickedMinus-1].getAttribute("data-count");
        if(dataCount > 1){
            dataCount--;
            arrQuantities[idClickedMinus-1].innerHTML = "";
            arrQuantities[idClickedMinus-1].append(dataCount);
            arrQuantities[idClickedMinus-1].removeAttribute("data-count");
            arrQuantities[idClickedMinus-1].setAttribute("data-count", dataCount);
            numItems--;
            numberOfGoods.innerHTML = "";
            numberOfGoods.append(numItems);
            sumBag.innerHTML = "";
            totalPrice = Number(totalPrice) - Number(arrPrices[idClickedMinus-1]);
            sumBag.append(sign+appliedDiscount);
            discount = Number(totalPrice) - Number(appliedDiscount);
            spanAppliedDiscount[0].innerHTML = "";
            spanAppliedDiscount[0].append(sign+discount);
            spanTotalPrice[0].innerHTML = "";
            if(signsAfterComma(totalPrice) == 1)
                spanTotalPrice[0].append(sign+totalPrice+0);
            else spanTotalPrice[0].append(sign+totalPrice);
        }
    }
}, false);

function remove(n) {
    document.getElementsByClassName("blk")[n-1].innerHTML = "";
    numItems--;
    numberOfGoods.innerHTML = "";
    numberOfGoods.append(numItems);
    sumBag.innerHTML = "";
    totalPrice -= arrPrices[n-1];
    appliedDiscount -= arrDiscountPrice[n-1];
    if(signsAfterComma(appliedDiscount) == 1)
        sumBag.append(sign+appliedDiscount+0);
    else sumBag.append(sign+appliedDiscount);
    discount = totalPrice - appliedDiscount;
    spanAppliedDiscount[0].innerHTML = "";
    spanAppliedDiscount[0].append(sign+discount);
    spanTotalPrice[0].innerHTML = "";
    if(signsAfterComma(totalPrice) == 1)
        spanTotalPrice[0].append(sign+totalPrice+0);
    else spanTotalPrice[0].append(sign+totalPrice);
    if(numItems == 0)
        document.getElementsByClassName("text-after-del-purchases")[0].style.display = "block";
}

function drawBag(){
    catalog.forEach((value) => {
        switch(value.id) {
            case "8c061815-6a7d-4465-bb78-1bdc6c5adebf":
                //Only Skinny Jeans
                titles[0].append(value.title);
                if(signsAfterComma(value.price) == 1)
                    prices[0].append(sign+value.price+0);
                else prices[0].append(sign+value.price);
                itemDiscPrices[0].append(value.discountedPrice);
                imgs[0].setAttribute("src",value.preview + value.thumbnail);
                colors[0].append(value.colors[0]);
                sizes[0].append(value.sizes[0]);
                totalPrice += value.price;
                appliedDiscount += value.discountedPrice;
                numItems += 1;
                break;
            case "ff665110-5e7f-435d-b1b4-651c3d5050ca":
                //Paul & Joe Sister Jumper with Neon Trims
                titles[1].append(value.title);
                if(signsAfterComma(value.price) == 1)
                    prices[1].append(sign+value.price+0);
                else prices[1].append(sign+value.price);
                itemDiscPrices[1].append(value.discountedPrice);
                imgs[1].setAttribute("src",value.preview + value.thumbnail);
                colors[1].append(value.colors[0]);
                sizes[1].append(value.sizes[0]);
                totalPrice += value.price;
                appliedDiscount += value.discountedPrice;
                numItems += 1;
                break;
            case "07cf6ce2-6eee-4e78-a441-f257fdea7ed6":
                //Boyfriend T-Shirt with Bohemian Print
                titles[2].append(value.title);
                if(signsAfterComma(value.price) == 1)
                    prices[2].append(sign+value.price+0);
                else prices[2].append(sign+value.price);
                itemDiscPrices[2].append(value.discountedPrice);
                imgs[2].setAttribute("src",value.preview + value.thumbnail);
                colors[2].append(value.colors[0]);
                sizes[2].append(value.sizes[0]);
                totalPrice += value.price;
                appliedDiscount += value.discountedPrice;
                numItems += 1;
                break;
            case "8b300772-eee3-4ff1-b091-e89f17e0e469":
                //Neck Knitted Jumper
                titles[3].append(value.title);
                if(signsAfterComma(value.price) == 1)
                    prices[3].append(sign+value.price+0);
                else prices[3].append(sign+value.price);
                itemDiscPrices[3].append(value.discountedPrice);
                imgs[3].setAttribute("src",value.preview + value.thumbnail);
                colors[3].append(value.colors[0]);
                sizes[3].append(value.sizes[0]);
                totalPrice += value.price;
                appliedDiscount += value.discountedPrice;
                numItems += 1;
                break;
        }      
    }); 
    discount = totalPrice - appliedDiscount;
    if(signsAfterComma(totalPrice) == 1)
        spanTotalPrice[0].append(sign+totalPrice+0);
    else spanTotalPrice[0].append(sign+totalPrice);
    spanAppliedDiscount[0].append(sign+discount);
    if(signsAfterComma(appliedDiscount) == 1) 
        sumBag.append(sign+appliedDiscount+0);
    else sumBag.append(sign+appliedDiscount);
    numberOfGoods.append(numItems);
    if(discount == 0){
        document.getElementsByClassName("sum-discount")[0].innerHTML = "";
        document.getElementsByClassName("sum-price")[0].style.marginTop = "28px";
    }
    for(let i=0; i<prices.length; i++){
        arrPrices.push(prices[i].textContent.replace("£", ""));
        arrDiscountPrice.push(itemDiscPrices[i].textContent);
    }
}