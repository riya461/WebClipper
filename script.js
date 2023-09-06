
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.url;
  }
const addNewBookmark = async (bookmarksElement,bookmark) =>{

    // adding the bookmark in parent class cbms child class bm '
    // within bm there is class book with desc and imag to be added too
    const tabval = await getCurrentTab();
    if(bookmark.url === tabval){
    const newBookMark = document.createElement('div');

    newBookMark.className="bm";
    newBookMark.id="bm-"+ bookmark.iddel;

    const bookMarkTitle = document.createElement('div');
    bookMarkTitle.textContent = bookmark.desc;
    bookMarkTitle.className="book";

    const controlsElement = document.createElement('div');
    controlsElement.textContent ="-";
    controlsElement.className="imag";
    controlsElement.id="imag";

    // find a better id format 

    // deleting 

    // setBookmarkAttributes("delete",onDelete,controlsElement);

    newBookMark.appendChild(bookMarkTitle);
    newBookMark.appendChild(controlsElement);
    bookmarksElement.appendChild(newBookMark);
    }

}
const viewBookmarks = (current_bookmarks=[])=>{
    const bookmarksElement = document.getElementById("cbms");
    bookmarksElement.innerHTML="";
    
    //  if bookmark present 
    if(current_bookmarks.length > 0){
        for(let i=0;i<current_bookmarks.length;i++){
            const bookmark = current_bookmarks[i];
            console.log("bookmark - ",bookmark);
            addNewBookmark(bookmarksElement,bookmark);

        }
    }
    else{
        bookmarksElement.innerHTML ="<i>There are no bookmarks for this page  </i>";
    }
    return;
}

// const onDelete = async e =>{
    
//     const activeTab = await getCurrentTab();
//     const idval = e.target.parentNode.parentNode.getAttribute("iddel");
//     const bookmarksElementDel = document.getElementById("bm-"+ idval);

//     bookmarksElementDel.parentNode.removeChild(bookmarksElementDel);

//     chrome.tabs.sendMessage(activeTab, {
//         type: "DELETE",
//         value: idval,
//       }, viewBookmarks);
    

// };

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
