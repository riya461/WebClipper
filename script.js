let current_bookmarks=[];
let currentBlog="";
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.url;
  }
const addNewBookmark = async (bookmarksElement,bookmark) =>{

  
    const tabval = await getCurrentTab();
    if(bookmark.url === tabval && bookmark.valf === "true"){
    const newBookMark = document.createElement('div');

    newBookMark.className="bm";
    newBookMark.id=bookmark.iddel;

    const bookMarkTitle = document.createElement('div');
    bookMarkTitle.textContent = bookmark.desc;
    bookMarkTitle.className="book";

    const controlsElement = document.createElement('button');
    controlsElement.textContent ="-";
    controlsElement.className="imag";
    controlsElement.id="imag";

    
  

    

    newBookMark.appendChild(bookMarkTitle);
    newBookMark.appendChild(controlsElement);
    bookmarksElement.appendChild(newBookMark);

    controlsElement.addEventListener("click", OnDelete);
    }


}

async function OnDelete(e)  {
    const tabval = await getCurrentTab();
    const val = e.target.parentElement.id;
    console.log("Clicked ",val);
    const bookmarksElementDel = document.getElementById(val);
    bookmarksElementDel.parentNode.removeChild(bookmarksElementDel);


        // remove from chrome storage
        // iddel = val 
        current_bookmarks = current_bookmarks.filter((b) => b.iddel != val);

        console.log(current_bookmarks);
        chrome.storage.sync.set({
            [tabval]:JSON.stringify([...current_bookmarks])
        
          })


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


document.addEventListener("DOMContentLoaded", async () =>{
    
    currentBlog = await getCurrentTab();
    console.log("Current: ",currentBlog);
    chrome.storage.sync.get([currentBlog],(data)=>{
        current_bookmarks = data[currentBlog] ? JSON.parse(data[currentBlog]):[];

        // view bookmark 
        viewBookmarks(current_bookmarks);
    })

})
