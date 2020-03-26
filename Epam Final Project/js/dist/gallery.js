"use struct";

function currentImg1() {
    document.getElementsByClassName("wrapper-active")[1].classList.remove("small-img-active");
    document.getElementsByClassName("wrapper-active")[2].classList.remove("small-img-active");
    document.getElementsByClassName("wrapper-active")[0].classList.add("small-img-active");
    document.getElementsByClassName("gallery__big-img1")[0].style.display = "block";
    document.getElementsByClassName("gallery__big-img2")[0].style.display = "none";
    document.getElementsByClassName("gallery__big-img3")[0].style.display = "none";
}
function currentImg2() {
    document.getElementsByClassName("wrapper-active")[0].classList.remove("small-img-active");
    document.getElementsByClassName("wrapper-active")[2].classList.remove("small-img-active");
    document.getElementsByClassName("wrapper-active")[1].classList.add("small-img-active");
    document.getElementsByClassName("gallery__big-img2")[0].style.display = "block";
    document.getElementsByClassName("gallery__big-img1")[0].style.display = "none";
    document.getElementsByClassName("gallery__big-img3")[0].style.display = "none";
}
function currentImg3() {
    document.getElementsByClassName("wrapper-active")[0].classList.remove("small-img-active");
    document.getElementsByClassName("wrapper-active")[1].classList.remove("small-img-active");
    document.getElementsByClassName("wrapper-active")[2].classList.add("small-img-active");
    document.getElementsByClassName("gallery__big-img3")[0].style.display = "block";
    document.getElementsByClassName("gallery__big-img1")[0].style.display = "none";
    document.getElementsByClassName("gallery__big-img2")[0].style.display = "none";
}