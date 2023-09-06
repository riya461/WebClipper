chrome.contextMenus.create({
    id: 'clip-off-menu',
    title: 'WebClip this',
    contexts: ['selection'] 
  });


async function getCurrentTabval() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log("Tab taken: ",tab.url);
    return tab.url;
  }
let current_bookmark = [];


const fetchBookmarks = async () => {
  const currentBlog = await getCurrentTabval();
  return new Promise((resolve)=>{
    chrome.storage.sync.get([currentBlog],(obj)=>{
      resolve(obj[currentBlog]? JSON.parse(obj[currentBlog]):[]);
    })
  })
}

chrome.tabs.onActivated.addListener( async () =>{
  current_bookmark = await fetchBookmarks()
}


)
chrome.contextMenus.onClicked.addListener(
    ({selectionText}) => {
      addBookMarkEventHandler(selectionText);
      
        })

const addBookMarkEventHandler = async (selectionText) =>{
  const currentBlog = await getCurrentTabval();
  const newBookmark = {
    
    text: selectionText,
    desc: selectionText.split('.')[0].split(' ').slice(0,3).join(' '),
    iddel: selectionText.split('.')[0].split(' ').slice(0,3).join('-'),
    url: currentBlog,
    valf: "true"
  }
  console.log("BookmarKs :",newBookmark);
  current_bookmark = await fetchBookmarks();


  console.log("current bookmark: ",current_bookmark)
  chrome.storage.sync.set({
    [currentBlog]:JSON.stringify([...current_bookmark,newBookmark])

  })
  current_bookmark = await fetchBookmarks();
  console.log("current bookmark: ",current_bookmark)

}
 
