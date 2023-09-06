chrome.contextMenus.create({
    id: 'webclipping ',
    title: 'WebClip this',
    contexts: ['selection'] 
  });

let current_bookmarks = [];

let currentBlog = "";
chrome.tabs.onUpdated.addListener((tabId,tab) =>{
    currentBlog=JSON.stringify(tabId);
    console.log(currentBlog);
  //   chrome.tabs.sendMessage(tabId,{
  //     type: "NEW",
  //     blogId: tabId,
  // })
  newBlogLoaded();
 
  });

  

const fetchBookmarks = () => {
  return new Promise((resolve)=>{
    chrome.storage.sync.get([currentBlog],(obj)=>{
      resolve(obj[currentBlog]? JSON.parse(obj[currentBlog]):[]);
    })
  })
}
const newBlogLoaded = async () =>{
  current_bookmarks = await fetchBookmarks();
}
  chrome.contextMenus.onClicked.addListener(
    ({selectionText}) => {

      addBookMarkEventHandler(selectionText);
      
        

        })

const addBookMarkEventHandler = async (selectionText) =>{
  const newBookmark = {
    
    text: selectionText,
    desc: selectionText.split('.')[0]
  }
  console.log(newBookmark);

  console.log(current_bookmarks)
  chrome.storage.sync.set({
    [currentBlog]:JSON.stringify([...current_bookmarks,newBookmark])

  })
  current_bookmarks = await fetchBookmarks();
  console.log(current_bookmarks)

  // mapping to chrome storage 
}
 
