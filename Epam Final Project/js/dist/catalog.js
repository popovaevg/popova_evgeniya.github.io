"use strict";

function drawCatalog() {
    catalog.forEach(function (value) {
        switch (value.id) {
            case "8c061815-6a7d-4465-bb78-1bdc6c5adebf":
                //Only Skinny Jeans
                titles[0].append(value.title);
                prices[0].append(sign + value.price);
                imgs[0].setAttribute("src", value.preview + value.thumbnail);
                break;
            case "8b300772-eee3-4ff1-b091-e89f17e0e469":
                //Neck Knitted Jumper
                titles[1].append(value.title);
                prices[1].append(sign + value.price);
                imgs[1].setAttribute("src", value.preview + value.thumbnail);
                break;
            case "9ded7821-e510-4a16-ba9f-57c1e3442ad8":
                //Turtle Neck Jumper in Rib
                titles[2].append(value.title);
                prices[2].append(sign + value.price);
                imgs[2].setAttribute("src", value.preview + value.thumbnail);
                titles[4].append(value.title);
                prices[4].append(sign + value.price);
                imgs[4].setAttribute("src", value.preview + value.thumbnail);
                break;
            case "739d3ae0-6dca-4453-a7a4-a94b841a296d":
                //With Patchwork Crochet
                titles[3].append(value.title);
                prices[3].append(sign + value.price);
                imgs[3].setAttribute("src", value.preview + value.thumbnail);
                titles[5].append(value.title);
                prices[5].append(sign + value.price);
                imgs[5].setAttribute("src", value.preview + value.thumbnail);
                break;
            case "5677f851-1c4a-4e9b-80e9-16d1e6265257":
                //Levi’s Jeans for women
                titles[6].append(value.title);
                prices[6].append(sign + value.price);
                imgs[6].setAttribute("src", value.preview + value.thumbnail);
                break;
            case "07cf6ce2-6eee-4e78-a441-f257fdea7ed6":
                //Boyfriend T-Shirt with Bohemian Print
                titles[7].append(value.title);
                oldPrice[0].append(sign + value.discountedPrice);
                prices[7].append(sign + value.price);
                imgs[7].setAttribute("src", value.preview + value.thumbnail);
                break;
            case "ccc8a5d5-7cdf-4706-95f2-abc64761400d":
                //Colour Block
                titles[8].append(value.title);
                prices[8].append(sign + value.price);
                imgs[8].setAttribute("src", value.preview + value.thumbnail);
                break;
            case "014c271a-2811-47fc-b63f-ba279a4ec830":
                //Monki Festval Knitted
                titles[9].append(value.title);
                prices[9].append(sign + value.price);
                imgs[9].setAttribute("src", value.preview + value.thumbnail);
                break;
            case "e50a3153-7833-4b85-b412-1a39d215fd38":
                //Oversized Cardigan
                titles[10].append(value.title);
                prices[10].append(sign + value.price);
                imgs[10].setAttribute("src", value.preview + value.thumbnail);
                break;
            case "ff665110-5e7f-435d-b1b4-651c3d5050ca":
                //Paul & Joe Sister Jumper with Neon Trims
                titles[11].append(value.title);
                prices[11].append(sign + value.price);
                imgs[11].setAttribute("src", value.preview + value.thumbnail);
                break;
            case "bec71daa-d133-473d-bbb0-1ee0a427a17d":
                //Only Busted Knee Jean
                titles[12].append(value.title);
                prices[12].append(sign + value.price);
                imgs[12].setAttribute("src", value.preview + value.thumbnail);
                break;
            case "0fdfa061-838d-42ab-ae06-99c66115f633":
                //Boyfriend T-Shirt with Paris Print
                titles[13].append(value.title);
                prices[13].append(sign + value.price);
                imgs[13].setAttribute("src", value.preview + value.thumbnail);
                break;
        }
    });
}
drawCatalog();

