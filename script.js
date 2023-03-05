let curbm = ["bookmark 1","bookmark 2","bookmark 3"]
let othbm = ["site 1","site 2","site 3"]
var i=4

const add = document.querySelector("#add")
const bms = document.querySelector(".cbms")
const swit = document.querySelectorAll("#switch")
const curr = document.querySelector(".current")
const othe = document.querySelector(".other")
const boks = document.querySelectorAll("#bm")
const tra = document.querySelectorAll("#imag")


swit[0].onmousedown = function () {
    curr.style.display = "none"
    othe.style.display = "block"
}

swit[1].onmousedown = function () {
    curr.style.display = "block"
    othe.style.display = "none"
}

add.onmousedown = function(){
    curbm.append("bookmark 4")
    i++
    const text = "<div id=\"book\">bookmark 4</div> <svg id=\"imag\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z\" /></svg>"
    bms.innerHTML+= text
}

for(var i=0; i<tra.length; i++){
    const icon = tra[i]
    icon.onclick = function(){
        const par = icon.parentNode
        par.innerHTML = null
        par.style.display = "none"
        Gbg()
    }    
}

function Gbg(){
    const divs = document.querySelectorAll("div")
    for (var j=0; j<divs.length; j++){
        if (divs[j].innerText==null){
            divs[j].remove
        }
    }
}