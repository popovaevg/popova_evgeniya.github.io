"use strict";

function visibleSearch() {
    document.getElementsByClassName("search-input")[0].classList.add("visible-inp");
    document.getElementsByClassName("gradient")[0].classList.add("li-over");
}

var signsAfterComma = function signsAfterComma(x) {
    return x.toString().includes('.') ? x.toString().split('.').pop().length : 0;
};