var clickedLi = document.getElementsByClassName("top-filter__li");

var selectedLiFashion = document.getElementsByClassName("selected-li-fashion")[0];
var liFashion = document.getElementsByClassName("li-fashion");
var ulFashion = document.getElementById("ul-fashion");
var strSelectedFashion = document.getElementsByClassName("str-selected__fashion")[0];
var liNotSelectedFashion = document.getElementsByClassName("li-notSelected-fashion")[0];

var _loop = function _loop(i) {
    liFashion[i].addEventListener("click", function () {
        if (screen.width > 768) {
            selectedLiFashion.innerHTML = "";
            selectedLiFashion.append(liFashion[i].textContent);
            ulFashion.classList.add("select-item");
            clickedLi[0].classList.add("clicked-li");
            document.getElementsByClassName("top-filter__select")[0].style.marginTop = "30px";
            clickedLi[0].style.background = "#e5e5e5";
            selectedLiFashion.style.background = "#e5e5e5";
        }
        if (screen.width <= 768) {
            strSelectedFashion.innerHTML = "";
            strSelectedFashion.append(liFashion[i].textContent + ", ");
            strSelectedFashion.style.color = "#f14a58";
            for (var k = 0; k < liFashion.length; k++) {
                liFashion[k].style.color = "#a8a8a8";
                liFashion[k].classList.remove("red-disc");
                liNotSelectedFashion.classList.remove("black-disc");
            }
            liFashion[i].style.color = "#f14a58";
            liFashion[i].classList.add("red-disc");
            liNotSelectedFashion.style.color = "#a8a8a8";
        }
    });
};

for (var i = 0; i < liFashion.length; i++) {
    _loop(i);
}
liNotSelectedFashion.addEventListener("click", function () {
    if (screen.width > 768) {
        selectedLiFashion.innerHTML = "";
        ulFashion.classList.remove("select-item");
        clickedLi[0].classList.remove("clicked-li");
        document.getElementsByClassName("top-filter__select")[0].style.marginTop = "0";
        clickedLi[0].style.background = "none";
        selectedLiFashion.style.background = "none";
    }
    if (screen.width <= 768) {
        strSelectedFashion.innerHTML = "Fashion, ";
        strSelectedFashion.style.color = "#000000";
        for (var k = 0; k < liFashion.length; k++) {
            liFashion[k].style.color = "#a8a8a8";
            liFashion[k].classList.remove("red-disc");
        }
        liNotSelectedFashion.style.color = "#000000";
        liNotSelectedFashion.classList.add("black-disc");
    }
});

var selectedLiProductType = document.getElementsByClassName("selected-li-productType")[0];
var liproductType = document.getElementsByClassName("li-productType");
var strSelectedProductType = document.getElementsByClassName("str-selected__productType")[0];
var liNotSelectedProductType = document.getElementsByClassName("li-notSelected-productType")[0];

var _loop2 = function _loop2(i) {
    liproductType[i].addEventListener("click", function () {
        if (screen.width > 768) {
            selectedLiProductType.innerHTML = "";
            selectedLiProductType.append(liproductType[i].textContent);
            document.getElementById("ul-productType").classList.add("select-item");
            clickedLi[1].classList.add("clicked-li");
            document.getElementsByClassName("top-filter__select")[1].style.marginTop = "30px";
            clickedLi[1].style.background = "#e5e5e5";
            selectedLiProductType.style.background = "#e5e5e5";
        }
        if (screen.width <= 768) {
            strSelectedProductType.innerHTML = "";
            strSelectedProductType.append(liproductType[i].textContent + ", ");
            strSelectedProductType.style.color = "#f14a58";
            for (var k = 0; k < liproductType.length; k++) {
                liproductType[k].style.color = "#a8a8a8";
                liproductType[k].classList.remove("red-disc");
                liNotSelectedProductType.classList.remove("black-disc");
            }
            liproductType[i].style.color = "#f14a58";
            liproductType[i].classList.add("red-disc");
            liNotSelectedProductType.style.color = "#a8a8a8";
        }
    });
};

