chrome.contextMenus.create({
    id: 'clip-off',
    title: 'WebClip this',
    contexts: ['selection'] 
  });


async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log("Tab taken: ",tab.url);
    return tab.url;
  }
let current_bookmarks = [];




  

const fetchBookmarks = async () => {
  const currentBlog = await getCurrentTab();
  return new Promise((resolve)=>{
    chrome.storage.sync.get([currentBlog],(obj)=>{
      resolve(obj[currentBlog]? JSON.parse(obj[currentBlog]):[]);
    })
  })
}
const newBlogLoaded = async () =>{
  current_bookmarks = await fetchBookmarks();
}
chrome.tabs.onActivated.addListener(
  newBlogLoaded(),

)
chrome.contextMenus.onClicked.addListener(
    ({selectionText}) => {
      newBlogLoaded();
      addBookMarkEventHandler(selectionText);
      
        })

const addBookMarkEventHandler = async (selectionText) =>{
  const currentBlog = await getCurrentTab();
  const newBookmark = {
    
    text: selectionText,
    desc: selectionText.split('.')[0].split(' ').slice(0,3).join(' '),
    iddel: selectionText.split('.')[0].split(' ').slice(0,3).join('-'),
    url: currentBlog
  }
  console.log("BookmarKs :",newBookmark);

  console.log("current bookmark: ",current_bookmarks)
  chrome.storage.sync.set({
    [currentBlog]:JSON.stringify([...current_bookmarks,newBookmark])

  })
  current_bookmarks = await fetchBookmarks();
  console.log("current bookmark: ",current_bookmarks)

}
 
