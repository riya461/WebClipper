// import {addBookmark} from './background.js'
var i=4
let curbm = []
let othbm = []
var j = 1
var k = 1

const addc = document.querySelector("#addc")
const addo = document.querySelector("#addo")
const bms = document.querySelector(".cbms")
const swit = document.querySelectorAll("#switch")
const curr = document.querySelector(".current")
const othe = document.querySelector(".other")
const boks = document.querySelectorAll("#bm")
const tra = document.querySelectorAll("#imag")
// const bmark = document.querySelectorAll("#book")

// bmark.onclick (() => {
//     const val = addBookmark();
//     const placeholder = document.getElementsByClassName("1")
//     placeholder.innerHTML = ''
//     const para = document.createElement("p");
//     para.innerText = val;
//     document.body.appendChild(para);
// })

swit[0].onmousedown = function () {
    curr.style.display = "none"
    othe.style.display = "block"
}

swit[1].onmousedown = function () {
    curr.style.display = "block"
    othe.style.display = "none"
}

// const bmref = document.querySelector("#bmref")
// const divref = document.querySelector("#divref")
// divref.id = "bm"


// add.onmousedown = function () {
//     curbm.push("bookmark "+i)
//     bmrefcren
//     console.log(bmref.children)
//     const child1 = bmref.children[0]
//     console.log(child1)
//     child1.innerText = null
//     child1.innerText+= curbm[i-1]
//     const child2 = bmref.children[1]
//     bms.appendChild(divref)
//     const bmschildren = bms.children
    
//     bmschildren[bmschildren.length-1].appendChild(child1)
//     bmschildren[bmschildren.length-1].appendChild(child2)

//     i++
// }

for (var i=0; i<boks.length; i++){
    boks[i].style.display="none"
}

// boks[0].style.display = "block"

addc.onmousedown = function(){
    curbm.push("bookmark "+j)
    for(var i=0; i<3; i++){
        if (boks[i].style.display == "none"){
            const cren = boks[i].children
            console.log(cren[0].innerText)
            cren[0].innerText = "placeholder"
            console.log(cren[0].innerText)
            console.log(cren[0].id)
            boks[i].style.display="block"
            break
        }
    }
}

addo.onmousedown = function(){
    //othbm.push("bookmark "+j)
    for(var i=3; i<6; i++){
        if (boks[i].style.display == "none"){
            const cren = boks[i].children
            cren[0].innerHTML = 'placeholder'
            boks[i].style.display="block"
            break
        }
    }
}

for (var i = 0; i < tra.length; i++) {
    const icon = tra[i]
    icon.onclick = function () {
        const par = icon.parentNode
        // const chren = par.children
        // chren[0].innerText = null
        par.style.display = "none"
        Gbg()
    }
}

function Gbg() {
    const divs = document.querySelectorAll("div")
    for (var j = 0; j < divs.length; j++) {
        if (divs[j].innerText == null) {
            divs[j].remove
        }
    }
}