for (var i = 0; i < liproductType.length; i++) {
    _loop2(i);
}
liNotSelectedProductType.addEventListener("click", function () {
    if (screen.width > 768) {
        selectedLiProductType.innerHTML = "";
        document.getElementById("ul-productType").classList.remove("select-item");
        clickedLi[1].classList.remove("clicked-li");
        document.getElementsByClassName("top-filter__select")[1].style.marginTop = "0";
        clickedLi[1].style.background = "none";
        selectedLiProductType.style.background = "none";
    }
    if (screen.width <= 768) {
        strSelectedProductType.innerHTML = "Product type, ";
        strSelectedProductType.style.color = "#000000";
        for (var k = 0; k < liproductType.length; k++) {
            liproductType[k].style.color = "#a8a8a8";
            liproductType[k].classList.remove("red-disc");
        }
        liNotSelectedProductType.style.color = "#000000";
        liNotSelectedProductType.classList.add("black-disc");
    }
});

var selectedLiColor = document.getElementsByClassName("selected-li-color")[0];
var licolor = document.getElementsByClassName("li-color");
var strSelectedColor = document.getElementsByClassName("str-selected__color")[0];
var liNotSelectedColor = document.getElementsByClassName("li-notSelected-color")[0];

var _loop3 = function _loop3(i) {
    licolor[i].addEventListener("click", function () {
        if (screen.width > 768) {
            selectedLiColor.innerHTML = "";
            selectedLiColor.append(licolor[i].textContent);
            document.getElementById("ul-color").classList.add("select-item");
            clickedLi[2].classList.add("clicked-li");
            document.getElementsByClassName("top-filter__select")[2].style.marginTop = "30px";
            clickedLi[2].style.background = "#e5e5e5";
            selectedLiColor.style.background = "#e5e5e5";
        }
        if (screen.width <= 768) {
            strSelectedColor.innerHTML = "";
            strSelectedColor.append(licolor[i].textContent + ", ");
            strSelectedColor.style.color = "#f14a58";
            for (var k = 0; k < licolor.length; k++) {
                licolor[k].style.color = "#a8a8a8";
                licolor[k].classList.remove("red-disc");
                liNotSelectedColor.classList.remove("black-disc");
            }
            licolor[i].style.color = "#f14a58";
            licolor[i].classList.add("red-disc");
            liNotSelectedColor.style.color = "#a8a8a8";
        }
    });
};

for (var i = 0; i < licolor.length; i++) {
    _loop3(i);
}
liNotSelectedColor.addEventListener("click", function () {
    if (screen.width > 768) {
        selectedLiColor.innerHTML = "";
        document.getElementById("ul-color").classList.remove("select-item");
        clickedLi[2].classList.remove("clicked-li");
        document.getElementsByClassName("top-filter__select")[2].style.marginTop = "0";
        clickedLi[2].style.background = "none";
        selectedLiColor.style.background = "none";
    }
    if (screen.width <= 768) {
        strSelectedColor.innerHTML = "Color, ";
        strSelectedColor.style.color = "#000000";
        for (var k = 0; k < licolor.length; k++) {
            licolor[k].style.color = "#a8a8a8";
            licolor[k].classList.remove("red-disc");
        }
        liNotSelectedColor.style.color = "#000000";
        liNotSelectedColor.classList.add("black-disc");
    }
});

var selectedLiBrand = document.getElementsByClassName("selected-li-brand")[0];
var librand = document.getElementsByClassName("li-brand");
var strSelectedBrand = document.getElementsByClassName("str-selected__brand")[0];
var liNotSelectedBrand = document.getElementsByClassName("li-notSelected-brand")[0];

