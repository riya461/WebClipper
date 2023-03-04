const swit1 = document.querySelector("#switch1");
const swit2 = document.querySelector("#switch2")
const curr = document.querySelector(".current");
const othe = document.querySelector(".other");

swit1.onmousedown = function () {
    curr.style.display = "none";
    othe.style.display = "block";
}

swit2.onmousedown = function () {
    curr.style.display = "block"
    othe.style.display = "none"
}