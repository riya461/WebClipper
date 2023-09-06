
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
  }
const addNewBookmark = (bookmarksElement,bookmark) =>{

    // adding the bookmark in parent class cbms child class bm '
    // within bm there is class book with desc and imag to be added too
    
    const newBookMark = document.createElement('div');

    newBookMark.className="bm";
    newBookMark.id="bm-"+ bookmark.desc;

    const bookMarkTitle = newBookMark.appendChild(document.createElement('div'));
    bookMarkTitle.textContent = bookmark.desc;
    bookMarkTitle.className="book";

    const controlsElement = newBookMark.appendChild(document.createElement('div'));
    controlsElement.textContent ="-";
    controlsElement.className="imag";

    // find a better id format 

    // deleting 

    // setBookmarkAttributes("delete",onDelete,controlsElement);

    bookmarksElement.appendChild(newBookMark);


}
const viewBookmarks = (current_bookmarks=[])=>{
    const bookmarksElement = document.getElementById("cbms");
    bookmarksElement.innerHTML="";
    
    //  if bookmark present 
    if(current_bookmarks.length > 0){
        for(let i=0;i<current_bookmarks.length;i++){
            const bookmark = current_bookmarks[i];
            addNewBookmark(bookmarksElement,bookmark);

        }
    }
    else{
        bookmarksElement.innerHTML ="<i>There are no bookmarks for this page  </i>";
    }
    return;
}

const onDelete = async e =>{
    
    const activeTab = await getCurrentTab();
    const idval = e.target.parentNode.parentNode.getAttribute("desc");
    const bookmarksElementDel = document.getElementById("bookmark-"+ idval);

    bookmarksElementDel.parentNode.removeChild(bookmarksElementDel);

    chrome.tabs.sendMessage(activeTab.id, {
        type: "DELETE",
        value: idval,
      }, viewBookmarks);
    

};

// const setBookmarkAttributes = (src,eventListener, controlParentElement)=>{
//     const controlsElement = document.createElement("img");
//     controlsElement.src = "img/" + src + ".png";
//     controlsElement.title=src;
//     controlsElement.addEventListener("click",eventListener);
//     controlParentElement.appendChild(controlsElement);
// }

document.addEventListener("DOMContentLoaded", async () =>{
    
    const currentBlog = await getCurrentTab();
    console.log("Current: ",currentBlog);
    chrome.storage.sync.get([currentBlog],(data)=>{
        const current_bookmarks = data[currentBlog] ? JSON.parse(data[currentBlog]):[];

        // view bookmark 
        viewBookmarks(current_bookmarks);
    })

})
// const addc = document.querySelector("#addc")
// const addo = document.querySelector("#addo")
// const bms = document.querySelector(".cbms")
// const swit = document.querySelectorAll("#switch")
// const curr = document.querySelector(".current")
// const othe = document.querySelector(".other")
// const boks = document.querySelectorAll("#bm")
// const tra = document.querySelectorAll("#imag")
// // const bmark = document.querySelectorAll("#book")

// // bmark.onclick (() => {
// //     const val = addBookmark();
// //     const placeholder = document.getElementsByClassName("1")
// //     placeholder.innerHTML = ''
// //     const para = document.createElement("p");
// //     para.innerText = val;
// //     document.body.appendChild(para);
// // })

// swit[0].onmousedown = function () {
//     curr.style.display = "none"
//     othe.style.display = "block"
// }

// swit[1].onmousedown = function () {
//     curr.style.display = "block"
//     othe.style.display = "none"
// }

// // const bmref = document.querySelector("#bmref")
// // const divref = document.querySelector("#divref")
// // divref.id = "bm"


// // add.onmousedown = function () {
// //     curbm.push("bookmark "+i)
// //     bmrefcren
// //     console.log(bmref.children)
// //     const child1 = bmref.children[0]
// //     console.log(child1)
// //     child1.innerText = null
// //     child1.innerText+= curbm[i-1]
// //     const child2 = bmref.children[1]
// //     bms.appendChild(divref)
// //     const bmschildren = bms.children
    
// //     bmschildren[bmschildren.length-1].appendChild(child1)
// //     bmschildren[bmschildren.length-1].appendChild(child2)

// //     i++
// // }



// for (var i=0; i<boks.length; i++){
//     boks[i].style.display="none"
// }


// addc.onmousedown = function(){
//     curbm.push("bookmark "+j)
//     for(var i=0; i<3; i++){
//         if (boks[i].style.display == "none"){
//             const cren = boks[i].children
//             cren[0].innerText = "placeholder"
//             boks[i].style.display="block"
//             break
//         }
//     }
// }

// addo.onmousedown = function(){
//     for(var i=3; i<6; i++){
//         if (boks[i].style.display == "none"){
//             const cren = boks[i].children
//             cren[0].innerHTML = 'placeholder'
//             boks[i].style.display="block"
//             break
//         }
//     }
// }

// for (var i = 0; i < tra.length; i++) {
//     const icon = tra[i]
//     icon.onclick = function () {
//         const par = icon.parentNode
//         par.style.display = "none"
//         Gbg()
//     }
// }

// function Gbg() {
//     const divs = document.querySelectorAll("div")
//     for (var j = 0; j < divs.length; j++) {
//         if (divs[j].innerText == null) {
//             divs[j].remove
//         }
//     }
// }