var _loop4 = function _loop4(i) {
    librand[i].addEventListener("click", function () {
        if (screen.width > 768) {
            selectedLiBrand.innerHTML = "";
            selectedLiBrand.append(librand[i].textContent);
            document.getElementById("ul-brand").classList.add("select-item");
            clickedLi[3].classList.add("clicked-li");
            document.getElementsByClassName("top-filter__select")[3].style.marginTop = "30px";
            clickedLi[3].style.background = "#e5e5e5";
            selectedLiBrand.style.background = "#e5e5e5";
        }
        if (screen.width <= 768) {
            strSelectedBrand.innerHTML = "";
            strSelectedBrand.append(librand[i].textContent + ", ");
            strSelectedBrand.style.color = "#f14a58";
            for (var k = 0; k < librand.length; k++) {
                librand[k].style.color = "#a8a8a8";
                librand[k].classList.remove("red-disc");
                liNotSelectedBrand.classList.remove("black-disc");
            }
            librand[i].style.color = "#f14a58";
            librand[i].classList.add("red-disc");
            liNotSelectedBrand.style.color = "#a8a8a8";
        }
    });
};

for (var i = 0; i < librand.length; i++) {
    _loop4(i);
}
liNotSelectedBrand.addEventListener("click", function () {
    if (screen.width > 768) {
        selectedLiBrand.innerHTML = "";
        document.getElementById("ul-brand").classList.remove("select-item");
        clickedLi[3].classList.remove("clicked-li");
        document.getElementsByClassName("top-filter__select")[3].style.marginTop = "0";
        clickedLi[3].style.background = "none";
        selectedLiBrand.style.background = "none";
    }
    if (screen.width <= 768) {
        strSelectedBrand.innerHTML = "Brand, ";
        strSelectedBrand.style.color = "#000000";
        for (var k = 0; k < librand.length; k++) {
            librand[k].style.color = "#a8a8a8";
            librand[k].classList.remove("red-disc");
        }
        liNotSelectedBrand.style.color = "#000000";
        liNotSelectedBrand.classList.add("black-disc");
    }
});

var selectedLiSize = document.getElementsByClassName("selected-li-size")[0];
var lisize = document.getElementsByClassName("li-size");
var strSelectedSize = document.getElementsByClassName("str-selected__size")[0];
var liNotSelectedSize = document.getElementsByClassName("li-notSelected-size")[0];

var _loop5 = function _loop5(i) {
    lisize[i].addEventListener("click", function () {
        if (screen.width > 768) {
            selectedLiSize.innerHTML = "";
            selectedLiSize.append(lisize[i].textContent);
            document.getElementById("ul-size").classList.add("select-item");
            clickedLi[4].classList.add("clicked-li");
            document.getElementsByClassName("top-filter__select")[4].style.marginTop = "30px";
            clickedLi[4].style.background = "#e5e5e5";
            selectedLiSize.style.background = "#e5e5e5";
        }
        if (screen.width <= 768) {
            strSelectedSize.innerHTML = "";
            strSelectedSize.append(lisize[i].textContent + ", ");
            strSelectedSize.style.color = "#f14a58";
            for (var k = 0; k < lisize.length; k++) {
                lisize[k].style.color = "#a8a8a8";
                lisize[k].classList.remove("red-disc");
                liNotSelectedSize.classList.remove("black-disc");
            }
            lisize[i].style.color = "#f14a58";
            lisize[i].classList.add("red-disc");
            liNotSelectedSize.style.color = "#a8a8a8";
        }
    });
};

