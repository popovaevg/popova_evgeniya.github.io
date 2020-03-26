"use strict";

function drawStart(){
    catalog.forEach((value) => {
        switch(value.id) {
            case "8c061815-6a7d-4465-bb78-1bdc6c5adebf":
                //Only Skinny Jeans
                titles[0].append(value.title);
                titles[5].append(value.title);
                prices[0].append(sign+value.price);
                prices[5].append(sign+value.price);
                imgs[0].setAttribute("src",value.preview + value.thumbnail);
                imgs[5].setAttribute("src",value.preview + value.thumbnail);
                itemDiscPrices[0].append(value.discountedPrice);
                break;
            case "8b300772-eee3-4ff1-b091-e89f17e0e469":
                //Neck Knitted Jumper
                titles[3].append(value.title);
                titles[6].append(value.title);
                prices[3].append(sign+value.price);
                prices[6].append(sign+value.price);
                imgs[3].setAttribute("src",value.preview + value.thumbnail);
                imgs[6].setAttribute("src",value.preview + value.thumbnail);
                itemDiscPrices[3].append(value.discountedPrice);
                break;
            case "9ded7821-e510-4a16-ba9f-57c1e3442ad8":
                //Turtle Neck Jumper in Rib
                titles[4].append(value.title);
                titles[7].append(value.title);
                prices[4].append(sign+value.price);
                prices[7].append(sign+value.price);
                imgs[4].setAttribute("src",value.preview + value.thumbnail);
                imgs[7].setAttribute("src",value.preview + value.thumbnail);
                itemDiscPrices[4].append(value.discountedPrice);
                break;
            case "739d3ae0-6dca-4453-a7a4-a94b841a296d":
                //With Patchwork Crochet
                titles[8].append(value.title);
                prices[8].append(sign+value.price);
                imgs[8].setAttribute("src",value.preview + value.thumbnail);
                break;
            case "5677f851-1c4a-4e9b-80e9-16d1e6265257":
                //Levi’s Jeans for women
                titles[2].append(value.title);
                prices[2].append(sign+value.price);
                imgs[2].setAttribute("src",value.preview + value.thumbnail);
                itemDiscPrices[2].append(value.discountedPrice);
                break;
            case "07cf6ce2-6eee-4e78-a441-f257fdea7ed6":
                //Boyfriend T-Shirt with Bohemian Print
                titles[1].append(value.title);
                prices[1].append(sign+value.price);
                imgs[1].setAttribute("src",value.preview + value.thumbnail);
                itemDiscPrices[1].append(value.discountedPrice);
                break;
        }
    });
}
drawStart();