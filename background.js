chrome.contextMenus.create({
    id: 'clip',
    title: 'WebClip this',
    contexts: ['selection'] 
  });

let urls_val = [];
let texts = []
  chrome.contextMenus.onClicked.addListener(
    ({selectionText}) => {
        console.log("Text selected: " + selectionText)
        
        chrome.tabs.query({active: true, currentWindow:true}, tabs => {
            let urlval = JSON.stringify(tabs[0].url);
            console.log("The current url " + urlval)
            urls_val.push(urlval);
            texts.push(selectionText)
            console.log(texts)
            console.log("the value in the pgm " );
            console.log(urls_val)

                const arr = JSON.stringify(texts);
                chrome.storage.local.set({ urltexts: arr }).then(() => {
                  console.log("Value is set");
                });
                chrome.storage.local.get(["urltexts"]).then((result) => {
                  var obj = JSON.parse(result.urltexts); 
                  console.log("Value currently is " + obj);
                });
            



            


        })

    }
  ) 

  