for (var i = 0; i < lisize.length; i++) {
    _loop5(i);
}
liNotSelectedSize.addEventListener("click", function () {
    if (screen.width > 768) {
        selectedLiSize.innerHTML = "";
        document.getElementById("ul-size").classList.remove("select-item");
        clickedLi[4].classList.remove("clicked-li");
        document.getElementsByClassName("top-filter__select")[4].style.marginTop = "0";
        clickedLi[4].style.background = "none";
        selectedLiSize.style.background = "none";
    }
    if (screen.width <= 768) {
        strSelectedSize.innerHTML = "Size, ";
        strSelectedSize.style.color = "#000000";
        for (var k = 0; k < lisize.length; k++) {
            lisize[k].style.color = "#a8a8a8";
            lisize[k].classList.remove("red-disc");
        }
        liNotSelectedSize.style.color = "#000000";
        liNotSelectedSize.classList.add("black-disc");
    }
});

var selectedLiPriceRange = document.getElementsByClassName("selected-li-priceRange")[0];
var lipriceRange = document.getElementsByClassName("li-priceRange");
var strSelectedPriceRange = document.getElementsByClassName("str-selected__priceRange")[0];
var liNotSelectedPriceRange = document.getElementsByClassName("li-notSelected-priceRange")[0];

var _loop6 = function _loop6(i) {
    lipriceRange[i].addEventListener("click", function () {
        if (screen.width > 768) {
            selectedLiPriceRange.innerHTML = "";
            selectedLiPriceRange.append(lipriceRange[i].textContent);
            document.getElementById("ul-priceRange").classList.add("select-item");
            clickedLi[5].classList.add("clicked-li");
            document.getElementsByClassName("top-filter__select")[5].style.marginTop = "30px";
            clickedLi[5].style.background = "#e5e5e5";
            selectedLiPriceRange.style.background = "#e5e5e5";
        }
        if (screen.width <= 768) {
            strSelectedPriceRange.innerHTML = "";
            strSelectedPriceRange.append(lipriceRange[i].textContent);
            strSelectedPriceRange.style.color = "#f14a58";
            for (var k = 0; k < lipriceRange.length; k++) {
                lipriceRange[k].style.color = "#a8a8a8";
                lipriceRange[k].classList.remove("red-disc");
                liNotSelectedPriceRange.classList.remove("black-disc");
            }
            lipriceRange[i].style.color = "#f14a58";
            lipriceRange[i].classList.add("red-disc");
            liNotSelectedPriceRange.style.color = "#a8a8a8";
        }
    });
};

for (var i = 0; i < lipriceRange.length; i++) {
    _loop6(i);
}
liNotSelectedPriceRange.addEventListener("click", function () {
    if (screen.width > 768) {
        selectedLiPriceRange.innerHTML = "";
        document.getElementById("ul-priceRange").classList.remove("select-item");
        clickedLi[5].classList.remove("clicked-li");
        document.getElementsByClassName("top-filter__select")[5].style.marginTop = "0";
        clickedLi[5].style.background = "none";
        selectedLiPriceRange.style.background = "none";
    }
    if (screen.width <= 768) {
        strSelectedPriceRange.innerHTML = "Price range";
        strSelectedPriceRange.style.color = "#000000";
        for (var k = 0; k < lipriceRange.length; k++) {
            lipriceRange[k].style.color = "#a8a8a8";
            lipriceRange[k].classList.remove("red-disc");
        }
        liNotSelectedPriceRange.style.color = "#000000";
        liNotSelectedPriceRange.classList.add("black-disc");
    }
});

var topFilterUl = document.getElementsByClassName("top-filter__ul")[0];
var cross = document.getElementsByClassName("str-selected__cross")[0];
cross.addEventListener("click", function () {
    topFilterUl.style.display = "none";
    cross.style.display = "none";
    if (screen.width <= 375) {
        triangle.style.display = "block";
    }
    document.getElementsByClassName("overlay")[0].classList.remove("tone");
});

var triangle = document.getElementsByClassName("str-selected__triangle")[0];
triangle.addEventListener("click", function () {
    topFilterUl.style.display = "block";
    cross.style.display = "block";
    if (screen.width <= 768) {
        document.getElementsByClassName("overlay")[0].classList.add("tone");
    }
    if (screen.width <= 375) {
        triangle.style.display = "none";
    }
});