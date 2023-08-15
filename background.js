chrome.contextMenus.create({
    id: 'clip',
    title: 'WebClip this',
    contexts: ['selection'] 
  });


  chrome.contextMenus.onClicked.addListener(
    ({selectionText}) => {
        console.log("Text selected" + selectionText)
        
        chrome.tabs.query({active: true, currentWindow:true}, tabs => {
            let urlval = tabs[0].url;
            console.log("The current url " + urlval)
            


        })

    }
  ) 

  
