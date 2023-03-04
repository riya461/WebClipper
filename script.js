const swit = document.querySelectorAll("#switch")
const curr = document.querySelector(".current")
const othe = document.querySelector(".other")
const boks = document.querySelectorAll("#bm")
console.log(boks)


swit[0].onmousedown = function () {
    curr.style.display = "none"
    othe.style.display = "block"
}

swit[1].onmousedown = function () {
    curr.style.display = "block"
    othe.style.display = "none"
}

// for (const item of boks){
//     item.onmouseover = function(){
//         item.style.cursor = "pointer"
//     }
// }