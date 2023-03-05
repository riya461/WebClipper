chrome.contextMenus.create({
    id: 'clip',
    title: 'WebClip this',
    contexts: ['selection'] 
  });

  const url_vals = []
  var dict = [];

  chrome.contextMenus.onClicked.addListener(
    ({selectionText}) => {
        console.log(selectionText)
        
        chrome.tabs.query({active: true, currentWindow:true}, tabs => {
            let urlval = tabs[0].url;
            console.log(urlval)
            
            if (dict.includes(urlval))
            {
              const pos = dict.indexOf(urlval);
              dict[pos+1].push(selectionText)
              console.log(dict)
            }
            else {
              dict.push(urlval)
              dict.push({selectionText})
              console.log(dict)
            }
        //search whether if the current web page already has any bookmarks
        //if not add the url to the url


        })

    }
  ) 

  chrome.contextMenus.onClicked.addListener(
    ({}) => {
        console.log("In the context menu")
        
        chrome.tabs.query({active: true, currentWindow:true}, tabs => {
            let urlval = tabs[0].url;
            console.log(urlval);
            if (url_vals.includes(urlval))
            url_vals.push(urlval)

            const presentUrl = dict.indexOf(tabs[0].url)
    console.log(dict[presentUrl+1[0]]);

            
            
        })
        console.log(url_vals)
       
  });

  // export function addBookmark()
  // {
  //   console.log("Inside fn")
  //   const presentUrl = dict.indexOf(tabs[0].url)
  //   return dict[presentUrl+1[0]];
  // }