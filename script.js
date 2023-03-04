const swit = document.getElementById("switch");
const current = document.getElementsByClassName("current");
const other = document.getElementsByClassName("other");
const hdin = document.querySelector("temp");
const bod = document.getElementsByClassName("main")
const bm1 = document.querySelector("bm1")

// swit.onmousedown = function(){
//     current.display = "none";
//     other.display = "block";
// }

hdin.onclick = function(){
    current.style.display = "block";
}

hdin.onclick = function(){
    bm1.innerText = "work aavada"
}
console.log("oi")